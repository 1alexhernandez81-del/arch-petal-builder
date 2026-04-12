import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import type { Tables } from "@/integrations/supabase/types";

type Inquiry = Tables<"contact_submissions">;
type Note = Tables<"inquiry_notes">;

const STATUS_OPTIONS = ["new", "contacted", "booked", "closed"] as const;
const STATUS_COLORS: Record<string, string> = {
  new: "bg-brand-sage/30 text-brand-onyx",
  contacted: "bg-brand-champagne/30 text-brand-onyx",
  booked: "bg-brand-blush/30 text-brand-onyx",
  closed: "bg-brand-taupe/30 text-brand-onyx",
};

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchInquiries = useCallback(async () => {
    let query = supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
    if (statusFilter !== "all") query = query.eq("status", statusFilter);
    const { data, error } = await query;
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      return;
    }
    setInquiries(data || []);
  }, [statusFilter, toast]);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin/login", { replace: true }); return; }

      const { data: isAdmin } = await supabase.rpc("has_role", {
        _user_id: session.user.id, _role: "admin",
      });
      if (!isAdmin) { navigate("/admin/login", { replace: true }); return; }

      setUserId(session.user.id);
      setLoading(false);
    };
    init();
  }, [navigate]);

  useEffect(() => {
    if (!loading) fetchInquiries();
  }, [loading, fetchInquiries]);

  const fetchNotes = async (inquiryId: string) => {
    const { data } = await supabase
      .from("inquiry_notes")
      .select("*")
      .eq("inquiry_id", inquiryId)
      .order("created_at", { ascending: true });
    setNotes(data || []);
  };

  const selectInquiry = (id: string) => {
    setSelectedId(id);
    setNewNote("");
    fetchNotes(id);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("contact_submissions").update({ status }).eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    fetchInquiries();
  };

  const addNote = async () => {
    if (!newNote.trim() || !selectedId || !userId) return;
    const { error } = await supabase.from("inquiry_notes").insert({
      inquiry_id: selectedId, user_id: userId, content: newNote.trim(),
    });
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    setNewNote("");
    fetchNotes(selectedId);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const selected = inquiries.find((i) => i.id === selectedId);

  if (loading) return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
      <p className="font-body text-brand-taupe">Loading...</p>
    </div>
  );

  const counts = {
    all: inquiries.length,
    new: inquiries.filter(i => i.status === "new").length,
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Toaster />
      {/* Header */}
      <header className="bg-white border-b border-brand-beige px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-xl text-brand-onyx tracking-[3px]">INQUIRIES</h1>
          <p className="font-body text-[10px] text-brand-taupe tracking-[2px] uppercase mt-0.5">
            Arch & Petal Co. — Admin
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleLogout}>Sign Out</Button>
      </header>

      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar — Inquiry List */}
        <div className="w-full md:w-[380px] border-r border-brand-beige bg-white overflow-y-auto">
          {/* Filters */}
          <div className="p-4 border-b border-brand-beige flex gap-2 flex-wrap">
            {["all", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`font-body text-[10px] uppercase tracking-[1.5px] px-3 py-1.5 transition-colors ${
                  statusFilter === s
                    ? "bg-brand-champagne text-white"
                    : "bg-brand-beige/40 text-brand-taupe hover:bg-brand-beige"
                }`}
              >
                {s} {s === "all" ? `(${counts.all})` : s === "new" ? `(${counts.new})` : ""}
              </button>
            ))}
          </div>

          {inquiries.length === 0 ? (
            <p className="p-6 font-body text-sm text-brand-taupe text-center">No inquiries yet.</p>
          ) : (
            inquiries.map((inq) => (
              <button
                key={inq.id}
                onClick={() => selectInquiry(inq.id)}
                className={`w-full text-left p-4 border-b border-brand-beige/60 transition-colors hover:bg-brand-warm-white ${
                  selectedId === inq.id ? "bg-brand-warm-white" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-body text-sm font-medium text-brand-onyx truncate">{inq.name}</p>
                    <p className="font-body text-xs text-brand-taupe truncate">{inq.email}</p>
                  </div>
                  <span className={`font-body text-[9px] uppercase tracking-[1px] px-2 py-0.5 whitespace-nowrap ${STATUS_COLORS[inq.status]}`}>
                    {inq.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="font-body text-[10px] text-brand-champagne">{inq.event_type}</span>
                  <span className="font-body text-[10px] text-brand-taupe">
                    {new Date(inq.created_at).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Detail Panel */}
        <div className="hidden md:flex flex-1 flex-col overflow-y-auto">
          {!selected ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="font-body text-sm text-brand-taupe">Select an inquiry to view details</p>
            </div>
          ) : (
            <div className="flex-1 p-8">
              <div className="max-w-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-heading text-2xl text-brand-onyx tracking-[2px]">{selected.name}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <a href={`mailto:${selected.email}`} className="font-body text-sm text-brand-champagne hover:underline">{selected.email}</a>
                      {selected.phone && <span className="font-body text-sm text-brand-taupe">{selected.phone}</span>}
                    </div>
                  </div>
                  <select
                    value={selected.status}
                    onChange={(e) => updateStatus(selected.id, e.target.value)}
                    className="font-body text-xs uppercase tracking-[1px] bg-transparent border border-brand-beige px-3 py-1.5 text-brand-onyx cursor-pointer focus:outline-none focus:border-brand-champagne"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[2px] text-brand-champagne mb-1">Event Type</p>
                    <p className="font-body text-sm text-brand-onyx">{selected.event_type}</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[2px] text-brand-champagne mb-1">Event Date</p>
                    <p className="font-body text-sm text-brand-onyx">
                      {selected.event_date ? new Date(selected.event_date).toLocaleDateString() : "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[2px] text-brand-champagne mb-1">Submitted</p>
                    <p className="font-body text-sm text-brand-onyx">
                      {new Date(selected.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-10">
                  <p className="font-body text-[10px] uppercase tracking-[2px] text-brand-champagne mb-2">Message</p>
                  <p className="font-body text-sm text-brand-onyx leading-relaxed bg-brand-warm-white p-4">
                    {selected.message}
                  </p>
                </div>

                {/* Notes */}
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[2px] text-brand-champagne mb-4">Notes</p>
                  <div className="space-y-3 mb-4">
                    {notes.length === 0 && (
                      <p className="font-body text-xs text-brand-taupe italic">No notes yet</p>
                    )}
                    {notes.map((note) => (
                      <div key={note.id} className="bg-white border border-brand-beige/60 p-3">
                        <p className="font-body text-sm text-brand-onyx">{note.content}</p>
                        <p className="font-body text-[10px] text-brand-taupe mt-1">
                          {new Date(note.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Add a note..."
                      rows={2}
                      className="flex-1 bg-transparent border border-brand-beige font-body text-sm text-brand-onyx placeholder:text-brand-taupe/50 p-3 focus:outline-none focus:border-brand-champagne resize-none"
                    />
                    <Button onClick={addNote} disabled={!newNote.trim()} className="self-end">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

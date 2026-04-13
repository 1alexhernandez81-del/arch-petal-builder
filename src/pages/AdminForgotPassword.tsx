import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });
      if (error) throw error;
      setSent(true);
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-brand-beige font-body font-light text-sm text-brand-onyx placeholder:text-brand-taupe/50 py-3 px-0 focus:outline-none focus:border-brand-champagne transition-colors";

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-6">
      <Toaster />
      <div className="w-full max-w-sm">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl text-brand-onyx tracking-[4px]">RESET</h1>
          <p className="font-body font-light text-xs text-brand-taupe mt-2 tracking-[2px] uppercase">
            Password Recovery
          </p>
        </div>
        {sent ? (
          <div className="text-center space-y-4">
            <p className="font-body text-sm text-brand-onyx">Check your email for a password reset link.</p>
            <Link
              to="/admin/login"
              className="font-body text-xs text-brand-champagne hover:underline tracking-[1px] uppercase"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
            <div className="text-center">
              <Link
                to="/admin/login"
                className="font-body text-xs text-brand-taupe hover:text-brand-champagne transition-colors tracking-[1px] uppercase"
              >
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminForgotPassword;

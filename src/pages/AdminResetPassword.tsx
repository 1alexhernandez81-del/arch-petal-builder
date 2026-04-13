import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Eye, EyeOff } from "lucide-react";

const AdminResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Listen for the PASSWORD_RECOVERY event from the hash fragment
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: "Error", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Password Updated", description: "You can now sign in with your new password." });
      setTimeout(() => navigate("/admin/login", { replace: true }), 2000);
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
          <h1 className="font-heading text-3xl text-brand-onyx tracking-[4px]">NEW PASSWORD</h1>
          <p className="font-body font-light text-xs text-brand-taupe mt-2 tracking-[2px] uppercase">
            Enter your new password
          </p>
        </div>
        {!ready ? (
          <p className="font-body text-sm text-brand-taupe text-center">Verifying reset link...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                required
                minLength={6}
                className={inputClass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-taupe/60 hover:text-brand-onyx transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminResetPassword;

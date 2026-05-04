import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/signup")({ component: SignupPage });

function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/" });
    }, 800);
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="It takes 30 seconds. No credit card required."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name" id="firstName" placeholder="Alex" autoComplete="given-name" required />
          <Field label="Last name" id="lastName" placeholder="Morgan" autoComplete="family-name" required />
        </div>
        <Field label="Email" id="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <Field label="Password" id="password" type="password" placeholder="At least 8 characters" autoComplete="new-password" required />
        <Field label="Confirm password" id="confirmPassword" type="password" placeholder="Repeat your password" autoComplete="new-password" required />

        <label className="flex items-start gap-3 text-sm text-foreground/80 cursor-pointer pt-2">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-primary" />
          <span>
            I agree to the{" "}
            <a href="#" className="text-primary font-semibold hover:underline">Terms & Conditions</a> and{" "}
            <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-smooth disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Creating account…" : "Create my account →"}
        </button>

        <p className="text-xs text-center text-muted-foreground pt-2">
          🔒 Secured with 256-bit encryption. We never sell your data.
        </p>
      </form>
    </AuthShell>
  );
}

function Field({ label, id, ...props }: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-1.5">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
      />
    </div>
  );
}

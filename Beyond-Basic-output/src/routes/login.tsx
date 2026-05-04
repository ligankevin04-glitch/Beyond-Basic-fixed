import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/" });
    }, 700);
  }

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to pick up where you left off."
      footer={
        <>
          New here?{" "}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Email" id="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <Field label="Password" id="password" type="password" placeholder="••••••••" autoComplete="current-password" required />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-foreground/80">
            <input type="checkbox" className="h-4 w-4 rounded border-input text-primary focus:ring-primary" />
            Remember me
          </label>
          <Link to="/forgot" className="text-primary font-semibold hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-smooth disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
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

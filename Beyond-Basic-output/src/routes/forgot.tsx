import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/forgot")({ component: ForgotPage });

function ForgotPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your email and we'll send you a secure reset link."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Back to login
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="text-center bg-success/10 border border-success/20 rounded-2xl p-8">
          <div className="mx-auto h-14 w-14 rounded-full bg-success text-success-foreground flex items-center justify-center text-2xl">
            ✓
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-foreground">Check your inbox</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            If an account exists, you'll get a reset link within a minute. Don't see it? Check spam.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-cta text-primary-foreground font-semibold shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
          >
            Send reset link →
          </button>
        </form>
      )}
    </AuthShell>
  );
}

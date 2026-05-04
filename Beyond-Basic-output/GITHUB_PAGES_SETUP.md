# GitHub Pages Deployment Guide

## Quick Setup

### Step 1 — Set your base path in the deploy workflow

Open `.github/workflows/deploy.yml` and find this line:

```yaml
VITE_BASE_PATH: /
```

**Choose based on your deployment type:**

| Deployment type | Value |
|---|---|
| Custom domain (e.g. `mybrand.com`) | `/` |
| `username.github.io` (root) | `/` |
| `username.github.io/repo-name/` | `/repo-name/` |

For example, if your repo is `github.com/john/Beyond-Basic-fixed`, change it to:
```yaml
VITE_BASE_PATH: /Beyond-Basic-fixed/
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: **`gh-pages`**, folder: **`/ (root)`**
4. Click **Save**

### Step 3 — Push and wait

Push to `main`. The GitHub Actions workflow will build and deploy automatically.
Your site will be live at the URL shown in the Pages settings.

---

## What was fixed

- `vite.config.ts` — Changed from hardcoded `base: "./"` to `base: process.env.VITE_BASE_PATH` so the build correctly prefixes all asset URLs for your specific repo path.
- `public/404.html` — Fixed the SPA redirect script to correctly detect GitHub Pages subpath (`*.github.io/repo-name/`) vs. custom domain, and redirect to the right `index.html`.
- `index.html` — Changed `src="/src/main.tsx"` to `src="./src/main.tsx"` so the script reference is always relative (works in both dev and production).
- `deploy.yml` — Added `VITE_BASE_PATH` environment variable so the build knows the base path at compile time.

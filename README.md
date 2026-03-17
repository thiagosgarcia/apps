# Tiny Apps Showcase

This repository is a static GitHub Pages-ready website that showcases three Android apps:

- Mechanical Calculator
- Columns Classic
- Chess Timer

It also hosts public legal pages and publisher root files that can be reused in app store
listings and related support materials.

## What is included

- A polished landing page at `index.html`
- Dedicated app profile pages under `apps/`
- Hosted privacy policies and terms for each app
- Root `app-ads.txt`
- Root `robots.txt`
- Reused artwork copied from the original app projects
- Repository documentation for site features and deployment

## Project structure

```text
.
|-- app-ads.txt
|-- robots.txt
|-- index.html
|-- styles.css
|-- assets/
|   `-- icons/
|-- apps/
|   |-- mechanical-calculator/
|   |-- columns-classic/
|   `-- chess-timer/
`-- docs/
    |-- FEATURES.md
    `-- DEPLOYMENT.md
```

## Hosted legal page paths

- `apps/mechanical-calculator/privacy.html`
- `apps/mechanical-calculator/terms.html`
- `apps/columns-classic/privacy.html`
- `apps/columns-classic/terms.html`
- `apps/chess-timer/privacy.html`
- `apps/chess-timer/terms.html`

## Local preview

Because the site is completely static, you can preview it with any simple local server.
For example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Content sources

The app descriptions, privacy details, and icons were adapted from the following local
projects:

- `A:\dev\MechanicalCalculator`
- `A:\dev\Columns-Classic-Mobile`
- `A:\dev\TinyApps`

## Updating the site

1. Edit `index.html` for homepage content.
2. Edit the relevant files under `apps/` for app-specific content or legal text.
3. Replace or add assets under `assets/icons/` as needed.
4. Keep `app-ads.txt` at the repository root so it publishes at the website root.

## Deployment

If this repository is published with GitHub Pages, the site works without a build step.
See `docs/DEPLOYMENT.md` for a practical deployment checklist.

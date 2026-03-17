# Site Features

## Homepage

The landing page is designed to feel like a compact product portfolio instead of a plain
document index.

Key elements:

- Hero section that explains the purpose of the site
- Responsive app cards with artwork, summaries, feature lists, and direct legal links
- Shared section that communicates the common values across the apps
- Publishing section for root files such as `app-ads.txt` and `robots.txt`

## App profile pages

Each app has its own profile page under `apps/<app-slug>/index.html`.

These pages provide:

- A stronger product description than the homepage card
- A quick feature and privacy snapshot
- Direct links to the app's legal pages
- Stable, public URLs that can be reused elsewhere

## Legal hosting

Every app has two hosted legal pages:

- `privacy.html`
- `terms.html`

This makes it easy to point Play Store listings, support pages, or other public references
to URLs that live in the same GitHub Pages deployment as the showcase itself.

## Static-first implementation

The site intentionally uses:

- Plain HTML
- One shared CSS file
- No client-side build pipeline
- No runtime dependencies

That keeps hosting simple and makes the repository easy to maintain.

## Reused assets

The site reuses artwork taken from the local Android app projects so the portfolio visually
matches the actual apps:

- Mechanical Calculator icon PNG
- Columns Classic SVG artwork
- Chess Timer SVG artwork

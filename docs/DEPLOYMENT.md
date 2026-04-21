# Deployment Notes

## Publishing with GitHub Pages

This site is intentionally framework-free, so deployment is straightforward:

1. Push the repository to GitHub.
2. Open the repository settings.
3. Enable GitHub Pages.
4. Choose the branch and folder that contain the root files in this repository.
5. Confirm that the published site exposes:
   - `/index.html`
   - `/app-ads.txt`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/apps/...` legal pages

## User site vs project site

The site uses relative links, so it works both as:

- a user or organization site such as `username.github.io`
- a project site such as `username.github.io/repository-name`

No path rewriting is required for the current structure.

## Pre-publish checklist

- Verify the app card copy is still accurate.
- Confirm legal text matches the live app behavior.
- Confirm `app-ads.txt` contains the desired AdMob publisher declaration.
- Confirm `robots.txt` is present at the root.
- Confirm `sitemap.xml` is present at the root and matches the published URLs.
- Add store or repository links later if you want external call-to-action buttons.

## Optional future improvements

- Add screenshots or animated previews under `assets/`.
- Submit the sitemap in Google Search Console after launch.

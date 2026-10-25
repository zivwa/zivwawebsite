# ZIVWA Global Solutions website

Six responsive corporate pages built from scratch using HTML, CSS and JavaScript. No npm packages or framework installation needed.

## Open immediately

Double-click OPEN-WEBSITE.cmd, or open dist/index.html in a browser. The six pages and interactive features work directly from the folder. Internet is needed for photos, fonts and external contact actions.

## Run on Windows

Open this folder in a terminal. Run `npm run build`, then `npm start`, then open http://127.0.0.1:4173. Or double-click START-WEBSITE.cmd. Keep the terminal open while viewing.

## Edit content

- src/data/company.json: company details and original logo path.
- src/data/courses.json: course names, categories, descriptions and modules.
- src/data/jobs.json: verified active vacancies; default is an honest empty state.
- scripts/build.mjs: shared templates, navigation, footer and page copy.
- src/styles/main.css: brand tokens and responsive layouts.
- src/scripts/main.js: menu, FAQ assistant, search, filters and email drafts.
- src/assets/: original logo and local imagery.

Run `npm run build` after source edits. Upload only dist/ contents to a static web host.

## Original logo

The original attachment could not be downloaded. A temporary text wordmark is used. Add the original logo as src/assets/official-logo.jpg, set "logo": "assets/official-logo.jpg" in company.json, then rebuild. Use .png if the source is PNG.

## Vacancies

jobs.json accepts an array of objects with title, location, type ("IT" or "Non-IT"), experience and description. Publish only verified jobs. Remove expired vacancies and rebuild.

## Forms and chatbot

Forms validate inputs and consent, then prepare a user-reviewed WhatsApp or email draft. Nothing is submitted to a server; no delivery success is claimed. Visitors choose WhatsApp or their email app and send the reviewed message there. Candidates attach their resume in that email. Copy fallback is provided.

The assistant uses predefined FAQ answers, not an external AI API. Unknown questions refer visitors to the team.

Automatic form delivery or resume uploads require a backend or form provider, spam protection and a privacy/retention policy.

## Images and fonts

Workplace photography loads from Unsplash; Manrope and Inter load from Google Fonts. These require internet access and fall back to colored surfaces and system sans-serif if unavailable. Replace with licensed local assets for full self-hosting. Photo URLs are in scripts/build.mjs.

## Deploy to Hostinger

1. Run `npm run build` and `npm run check`.
2. Back up the existing public_html contents.
3. Upload the contents of dist directly into public_html.
4. index.html and assets/ must be beside the other five HTML files.
5. Verify pages, photos, fonts and contact actions on the domain.

Hosting alone does not turn the forms into a server backend.

## Verification and remaining items

Original source was unavailable. The full text attachment and official logo transfer failed, so attachment-specific instructions remain unverified. Implemented from the visible company brief.
No invented testimonials, partner logos, success numbers, fees, guarantees or active jobs.
Confirm email addresses, course offerings and schedules before public launch.
GSTIN was not supplied and is not fabricated.
Course slider pauses on hover, focus and a pause button. Reduced-motion users get manual scrolling.


## Checks completed on 25 October 2026

Build and JavaScript syntax checks pass. The generated seven HTML files (six pages and a 404 page) pass 189 checks for local links, assets and anchors, plus unique IDs and navigation landmarks. Browser visual and interaction verification could not run because preview connections are blocked in this environment. Remote image and font availability remain unverified.

The latest Pasted text(3).txt attachment could not be downloaded or extracted. Its contents are unverified; implementation follows the visible six-page brief. The original logo also could not be downloaded and remains the temporary text wordmark. No active vacancies or GSTIN have been invented.

Private publishing was attempted but source synchronization was blocked by network access. No live deployment is claimed.

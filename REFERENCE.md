# Direct inspection log — 8 November 2026

Reference: https://www.zara.com/us/en/velvet-ruched-mini-dress-p07888248.html?v1=595356843
Homepage: https://www.zara.com/us/

Used the connected browser and its Playwright DOM/locator surface. Dismissed the cookie notice and selected the US store. Inspected desktop at 1440 × 1000 and mobile at 390 × 844; the local preview first opened at 1280 × 720, then was resized for mobile checks.

## Desktop observations

- White canvas, black/gray interface, thin borders, light-weight small text.
- Fixed two-line menu control at x32/y32, roughly 64px wide. Search x1272/y32; utilities on the far right at y170. Large Zara logo is visible in the open category menu, not the main product screenshot.
- First image starts x186/y32, approximately 620 × 930 (2:3). Right information column starts x896/y166, approximately 342px wide. Gallery continues below; large empty areas can occur during lazy loading/scrolling.
- Title VELVET RUCHED MINI DRESS, NEW label, price $59.90, BLACK | 7888/248/800. Round neckline, sleeveless with shoulder pads, side ruching, lining, back button opening.
- Actual font exposed by the rendered heading: Helvetica Now Text, Helvetica, Arial, sans-serif; COMPLETE YOUR LOOK is weight 300, 11px, 16px line-height.
- Main add control opens an in-column bordered size list XS/S/M/L/XL/XXL, replacing the purchase row. Selecting S immediately added to the live bag, revealing a right overlay titled ADDED TO YOUR CART and a YOU MIGHT LIKE grid, with four small packshots across. The test item was removed afterward; live cart returned to zero.
- Apple Pay appears alongside ADD. It was not used.
- COMPLETE YOUR LOOK appears below the description, before measurements/care/store/shipping links. Heading around x896/y540 in the inspected state. A single small black sandal packshot (roughly 66px image request) links to SATIN HEEL SANDALS. No visible title or price under that thumbnail, no arrows needed with one item. No observable special hover treatment was identified.
- A separate YOU MIGHT LIKE module appears later in the page after lazy loading. It is not the intervention location.
- Footer has help/follow/company/policy columns, locale and language. Main navigation overlays the image with categories and a large logo. Main product remains behind it.

## Mobile observations and limits

390 × 844: mobile header menu/search/bag, optional app-install banner, portrait images in a vertical gallery, fixed bottom ADD and price bar. The source did not consistently return to the first gallery image after scrolling; `reference/mobile.jpg` was recaptured in a verified 390 × 844 viewport after dismissing the locale prompt: it shows the first image, details tabs, title/price and outlined purchase controls. Earlier scroll states exposed the fixed bottom purchase bar. COMPLETE YOUR LOOK was absent from rendered heading queries in that mobile session. Consequently no source mobile recommendation layout or exact mobile breakpoint is claimed. The prototype uses an independently tested swipe gallery and recommendation track.

## Captures

- `reference/desktop.jpg`: source desktop product view with recommendation.
- `reference/complete-your-look.jpg`: source product/recommendation context.
- `reference/sizes.jpg`: source size list.
- `reference/add-to-bag.jpg`: source added-to-cart overlay.
- `reference/mobile.jpg`: source initial mobile product viewport.

These are source screenshots for academic comparison, not application assets. There is no screenshot asserting an unavailable mobile source recommendation.

## Visual comparison

Compared source and baseline implementation screenshots directly: the portrait-first grid, narrow information column, header locations, title hierarchy, outlined add, black/white palette and compact source sandal module are reproduced structurally. The original images/fonts, eight-image gallery, original cart recommendations, Apple Pay, mobile gallery structure and some spacing differ, as detailed in README. The modified recommendation area is intentionally taller to carry the requested listing details and rewards cue.

## Real Pre-Owned source

https://www.zara.com/us/en/preowned-resell/product-detail/2427385 was inspected directly on 8 November 2026. ZARA BLACK TEXTURED MINI DRESS WITH RHINESTONE BUTTONS; $30 excluding fees; S; Black; Like new (seller-listed). The source exposed ADD, but this is a point-in-time reference, not guaranteed continuing availability. Photograph and exact source URL are used for the featured `pre-0` item. `reference/real-preowned-source.jpg` records the source; `screenshots/desktop-real-preowned.jpg` and `mobile-real-preowned.jpg` record the implementation.

# Verification — 8 November 2026

## Passed

- Production `npm run build`: Next.js 15.5.29 compilation, TypeScript validation and static export succeeded.
- `npm test`: all 5 meaningful domain-rule tests passed.
- `npx playwright test tests/journey.spec.ts --reporter=line`: 4/4 passed (two journeys each at desktop 1440 × 1000 and mobile iPhone 13 emulation in Chromium).
- `npx playwright test tests/visual.spec.ts --reporter=line`: 2/2 passed, capturing baseline, product, discovery and Gold dashboard for each viewport.
- Connected-browser Playwright/manual visual inspection: source desktop and mobile, baseline comparison, purchase bag, new-item quantity changes, new checkout with 0 points, Pre-Owned checkout with 100 points, Gold preview, 100-point redemption preserving 700 qualifying points, friend bonus and disabled repeat qualification, mobile discovery/rewards and no horizontal page overflow.
- Browser storage reload preserved 750 qualifying / 650 spendable points after Gold preview, redemption and referral in the automated journey. Reset cleared the bag and returned to the main dress.

## Coverage

Invalid sizes, duplicate order IDs, one-of-a-kind stock, sold-item exclusion, recommendation ranking, insufficient redemption balance, locked rewards, membership retention, one-time friend bonus, ordinary new-product access, recommendation tabs, menu categories, search and mobile layout.

Copy-to-clipboard was exercised through the connected browser and displayed its success state. The separate browser clipboard-reader surface did not return the copied value, so cross-application clipboard delivery is not independently confirmed. The UI provides the visible link and a fallback message if the browser API fails.

## Visual evidence

`reference/` holds live source captures. `screenshots/desktop-baseline.jpg`, `desktop-product.jpg`, `desktop-discovery.jpg`, `desktop-rewards.jpg`, and corresponding `mobile-*` files show the built prototype. Additional connected-browser captures show checkout, bag, referral and redemption.

This is not a pixel-diff certification. Original assets/fonts were deliberately replaced, and mobile source recommendations could not be observed. See REFERENCE.md and README.md for exact differences and limits. Performance, accessibility and cross-browser compatibility were not comprehensively audited.

## Pre-Owned highlight update

Production build passed. All 8 desktop/mobile Playwright checks passed, including the added direct rewards entry test: highlighted panel → dashboard; Gold balance visible back on the product page; Pre-Owned product badge → dashboard with the same persisted 700 points. Final responsive screenshots were regenerated.

## Actual Pre-Owned listing update

Directly opened official listing 2427385 in the connected browser: title, $30 price (fees excluded), S, Black, Like new, and an ADD control were visible on 8 November 2026. Saved `reference/real-preowned-source.jpg`. Both source photographs are externally referenced. Desktop/mobile visual tests confirmed the primary photograph loaded (nonzero natural width), correct price and condition, and the original listing link. Build and 5 domain tests passed. Of 10 browser checks, 8 passed initially; 2 checkout selectors still expected the fictional title. Updated those selectors for the real title/photo alt, reran both checkout journeys, and both passed. No purchase, offer, or seller contact was made on Zara.

## Membership design and brand briefs update

Production build passed. Existing 10 desktop/mobile checks passed. Two additional Membership checks cover the progressbar, three tiers, points-needed reward states, in-page tier navigation, expandable brand information, desktop hover reveal, brand information in redemption details and horizontal overflow. Their first assertions used a changing '+' label and selected the next closed button after opening; the selector was corrected to the same card's stable button and the affected checks rerun. Updated Membership and brand-detail screenshots are in `screenshots/`.

## Compact, product-first discovery update

Production build and all 14 desktop/mobile Playwright checks passed. New assertions verify garment track appears before the rewards strip, strip height is under 85px, oversized slogan is gone, the matched catalog-style image loads, and the compact strip opens Membership. Catalog-style photographs were visually compared against the seller listing for design details; original official catalog provenance is not certified. Final captures: desktop-compact-discovery.jpg and mobile-compact-discovery.jpg.

## Screenshot formatting fix

Production build and all 16 Playwright checks passed. New responsive checks at 760, 1024, 1280 and 1440 CSS pixels verify equal y-coordinates for both visible cards' labels, titles, prices and conditions; no overflowing tabs or page; header utilities stay in the top 70px; and the rewards strip remains under 65px tall. These viewport widths exercise narrow layouts and zoom-equivalent constraints; arbitrary browser zoom levels were not separately certified. Captures: desktop-formatting-1024.jpg and regenerated discovery views.

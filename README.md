# ZARA Pre-Owned — unofficial academic concept

A runnable Next.js App Router + TypeScript + Tailwind + Motion prototype for the BIC × ZARA case competition. An original frontend, with local fictional inventory and generated imagery. No private Zara APIs, payments, credentials, or customer data.

## Run

Requires Node 20.9+ (validated with Node 22).

```sh
npm ci
npm run dev
```

Open http://localhost:3000/?demo=1 for presenter controls, or http://localhost:3000 for the customer interface. The footer can reveal presenter controls at any time. `npm run build` exports the site into `out/`. Serve that folder with any static HTTP server. Hash navigation supports browser Back/Forward and directly opening a product or rewards; for example `/#view=product&product=pre-0` and `/#view=rewards&product=dress`.

```sh
npm test
npm run build
npx playwright test
```

The Playwright suite requires its Chromium browser (`npx playwright install chromium`). See `VERIFICATION.md` for checks actually run in this environment.

## Presentation journey

1. RESET ALL starts on the new $59.90 reference dress.
2. Browse images, open the size list, select a size, add it to the bag. Quantities, removal and simulated checkout work for new products. They earn zero points.
3. DISCOVERY jumps to COMPLETE YOUR LOOK in the product-information column. Four available Pre-Owned garments appear first in a horizontal track. Two are visible at a time. Arrow controls, native horizontal scroll and the new-collection tab work.
4. Open a Pre-Owned card, inspect condition and available size, select the size and add it. Confirm the simulated purchase to earn 100 points and mark that one-of-a-kind listing sold.
5. VIEW MEMBERSHIP PROGRESS opens the dashboard. Buy more Pre-Owned pieces to progress, or use the separate presenter controls.
6. MEMBER / SILVER / GOLD sets qualifying and spendable points to 0 / 300 / 700 for a quick tier preview. It does not fabricate purchase history. BUY PRE-OWNED +100 makes a real demo-state purchase using available inventory and any current bag contents. To demonstrate only one garment, start with an empty bag.
7. Gold has 10 brands, Silver 6, Member 3. Each brand offers 1 / 2 / 3 reward options at those tiers. Previous access is retained. “Selections” means options per brand, not a redemption quota. Repeat rewards are allowed while points remain.
8. Choose an unlocked reward, review it, then confirm redemption. Spendable points decrease; qualifying points and status do not.
9. Invite a Friend is secondary, below the marketplace. Generate and copy a nonfunctional demo link, simulate the invitation, then the friend's qualifying purchase. Inviter gets 50 bonus points, friend gets 100 purchase + 50 bonus. The same mock friend cannot qualify twice. This is an in-browser demonstration, not a referral service.
10. RESET REWARDS clears balances, redemptions and referral state, retaining orders and sold inventory. RESET ALL clears everything and restocks inventory.

Browser storage key: `zara-concept-v1`. Reset is immediate and affects this browser only. Clearing browser storage also resets the demo. The header’s membership link, search, menu, product image zoom, details accordions and footer links are functional.

## Rules and inventory

`lib/model.ts` contains configurable points/tier thresholds, 1 main + 8 additional new products, 12 available fictional Pre-Owned listings, 10 fictional partner brands, 30 reward options, demo customer state and a mock friend state.

Recommendation score: same category +50, same material/style +25, same color +15, requested size available +10. Only available, unsold listings are returned; the currently viewed listing is excluded. Stable ID order breaks ties. The top four appear first. Sizes affect ranking, not the customer's freedom to browse other sizes. No live inventory or internal Zara recommendation access is claimed.

Checkout validates size, quantities and stock. Each order ID is idempotent; the UI prevents rapid duplicate confirmation. Redeeming validates balance and tier. Qualifying and spendable balances remain distinct. Friend qualification is guarded by generated-link, invitation and one-time flags.

## Live-reference inspection and differences

Read `REFERENCE.md`. The live US product page and homepage were directly inspected before frontend implementation on 8 November 2026. Saved source screenshots are in `reference/`; implementation captures are in `screenshots/`.

This is an inspection-informed reproduction, **not an exact visual copy**. Important differences:

- Original generated fashion images replace Zara photography. Two views replace the live eight-image gallery; some fictional listings share packshot images. Generated assets are not proof of real garments, wear or availability.
- Helvetica Neue/Arial system fallbacks replace the observed proprietary Helvetica Now Text font. Zara's font/source code was not copied.
- The live desktop COMPLETE YOUR LOOK is a small one-sandal thumbnail in the right product-information column. There is no visible card title or price in that original state. The prototype preserves the heading and placement, then expands it to a horizontal two-card Pre-Owned track to show the required name, price, condition and size. This is a deliberate concept modification, not an observed carousel width.
- REFERENCE LAYOUT hides the intervention and restores the small sandal recommendation for comparison. Its baseline was visually inspected before subsequent integration fixes. It uses generated images and omits the Apple Pay control; the single outlined ADD remains functional.
- The observed desktop main product view does not show the large Zara logo; the menu does. The prototype follows that desktop arrangement, with a simple text wordmark in its menu. Mobile adds a small text wordmark and omits the live app-install banner. It uses a swipe gallery rather than reproducing the live mobile vertical gallery and fixed purchase bar.
- On mobile the live source exposed its gallery and bottom purchase bar, but COMPLETE YOUR LOOK was not present in the inspected rendered headings. No source mobile recommendation screenshot is claimed. The prototype's mobile discovery is independently verified.
- Checkout, help, menu, search and bag are simplified academic flows. No real Apple Pay, accounts, delivery, store lookup, or social links. Product pages use hash routes within the Next.js App Router root for a portable static export.
- Partners, quantities, prices, thresholds and rewards are fictional demo assumptions. Nothing implies Zara endorsement or approved partnerships.

## Design and structure

Reusable components in `app/page.tsx`: SiteHeader (inline header), NavigationMenu (menu dialog), ProductGallery, ProductInformation, SizeSelector, ShoppingBag (bag dialog), CompleteYourLook, PreOwnedRecommendationCard, PreOwnedProductDetail (shared product view), RewardsDashboard, MembershipProgress, PartnerMarketplace, RewardRedemption (dialog), ReferralProgram and DemoControls (presenter aside). Shared modal implements escape dismissal, keyboard focus containment and focus restoration. Motion is restrained; reduced motion is supported in CSS.

## Asset provenance

`public/images/editorial.png`, `catalog.png`, and `rewards.png` were generated with the built-in imagegen tool for this prototype. Prompt descriptions are recorded in `ASSETS.md`. No Zara photography, fonts, CSS, JavaScript or source code is bundled into the application. Source screenshots are solely documentation of the requested comparison.

## Behavioral rationale

Wood & Neal (2007), “A New Look at Habits and the Habit–Goal Interface,” motivates discovery in a familiar shopping context. Thaler, Sunstein & Balz (2013), “Choice Architecture,” motivates making Pre-Owned noticeable first while retaining the new-item option. These are supplied conceptual references, not an independently replicated study. The intervention's effectiveness has not been measured here.

## Highlighted Pre-Owned entry (update)

The sage Pre-Owned panel inside COMPLETE YOUR LOOK is a direct link to the rewards dashboard. It shows the current spendable balance, membership tier and qualifying points before clicking. On a Pre-Owned product, the highlighted title badge and points-earning box also open rewards directly. Garment cards retain their product-detail journey. All balances read the same persistent demo account.

## Real featured listing (latest update)

The featured `pre-0` item now represents an actual public US ZARA Pre-Owned listing, verified directly in the browser on 8 November 2026: **ZARA BLACK TEXTURED MINI DRESS WITH RHINESTONE BUTTONS**, listing 2427385, $30 before fees, S, Black, seller-listed Like new. It links to https://www.zara.com/us/en/preowned-resell/product-detail/2427385 and displays photographs directly from that original listing rather than generated lookalikes. Image rights remain with their source; no seller identity is required for the demo.

This latest update supersedes earlier statements that all listings and imagery are fictional/generated. The other 11 Pre-Owned examples remain fictional and are labeled as such on their product pages. The sourced dress has a 40-point verified-feature bonus when category matches, keeping it first in dress recommendations. This is a curated demonstration rule, not a Zara algorithm. The source can change or become unavailable; there is no live inventory synchronization. One-unit stock, checkout, rewards and fees-free demo total remain simulated, and the original listing link is the authority for any actual purchase.

## Membership design and brand briefs (latest update)

Membership now follows the product pages' system typography, compact uppercase headings, thin rules and restrained image grid. Your qualifying points, spendable balance, progress and all three tiers appear near the top, with links that scroll to progress, tiers or rewards without leaving Membership. Reward rows distinguish tier locks, points still needed and rewards ready to redeem.

Hover over a reward card or focus its controls on desktop to read a short brand brief. ABOUT THE BRAND expands the same information on click or mobile tap. Clicking a reward opens its redemption details, which also include the brief. All ten brands remain fictional proposed sustainable-lifestyle concepts; no sustainability performance or approved partnership is claimed.

## Product-first recommendations (latest update)

COMPLETE YOUR LOOK now presents its Pre-Owned garments immediately after the heading and tabs. The oversized rewards panel and duplicate incentive block have been replaced by one compact strip **below** the garments, showing the earn rate, current spendable points, tier and a direct rewards link. Full progress and tier information remain in Membership.

The featured real dress now uses catalog-style model photographs of the matching design from a public reference listing, replacing the seller's hanger images in cards and the product gallery. The square neckline, textured eyelash fabric, wide straps and flower-shaped rhinestone buttons were visually compared. These are design/reference photos, not photographs of the actual secondhand unit or proof of its condition. The original ZARA Pre-Owned listing remains the authority for resale details and condition photos. A separate catalog-image reference credit appears on the product page. Source URLs are in `lib/model.ts`; the reference is https://poshmark.com/listing/Zara-Eyelash-Metallic-Tweed-Knit-Jewel-Button-Classic-Blogger-Mini-Dress-S-63f2a207fed51f6a2cd2ccae . An original official Zara catalog URL could not be independently established, so the interface describes them as catalog imagery of the design.

## Responsive formatting fix (latest update)

Recommendation cards now share grid rows for badges, two-line titles, prices and condition text. Badges use the same short PRE-OWNED label; the real-source attribution remains on the product page. Full titles are available on hover and in product details. Tabs wrap inside the column rather than overflowing. Desktop header utilities now sit together in the top row, away from the product-information column. The rewards entry is a 46px-minimum text strip between thin rules, beneath the garments.

# Forged Sportswear

Custom sublimated teamwear & sportswear website — Next.js (App Router) + TypeScript + Tailwind CSS.

Every product category (jerseys, tees, hoodies, shorts, compression gear) requires a
**6-piece minimum per design**, enforced on the shop quantity selector and the quote form.

## What's included

- **Home, Shop, Shop detail, Gallery, About, Contact** pages themed around the Forged
  Sportswear brand (logo, ad photos/videos, raw b-roll clips from `../raw video`).
- **Request a Quote** (`/quote`) — collects contact info, product, quantity (6+ enforced),
  size breakdown, design notes and an optional logo/artwork upload, then emails the request
  via Gmail SMTP (Nodemailer).
- **Pay Your Invoice** (`/pay`) — lets you generate a Stripe Checkout link for a quoted
  amount once you've approved a customer's order (no cart/inventory system — invoices are
  created manually per quote).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Required environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | Gmail address quote request emails are sent **from**. |
| `GMAIL_APP_PASSWORD` | A Gmail [App Password](https://myaccount.google.com/apppasswords) (requires 2-Step Verification). Do **not** use your normal Gmail password. |
| `QUOTE_TO_EMAIL` | (Optional) Where quote request emails are sent **to**. Defaults to `GMAIL_USER`. |
| `STRIPE_SECRET_KEY` | Your Stripe secret key (`sk_test_...` for testing, `sk_live_...` for real payments), used to create Checkout Sessions on `/pay`. |

Until these are set, the `/quote` and `/pay` forms will show a friendly
"not yet configured" error instead of crashing — the rest of the site works immediately.

## Deploying

This is a standard Next.js app and deploys cleanly to **Vercel** (recommended, free tier is
plenty for this site):

1. Push this `code/` folder to a GitHub repository.
2. Import the repo at https://vercel.com/new.
3. Add the environment variables above in the Vercel project settings.
4. Deploy — Vercel will give you a `*.vercel.app` URL; attach your purchased domain under
   Project Settings → Domains when you're ready.

## Content you'll likely want to update later

- `src/lib/site.ts` — business contact info, Instagram link, shipping copy.
- `src/lib/products.ts` — product categories, starting prices, sizes, features.
- `public/media/` — logo, ad photos/videos and behind-the-scenes clips (already
  compressed/optimized from the original `ad1/`, `ad2/` and `raw video/` assets).

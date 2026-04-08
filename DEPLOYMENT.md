# PT Network Data Sistem Deployment Guide

## 1) Environment variables

Set these in Vercel project settings:

- `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
- `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
- `NEXT_PUBLIC_MAPS_EMBED_URL=<google-embed-iframe-src>`
- `CRM_WEBHOOK_URL=<crm-endpoint>`
- `NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity-project-id>`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `SANITY_API_TOKEN=<optional-for-preview>`

## 2) Google Maps embed

1. Open Google Maps location.
2. Click Share -> Embed a map.
3. Copy iframe `src`.
4. Put value into `NEXT_PUBLIC_MAPS_EMBED_URL`.

## 3) Vercel deployment (standard GitHub import)

The Next.js app is at the **repository root** (`package.json`, `src/`, etc.), so Vercel can use the default settings.

1. In [Vercel](https://vercel.com), **Add New Project** → **Import** this GitHub repository.
2. Leave **Root Directory** as **`.`** (default). Framework Preset should show **Next.js**.
3. Set all environment variables for Production and Preview (see section 1).
4. Deploy.
5. Attach custom domain and configure apex + `www`.

If you previously set Root Directory to `website`, change it back to **`.`** (or remove the override) and redeploy.

## 4) Sanity setup

1. Create Sanity project and dataset.
2. Register schemas under `sanity/schemas`.
3. Publish initial data for posts, case studies, jobs, and site settings.

## 5) SEO launch checklist

1. Verify site in Google Search Console.
2. Submit sitemap at `/sitemap.xml`.
3. Check rich results for Organization and LocalBusiness schema.
4. Validate canonical + hreflang for `/id/*` and `/en/*`.

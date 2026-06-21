# Horic Autos — Website

A futuristic, premium car-sales website for **Horic Autos** (car import & sales,
showroom opening soon). Built with **Next.js 16 + TypeScript + Tailwind CSS v4 +
Framer Motion**. Design language blends Tesla (minimal/cinematic), Mercedes-Benz
(luxury polish) and Jetour (bold model showcases), in the brand's red/black/white.

## Pages
- `/` — cinematic home (hero, featured cars, why-Horic, brands, showroom-soon)
- `/inventory` — browsable inventory with live search + filters (make, type, sort)
- `/inventory/[slug]` — car detail (gallery, specs, WhatsApp inquire, book test drive)
- `/about` — story + how-we-work
- `/contact` — booking form (sends lead via WhatsApp), contacts, map

## Run it locally
```bash
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## ✏️ Things you’ll want to edit

### 1. Business details — `src/lib/site.ts`
Set the real **WhatsApp number** (international format, digits only, e.g.
`233241234567`), phone, email, and showroom address. These flow through the whole
site (WhatsApp buttons, footer, contact page).

### 2. Cars — `src/lib/cars.ts`
Each car is one entry in the `cars` array. Copy an entry, change the values, and
point `images` at real photos. To use **real Horic Autos photos**:
- Drop image files into the `public/` folder (e.g. `public/cars/m5-1.jpg`) and set
  `images: ["/cars/m5-1.jpg", "/cars/m5-2.jpg"]`, **or**
- Use a hosted image URL. If it's a new domain (not `images.unsplash.com`), add the
  hostname to `next.config.ts` under `images.remotePatterns`.

> The current photos are high-quality stand-ins from Unsplash so the site looks
> finished today — swap them for the actual stock when ready.

### 3. Logo
`public/logo.jpg` is the Horic Autos logo. Replace the file (keep the name) to update.

## Deploy
Easiest is **Vercel** (made by the Next.js team, free tier):
1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new → it auto-detects Next.js → Deploy.
Any Node host works too (`npm run build` then `npm run start`).

## Run with Docker
A production `Dockerfile` (multi-stage, non-root, slim runtime) and
`docker-compose.yml` are included.

**With Docker Compose (recommended):**
```bash
docker compose up -d --build      # build the image and start it
# → app is live at http://localhost:3000
docker compose logs -f            # view logs
docker compose down               # stop & remove
```

**With plain Docker:**
```bash
docker build -t horic-autos-web .
docker run -d -p 3000:3000 --name horic-autos-web horic-autos-web
```

Notes:
- The app listens on port **3000** inside the container; change the host port by
  editing the `ports` mapping in `docker-compose.yml` (e.g. `"8080:3000"`).
- The image runs `next start` in production mode as a non-root user, with a
  built-in healthcheck.
- Rebuild after code or inventory changes: `docker compose up -d --build`.

## Notes
- The booking form has **no backend** — on submit it opens WhatsApp with the
  customer's details pre-filled, so leads come straight to your phone. (A
  database/email backend can be added later if you want stored bookings.)

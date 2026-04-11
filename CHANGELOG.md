# Changelog

All notable changes to this project are documented here. The main app lives in **`dashboard/index.html`** (URL **`/dashboard/`**); **`index.html`** is the public landing page for **gamesuniverse.org**.

## Unreleased

- **Site structure:** `index.html` is the marketing landing page; the full single-page app lives under **`dashboard/`** (clean URL **`/dashboard/`**, no `.html`). Landing Login/Sign Up open modals via **`?auth=login`** / **`?auth=signup`**; after login the app opens on **Profile (stats)**; after signup it opens on **Main Page (games)**.
- **Landing:** hero image served from **`assets/landing-hero.jpg`** (same-origin, preloaded) for faster load; larger edge-to-edge art; **Discord** button to `https://discord.gg/buf8sesyrB`.
- **Auth:** standalone **`login.html`** / **`signup.html`** with animated background + bottom card; Firebase email auth matches dashboard config; successful auth redirects to **`/dashboard/`**. Landing **Login** / **Sign Up** link to these pages (no `?auth=` on dashboard).
- **Theme:** reverted mint/Blooket-blue experiments; restored the original dark neon site palette.
- **Golden Ticket:** staff-configurable blook (extra pack drop + ticket tier roll for entry value), hidden inventory section, **three** giveaways each with a **single** prize and live top-10 entry boards (`giveawayLeaderboards/{A|B|C}`). No auto winner draw.
- Pack unbox: smaller on-screen pack scale during open animation.
- Discord special pulls: embed uses blook art as **thumbnail only**; message body lists pull line, stars, rarity (title case), and chance.

## Earlier

- Staff Panel: **Discord — special pull alerts** (webhook URL, enable, optional invite, auto rules by rarity rank / max chance).
- Profile: unique blook count vs catalog total; top blooks by rarity; inventory UI tweaks.
- Lazy-load main games section until scroll; various performance and UI adjustments.

See [commit history](https://github.com/brendan00948/games-universe/commits/main/) on `main` for full detail.

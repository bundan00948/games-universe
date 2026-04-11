# games-universe

- **Landing page:** **`index.html`** — marketing home for **https://gamesuniverse.org**
- **Full app (dashboard):** **`dashboard/index.html`** — games, shop, inventory, missions, chat, staff, etc.  
  **Public URL (no `.html`):** **`/dashboard/`** (GitHub Pages serves the folder index).

## Published site (source)

- **Branch:** `main` on GitHub  
- **Landing:** https://github.com/brendan00948/games-universe/blob/main/index.html  
- **Dashboard app:** https://github.com/brendan00948/games-universe/blob/main/dashboard/index.html  
- **Raw dashboard (copy/paste / host):** https://raw.githubusercontent.com/brendan00948/games-universe/main/dashboard/index.html  

The commit at the tip of `main` is the published version; see **Commits** on GitHub for the exact SHA.

### Legacy path

**`/dashboard.html`** is a tiny redirect to **`/dashboard/`** (query string preserved for `?auth=login` / `?auth=signup`).

GitHub Pages serves **`/dashboard/`** from the **`dashboard/index.html`** folder. The repo includes **`_config.yml`** with `permalink: pretty` so extensionless URLs behave consistently with Jekyll-based Pages hosting.

### Landing hero image

The marketing page uses **`assets/landing-hero.jpg`** (same origin as the site, preloaded) for fast first paint. Replace that file if you change the artwork.

## Staff: Discord pull alerts

Configure in the **Staff Panel → Rarity & site → Discord — special pull alerts**:

- Webhook URL, enable/disable, optional server invite link  
- Optional **auto rules**: minimum rarity rank (from your rarity order list) and/or maximum listed drop chance %  
- Per-blook and per-rarity **Discord announce** toggles in the pack blook editor and rarity appearance editor  

Settings are stored in Firestore under **`siteConfig/settings`** (e.g. `discordAnnounceWebhookUrl`, `discordAnnounceEnabled`, `discordAnnounceMinRarityIdx`, `discordAnnounceMaxChancePct`).

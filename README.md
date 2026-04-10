# games-universe

Single-page app: **`index.html`** (Game Universe).

## Published site (source)

- **Branch:** `main` on GitHub  
- **Browse:** https://github.com/brendan00948/games-universe/blob/main/index.html  
- **Raw (copy/paste / host):** https://raw.githubusercontent.com/brendan00948/games-universe/main/index.html  

The commit at the tip of `main` is the published version; see **Commits** on GitHub for the exact SHA.

## Staff: Discord pull alerts

Configure in the **Staff Panel → Rarity & site → Discord — special pull alerts**:

- Webhook URL, enable/disable, optional server invite link  
- Optional **auto rules**: minimum rarity rank (from your rarity order list) and/or maximum listed drop chance %  
- Per-blook and per-rarity **Discord announce** toggles in the pack blook editor and rarity appearance editor  

Settings are stored in Firestore under **`siteConfig/settings`** (e.g. `discordAnnounceWebhookUrl`, `discordAnnounceEnabled`, `discordAnnounceMinRarityIdx`, `discordAnnounceMaxChancePct`).

# Domain setup for this portfolio

This guide assumes you know nothing about domains, DNS, or Netlify. Follow it in order. Prices and dashboard labels change; when they do, trust the official page over this file.

**Checked:** 1 September 2026.

**Your site today:** [https://isaacayodele.netlify.app](https://isaacayodele.netlify.app)

That Netlify address already works. A custom domain (for example `ayodeleisaac.com`) is a nicer name that points at the same site.

---

## Part 1 — What a domain is

A **domain name** is the address people type, like `ayodeleisaac.com`. You rent it from a company. You do not own it forever. You pay once a year (or for several years at once).

**Hosting** is the computer that stores your website files. This portfolio is hosted on **Netlify**. Netlify already serves the site at `isaacayodele.netlify.app`. You do not buy hosting separately for this project.

**DNS** (Domain Name System) is the phone book of the internet. When someone types your domain, DNS answers: “that name lives at this host.” Until DNS is set correctly, the pretty name will not open your site.

**Netlify** is both the host and, if you choose, the DNS manager. It can also give you a free HTTPS certificate (the padlock in the browser).

A **registrar** is the shop where you buy the domain. Examples: Porkbun, Namecheap, Cloudflare Registrar, GoDaddy.

### Registrar vs hosting

| Role | Who does it here | Job |
| --- | --- | --- |
| Registrar | Porkbun (recommended) | Sells you the name and keeps you listed as the owner |
| Host | Netlify | Serves the actual website |
| DNS | Netlify DNS (recommended) or the registrar | Tells the internet where the name should go |

You can buy the name at Porkbun and still let Netlify manage DNS. That is the simplest path for this site.

### Registration vs DNS management

**Registration** = paying for the name so it is yours for a year.

**DNS management** = editing the phone-book records for that name.

They can be different companies. Changing nameservers at the registrar is how you hand DNS over to Netlify.

---

## Part 2 — Choosing a domain

A portfolio domain should be your name, easy to say on a call, and preferably `.com`.

Search **in this order**. Availability changes. Confirm in Porkbun before you pay.

1. `isaacayodele.com` — first choice if it is free. As of 1 September 2026, Namecheap listed this name as **already registered**. Do not assume it is yours. Search it again.
2. `ayodeleisaac.com` — same name, reversed. Clean `.com`.
3. `isaacayodele.dev` — best professional fallback. Software recruiters understand `.dev`. `.dev` requires HTTPS, which Netlify provides.
4. `isaacayodele.io` — fine if `.com` and `.dev` are gone.
5. `hiisaacayodele.com` or `withisaacayodele.com` — only if the exact name is taken on those TLDs.
6. `isaac-ayodele.com` — last among name-based options. Hyphens are awkward to say (“was that a dash?”).

**Avoid as the main site:** `mosidrum.com` (nickname, not how recruiters search), numbered names (`isaacayodele2.com`), and gimmick endings (`.xyz`, `.online`, `.site`, `.tech`) unless every better option is gone.

Search all of these in one Porkbun session before checkout so you can compare.

---

## Part 3 — Find the cheapest sensible option

Do not buy the cheapest first year. Look at **renewal**. A $6 first year that renews at $18 is more expensive by year two than a flat $11.

### .com prices checked 1 September 2026

| Registrar | First year | Renewal | Transfer | Privacy | Notes |
| --- | --- | --- | --- | --- | --- |
| [Porkbun](https://porkbun.com/products/domains) | **$11.08** | **$11.08** | **$11.08** | Free (on by default where allowed) | Live prices from Porkbun’s public pricing API. Same price every year. You can change nameservers to Netlify. |
| [Namecheap](https://www.namecheap.com/domains/registration/gtld/com/) | $11.08 list, sometimes **$6.79** new-customer promo | **$18.48** | $11.48 (sale) | Free for life on eligible TLDs | Promo is year one only. ICANN may add **$0.20**/year at checkout. |
| [Cloudflare Registrar](https://developers.cloudflare.com/registrar/) | Registry + ICANN **at cost** (no markup) | Same at-cost rate | At cost | WHOIS redaction where allowed | Cheapest long-term in principle. **Requires Cloudflare nameservers.** You cannot use Netlify DNS with a Cloudflare-registered domain. |

Porkbun’s API returned `.com` registration = renewal = transfer = **$11.08**. Re-check before you pay: [Porkbun domain pricing](https://porkbun.com/products/domains) or their checkout screen.

Cloudflare does not publish a fixed public `.com` sticker in their docs. They charge **exactly** the registry + ICANN list price, with no markup. See [Cloudflare Registrar](https://developers.cloudflare.com/registrar/) and [FAQ: How much does Cloudflare Registrar cost](https://developers.cloudflare.com/registrar/faq/).

**Verisign** (the company behind `.com`) has announced a wholesale increase effective **1 November 2026**. Every registrar will eventually pass that on. Quote the price on the checkout page, not this file.

### Recommendation for this portfolio

**Buy at Porkbun. Point nameservers at Netlify DNS.**

Why:

- Flat renewal. No “cheap year one, expensive forever.”
- Free WHOIS privacy on supported TLDs.
- You can change nameservers, which Cloudflare Registrar does not allow.
- Netlify DNS is the simplest way to get HTTPS and `www` + apex working on this site.

Skip GoDaddy-style $1 first-year ads. They often renew near $20+ and upsell privacy.

---

## Part 4 — Buying the domain (Porkbun)

1. Open [https://porkbun.com](https://porkbun.com).
2. Create an account. Use an email you check. You will get ownership and renewal mail there.
3. Search for your first-choice domain (start with `isaacayodele.com`, then the list in Part 2).
4. Select the **exact** name you want. Check the TLD (`.com` vs `.dev`).
5. Review the **first-year** price on the cart.
6. Find **renewal** on the same screen or the TLD page. If renewal is much higher than year one, stop and compare Porkbun’s flat rate.
7. Leave **domain privacy** on unless the TLD forbids it. Porkbun enables it by default where allowed.
8. Decline extra hosting, email, VPNs, and “website builders.” You already have Netlify.
9. Pay. Use a card you will still have next year if you enable auto-renew.
10. After payment, the domain should appear in [Porkbun Domain Management](https://porkbun.com/account/domains).
11. Turn on **account 2FA** (two-factor authentication) in Porkbun account security. A stolen registrar account can steal your name.
12. Confirm the domain shows as **Active** / registered in the dashboard.

You now own the name. The website is not on it yet. That is DNS, next.

---

## Part 5 — Understand DNS (only what you need)

Think of the domain as a house number. DNS is the instruction “deliver mail for this number to Netlify’s building.”

**Nameservers** are the “which phone book do we use?” setting at the registrar. If you set Porkbun’s nameservers to Netlify’s, Netlify becomes the phone book.

Records you may see (copy **Netlify’s values**, never invent them):

| Record | Plain meaning | When you need it |
| --- | --- | --- |
| **Nameservers** | Who runs the phone book | Netlify DNS path (recommended) |
| **A** | Points the name to an IPv4 address | External DNS path (Netlify will show the value) |
| **AAAA** | Same, but IPv6 | Only if Netlify asks for it |
| **CNAME** | “This name is an alias of that name” | Often used for `www` |
| **TXT** | A text note, used to prove you own the domain | If Netlify asks for verification |
| **MX** | Email | Only if you add email later. Do not delete MX records if you use email on this domain. |

**Propagation** means the new phone-book pages spreading worldwide. It is often minutes. It can take up to 24–48 hours. The site may work on your phone before your laptop, or the reverse.

---

## Part 6 — Connect the domain to Netlify (recommended: Netlify DNS)

Use Netlify’s current flow, not old blog screenshots.

Official docs:

- [Assign a domain to your site](https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app)
- [Set up Netlify DNS](https://docs.netlify.com/manage/domains/set-up-netlify-dns/)
- [Netlify name servers](https://docs.netlify.com/manage/domains/configure-domains/netlify-name-servers)
- [Get started with domains](https://docs.netlify.com/manage/domains/get-started-with-domains)

### Steps

1. Log in to [Netlify](https://app.netlify.com) and open **this** portfolio site (the one that already deploys from this repo).
2. Open **Domain management**.
3. Choose **Add a domain**, then **Add a domain you already own**.
4. Enter the domain you bought (for example `ayodeleisaac.com`). Verify and add it.
5. Choose **Netlify DNS** (not “External DNS”) when asked. If the domain is already listed, use **Options → Set up Netlify DNS**.
6. Netlify will show **four nameservers**. They look similar to `dns1.p01.nsone.net` — but **yours may differ**. Copy the exact four from **your** dashboard. Do not copy nameservers from this file or from a tutorial.
7. Open Porkbun → your domain → nameservers (Porkbun’s help: [changing nameservers](https://kb.porkbun.com/article/22-how-to-change-nameservers)).
8. Replace Porkbun’s default nameservers with the four Netlify nameservers. Remove the old ones. Save.
9. Wait. Propagation can take from a few minutes to 24 hours.
10. Return to Netlify. Wait until the domain shows as verified / DNS ready (wording in the UI may be “Netlify DNS”, “Active”, or similar).
11. Confirm the custom domain is the **production domain** for this site (primary domain in Domain management).

If Netlify still says waiting after 24 hours, see [Netlify DNS troubleshooting](https://docs.netlify.com/manage/domains/troubleshooting-tips/).

---

## Part 7 — External DNS (keep DNS at Porkbun or Cloudflare)

Use this if you do **not** want to change nameservers — for example you already use Cloudflare DNS, or you registered at Cloudflare Registrar (which **requires** Cloudflare nameservers).

Official: [Assign a domain](https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app) and Netlify’s in-app **Pending DNS verification** instructions.

1. Add the domain in Netlify Domain management as above.
2. Choose **External DNS**.
3. Open **Pending DNS verification** next to the domain. Netlify shows the **exact** records for **your** site.
4. At Porkbun or Cloudflare DNS, add those records **as shown**. Typical pattern (do not type these unless they match your dashboard):
   - Apex (`ayodeleisaac.com`): an **A** record Netlify specifies, **or** ALIAS/ANAME if your DNS host supports it.
   - `www`: a **CNAME** to the hostname Netlify shows (often your `something.netlify.app`).
5. Do not invent IP addresses from old articles. Netlify’s load-balancer addresses can change.
6. Wait for propagation.
7. Return to Netlify and verify.

Cloudflare-specific: if the orange cloud (proxy) is on, certificate provisioning can fail until Netlify can see the real DNS. Follow Netlify’s current Cloudflare notes in their troubleshooting docs.

---

## Part 8 — HTTPS (the padlock)

Browsers mark `http://` sites as not secure. Recruiters will notice. HTTPS also unlocks `.dev` domains.

Official: [HTTPS SSL on Netlify](https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/) and [Troubleshoot SSL and HTTPS](https://docs.netlify.com/manage/domains/troubleshooting/troubleshoot-ssl-and-https).

Netlify provisions a **Let’s Encrypt** certificate automatically once DNS for the custom domain points at Netlify. You do not buy SSL from Porkbun for this site.

**How to check**

- Visit `https://yourdomain.com`. You should see a padlock and **this** portfolio.
- In Netlify Domain management, HTTPS should show as provisioned / certificate present.

**If HTTPS does not appear immediately**

- DNS may still be propagating. Wait, then refresh Domain management.
- Netlify retries certificate issuance (their docs: retries for the first 24 hours, then hourly for two more days).
- Check for leftover old A/CNAME records, or a CAA record that blocks Let’s Encrypt.
- Do not install a random “free SSL” from the registrar. Let Netlify manage the certificate.

---

## Part 9 — `www` vs apex

- **Apex** (also called the root): `ayodeleisaac.com`
- **www:** `www.ayodeleisaac.com`

They are two names. You want both to open the same site.

Netlify treats the domain you add as primary and can serve **both** the apex and `www`, with one redirecting to the other. In Domain management you can set which one is primary.

**Recommendation:** make the **apex** (`ayodeleisaac.com`) primary, and let `www` redirect to it — unless you already share `www` links everywhere.

Do not create a second Netlify site for `www`. One site, both names.

Official starting point: [Assign a domain](https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app).

---

## Part 10 — Confirm everything works

Checklist:

- [ ] `https://yourdomain.com` loads **this** portfolio
- [ ] `https://www.yourdomain.com` loads the same site (or redirects to the apex)
- [ ] `http://` redirects to `https://`
- [ ] Netlify Domain management shows the domain verified
- [ ] No “connection not private” / certificate warning
- [ ] Phone browser loads the site
- [ ] After DNS is live, update `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx) and `siteUrl` in [`src/data/site.ts`](src/data/site.ts) from `https://isaacayodele.netlify.app` to your custom domain, then redeploy — so Open Graph / social previews use the new URL

Optional: paste the URL into [https://opengraph.xyz](https://opengraph.xyz) to preview the share card.

---

## Part 11 — Managing the domain later

**Renewal.** Domains expire. If you forget, the website name stops working and someone else can buy it.

**Auto-renew.** Turn it on at Porkbun and keep a valid card on file. Check the renewal price once a year.

**Updating DNS.** After Netlify DNS is on, edit records in **Netlify**, not Porkbun — unless you moved DNS back.

**Subdomain.** Example: `blog.yourdomain.com`. In Netlify DNS, add a record Netlify documents for that host. Do not guess.

**Account protection.** 2FA on Porkbun and Netlify. Do not share registrar passwords.

**Changing nameservers.** Only if you are moving DNS on purpose. Wrong nameservers take the site offline.

**Transfer.** Moving the domain to another registrar later is possible (auth code, unlock). Wait 60 days after registration before most transfers (ICANN rule).

**If it expires.** There is often a short grace period, then a redemption fee, then it can be registered by someone else. Auto-renew is cheaper than panic.

**Do not delete Netlify DNS records** unless you understand each one. Deleting the apex A/NETLIFY record or the `www` CNAME will disconnect the website.

---

## Part 12 — Official sources

Prefer these over random blogs.

**Netlify**

- [Get started with domains](https://docs.netlify.com/manage/domains/get-started-with-domains)
- [Assign a domain to your site](https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app)
- [Set up Netlify DNS](https://docs.netlify.com/manage/domains/set-up-netlify-dns/)
- [Netlify name servers](https://docs.netlify.com/manage/domains/configure-domains/netlify-name-servers)
- [HTTPS SSL](https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/)
- [Troubleshoot SSL and HTTPS](https://docs.netlify.com/manage/domains/troubleshooting/troubleshoot-ssl-and-https)

**Porkbun**

- [Domain pricing](https://porkbun.com/products/domains)
- [How to change nameservers](https://kb.porkbun.com/article/22-how-to-change-nameservers)
- [Porkbun API pricing](https://porkbun.com/api/json/v3/pricing/get) (used to confirm `.com` = $11.08 on 1 Sep 2026)

**Cloudflare**

- [Cloudflare Registrar](https://developers.cloudflare.com/registrar/)
- [Register a domain](https://developers.cloudflare.com/registrar/get-started/register-domain/)
- [Registrar FAQ](https://developers.cloudflare.com/registrar/faq/)
- [Cloudflare DNS records](https://developers.cloudflare.com/dns/manage-dns-records/)

**Namecheap** (comparison only)

- [.com pricing](https://www.namecheap.com/domains/registration/gtld/com/)
- [ICANN fee](https://www.namecheap.com/support/knowledgebase/article.aspx/1256/2201/what-is-the-icann-fee/)

**ICANN**

- [About domain names](https://www.icann.org/resources/pages/domain-names-101-2014-02-07-en)

THE LUCKY REALTORS — STATIC WEBSITE STARTER

FILES
- index.html: website sections and layout
- style.css: luxury forest-green, champagne-gold and ivory design
- config.js: paste the published Google Sheets CSV URL and WhatsApp number here
- script.js: loads listings from the sheet and applies filters

GOOGLE SHEETS COLUMNS (row 1, exact spelling)
ID | Title | Country | City | Type | Purpose | Price | Currency | Area | Unit | ImageURL | Status | Featured | Description | WhatsApp

Country values: India or UAE (Dubai is also accepted by the location filter).
Type examples: Agriculture, Villa, Apartment, Residential, Commercial, Office, Industrial.
Status values: Available, Under Offer, Sold, Hidden.
Featured values: Yes or No.
ImageURL: direct HTTPS image URL. Use images you own or have permission to publish.
WhatsApp: optional property-specific phone number, digits only with country code. Leave blank to use the global number in config.js.

SETUP
1. Create a Google Sheet and a Properties tab with the columns above.
2. Use File > Share > Publish to web; publish only the Properties tab as CSV.
3. Copy the published CSV URL.
4. Edit config.js and replace PASTE_YOUR_PUBLISHED_GOOGLE_SHEETS_CSV_URL_HERE with that URL, keeping the quotes.
5. Replace PASTE_YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE with your business WhatsApp number, digits only (example format 919876543210).
6. Upload all four files to the root of a public GitHub repository.
7. In GitHub, open repository Settings > Pages. Under Build and deployment choose Deploy from a branch, branch main, folder /(root), then Save.
8. After GitHub gives you a URL ending in github.io, open Settings > Pages > Custom domain and enter theluckyrealtors.com. Save.
9. In GoDaddy DNS, add the four A records for host @:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   Add CNAME host www pointing to YOUR-GITHUB-USERNAME.github.io (replace with your actual GitHub username; no repository name).
   Remove conflicting old A/AAAA/CNAME records for @ or www only if they conflict with the GitHub Pages setup. Do not delete MX/TXT records used for email.
10. Return to GitHub Pages settings and enable Enforce HTTPS when available. DNS can take up to 24 hours to propagate.

NOTES
- GitHub Pages can host public repositories on GitHub Free. Public site files and the published sheet are visible to visitors.
- Google Sheets changes can take a few minutes to appear in its published output.
- A static site does not provide a private login dashboard. Manage listings in Google Sheets. The published CSV is public read-only data.
- This starter is not legal, brokerage, tax or investment advice. Confirm all property claims, approvals, prices, title and availability before publication.

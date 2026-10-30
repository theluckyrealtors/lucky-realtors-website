// Dubai feature settings. Edit here; no need to touch dubai.js.
window.DUBAI_CONFIG = {
  dataUrl: 'data/dubai-listings.json', // path relative to index.html
  pageSize: 12,                        // cards shown per "Show more"
  defaultCurrency: 'AED',
  // Units of each currency per 1 AED. AED/USD is a fixed peg (3.6725).
  // UPDATE INR before launch: it moves daily and is NOT verified here.
  rates: { AED: 1, USD: 0.2723, INR: 24 },
  whatsapp: '',                        // optional; falls back to ADMIN_WHATSAPP from index.html
  showSampleBadge: true                // keep true until the listings are real inventory
};

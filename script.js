(() => {
  const cfg = window.LUCKY_CONFIG || {};
  const grid = document.getElementById('propertyGrid');
  const status = document.getElementById('listingStatus');
  const countryFilter = document.getElementById('countryFilter');
  const typeFilter = document.getElementById('typeFilter');
  const statusFilter = document.getElementById('statusFilter');
  const clean = value => String(value ?? '').trim();
  const norm = value => clean(value).toLowerCase();
  const escapeHTML = value => clean(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function parseCSV(text) {
    const rows = []; let row = [], cell = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i], next = text[i + 1];
      if (ch === '"' && quoted && next === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = !quoted;
      else if (ch === ',' && !quoted) { row.push(cell); cell = ''; }
      else if ((ch === '\n' || ch === '\r') && !quoted) {
        if (ch === '\r' && next === '\n') i++;
        row.push(cell); if (row.some(v => v.trim() !== '')) rows.push(row);
        row = []; cell = '';
      } else cell += ch;
    }
    if (cell.length || row.length) { row.push(cell); rows.push(row); }
    if (!rows.length) return [];
    const headers = rows.shift().map(h => norm(h).replace(/\s+/g, ''));
    return rows.map(values => Object.fromEntries(headers.map((h, i) => [h, clean(values[i])])));
  }
  function field(item, key) { return clean(item[norm(key).replace(/\s+/g, '')]); }
  function waLink(item) {
    const number = field(item, 'WhatsApp').replace(/\D/g, '') || clean(cfg.whatsappNumber).replace(/\D/g, '');
    const title = field(item, 'Title') || 'a property';
    const id = field(item, 'ID');
    const msg = `Hello THE LUCKY REALTORS, I am interested in ${title}${id ? ` (ID: ${id})` : ''}. Please share details.`;
    return number ? `https://wa.me/${number}?text=${encodeURIComponent(msg)}` : `mailto:theluckyrealtors@gmail.com?subject=${encodeURIComponent('Property enquiry: ' + title)}&body=${encodeURIComponent(msg)}`;
  }
  function propertyCard(item) {
    const title = field(item, 'Title') || 'Property opportunity';
    const location = [field(item, 'City'), field(item, 'Country')].filter(Boolean).join(', ');
    const image = field(item, 'ImageURL');
    const imageHTML = image && /^https:\/\//i.test(image) ? `<img class="property-image" loading="lazy" src="${escapeHTML(image)}" alt="${escapeHTML(title)}" onerror="this.style.display='none'">` : `<div class="property-image image-placeholder"></div>`;
    const price = [field(item, 'Price'), field(item, 'Currency')].filter(Boolean).join(' ');
    const area = [field(item, 'Area'), field(item, 'Unit')].filter(Boolean).join(' ');
    const featured = norm(field(item, 'Featured')) === 'yes';
    const statusText = field(item, 'Status') || 'Enquire';
    return `<article class="property-card"><div class="property-image-wrap">${imageHTML}<span class="property-badge">${escapeHTML(featured ? 'Featured' : statusText)}</span></div><div class="property-body"><div class="property-location">${escapeHTML(location || 'India · Dubai')}</div><h3 class="property-title">${escapeHTML(title)}</h3><p class="property-description">${escapeHTML(field(item, 'Description') || 'Contact us for property details, availability and terms.')}</p><div class="property-meta"><span>${escapeHTML(field(item, 'Type') || 'Property')}</span><span>${escapeHTML(area)}</span></div><div class="property-price">${escapeHTML(price || 'Price on enquiry')}</div><a class="property-link" href="${escapeHTML(waLink(item))}" target="_blank" rel="noopener">ENQUIRE ABOUT THIS PROPERTY ↗</a></div></article>`;
  }
  function render() {
    const country = norm(countryFilter.value), type = norm(typeFilter.value), chosenStatus = norm(statusFilter.value);
    const filtered = properties.filter(item => {
      const c = norm(field(item, 'Country')), t = norm(field(item, 'Type')), s = norm(field(item, 'Status'));
      const countryMatch = !country || c === country || (country === 'dubai' && c === 'uae');
      return countryMatch && (!type || t === type) && (!chosenStatus || s === chosenStatus);
    });
    status.textContent = `${filtered.length} ${filtered.length === 1 ? 'property' : 'properties'} found`;
    grid.innerHTML = filtered.length ? filtered.map(propertyCard).join('') : '<div class="empty-state">No matching properties at the moment. Please contact us for upcoming opportunities.</div>';
  }
  let properties = [];
  [countryFilter, typeFilter, statusFilter].forEach(el => el.addEventListener('change', render));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('mainNav').classList.toggle('open'));
  const wa = clean(cfg.whatsappNumber).replace(/\D/g, '');
  const contactMessage = encodeURIComponent('Hello THE LUCKY REALTORS, I would like to discuss a property opportunity.');
  const contactLink = wa ? `https://wa.me/${wa}?text=${contactMessage}` : `mailto:theluckyrealtors@gmail.com?subject=${encodeURIComponent('Property enquiry')}`;
  document.getElementById('contactWhatsApp').href = contactLink;
  document.getElementById('landownerLink').href = wa ? `https://wa.me/${wa}?text=${encodeURIComponent('Hello THE LUCKY REALTORS, I would like to discuss a landowner or joint venture opportunity.')}` : contactLink;

  if (!cfg.csvUrl || cfg.csvUrl.includes('PASTE_YOUR')) {
    status.innerHTML = 'Setup needed: add your published Google Sheets CSV link in <strong>config.js</strong>.';
    grid.innerHTML = '<div class="empty-state">Your property cards will appear here once the Google Sheets CSV link is connected.</div>';
    return;
  }
  fetch(cfg.csvUrl).then(response => { if (!response.ok) throw new Error('Could not load the published sheet.'); return response.text(); })
    .then(csv => {
      properties = parseCSV(csv).filter(item => field(item, 'Title') && norm(field(item, 'Status')) !== 'hidden');
      render();
    })
    .catch(() => { status.innerHTML = '<span class="error-state">Listings could not be loaded. Check that the sheet is published as CSV and the URL in config.js is correct.</span>'; grid.innerHTML = ''; });
})();

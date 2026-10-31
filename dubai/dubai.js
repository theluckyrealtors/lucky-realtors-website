/* Dubai feature. Hooks into index.html via #countryFilter, #searchBtn, #clearFilters.
   When Country = "Dubai" it shows its own filter bar and results grid; otherwise it stays hidden. */
(function () {
  'use strict';
  var C = window.DUBAI_CONFIG || {};
  var country = document.getElementById('countryFilter');
  var mount = document.getElementById('dubaiFilterMount');
  if (!country || !mount) return;

  var rates = C.rates || { AED: 1 };
  var cur = C.defaultCurrency || 'AED';
  var all = [], loaded = false, loading = false, searched = false, results = [], shown = 0;
  var size = C.pageSize || 12;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  function money(aed) {
    var v = aed * (rates[cur] || 1);
    if (cur === 'INR') return v >= 1e7 ? '₹ ' + (v / 1e7).toFixed(2) + ' Cr' : '₹ ' + (v / 1e5).toFixed(1) + ' L';
    var p = cur === 'USD' ? 'USD ' : 'AED ';
    return p + (v >= 1e6 ? (v / 1e6).toFixed(2) + 'M' : Math.round(v).toLocaleString('en-US'));
  }
  function psf(aed, sqft) {
    var v = aed * (rates[cur] || 1) / sqft;
    return (cur === 'INR' ? '₹ ' : cur + ' ') + Math.round(v).toLocaleString('en-US') + ' / sq ft';
  }

  // Dubai fields live INSIDE the main .filters bar as an extra row (shown only for Dubai)
  var bar = document.querySelector('.filters');
  var row = document.createElement('div');
  row.className = 'dubai-row';
  row.style.cssText = 'display:none;grid-column:1/-1;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;padding-top:14px;border-top:1px solid #d6d0c3;';
  row.innerHTML =
    '<div><label for="dbArea">Dubai area</label><select id="dbArea"><option value="">All areas</option></select></div>' +
    '<div><label for="dbType">Dubai type</label><select id="dbType"><option value="">All types</option><option>Apartment</option><option>Penthouse</option><option>Townhouse</option><option>Villa</option></select></div>' +
    '<div><label for="dbBeds">Bedrooms</label><select id="dbBeds"><option value="">Any</option><option value="0">Studio</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4+</option></select></div>' +
    '<div><label for="dbMax">Max budget (AED M)</label><input id="dbMax" type="number" min="0" step="0.1" placeholder="e.g. 3"></div>' +
    '<div><label for="dbSort">Sort</label><select id="dbSort"><option value="">Featured</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option><option value="size">Size: large to small</option></select></div>' +
    '<div><label for="dbCur">Currency</label><select id="dbCur"><option>AED</option><option>USD</option><option>INR</option></select></div>';
  (bar || mount).appendChild(row);

  // Results area sits below the filter bar (in the mount point)
  mount.innerHTML =
    '<div class="dubai-panel" id="dubaiPanel" style="display:none" aria-live="polite">' +
    '<p class="dubai-count" id="dbCount"></p>' +
    '<div class="dubai-grid" id="dubaiGrid"></div>' +
    '<button type="button" class="btn dark dubai-more" id="dbMore" style="display:none">Show more</button>' +
    '</div>';

  var panel = $('dubaiPanel'), grid = $('dubaiGrid'), more = $('dbMore'), count = $('dbCount');
  $('dbCur').value = cur;

  function isDubai() { return country.value === 'Dubai'; }

  function load() {
    if (loaded || loading) return Promise.resolve();
    loading = true;
    return fetch(C.dataUrl || 'data/dubai-listings.json')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) {
        all = Array.isArray(d) ? d : (d.listings || []);
        loaded = true;
        var areas = Array.from(new Set(all.map(function (l) { return l.area; }))).sort();
        $('dbArea').innerHTML = '<option value="">All areas</option>' + areas.map(function (a) { return '<option>' + esc(a) + '</option>'; }).join('');
      })
      .catch(function () { grid.innerHTML = '<div class="dubai-empty">Dubai listings could not be loaded. Please try again shortly.</div>'; })
      .then(function () { loading = false; });
  }

  function filtered() {
    var a = $('dbArea').value, t = $('dbType').value, b = $('dbBeds').value;
    var max = parseFloat($('dbMax').value), q = ($('searchFilter').value || '').toLowerCase().trim();
    var out = all.filter(function (l) {
      if (a && l.area !== a) return false;
      if (t && l.type !== t) return false;
      if (b !== '' && (b === '4' ? l.bedrooms < 4 : l.bedrooms !== +b)) return false;
      if (max > 0 && l.price_aed > max * 1e6) return false;
      if (q && (l.title + ' ' + l.area).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var s = $('dbSort').value;
    if (s === 'lo') out.sort(function (x, y) { return x.price_aed - y.price_aed; });
    if (s === 'hi') out.sort(function (x, y) { return y.price_aed - x.price_aed; });
    if (s === 'size') out.sort(function (x, y) { return y.size_sqft - x.size_sqft; });
    return out;
  }

  function wa(l) {
    var num = (typeof ADMIN_WHATSAPP !== 'undefined' && ADMIN_WHATSAPP) || C.whatsapp || '';
    var msg = encodeURIComponent('Hi, I am interested in this Dubai property: ' + l.title + ' - ID: ' + l.id);
    return 'https://wa.me/' + num + '?text=' + msg;
  }

  function card(l) {
    var img = l.imageUrl ? ' style="background-image:url(\'' + esc(encodeURI(l.imageUrl)) + '\')"' : '';
    var sample = (C.showSampleBadge !== false && l.is_sample) ? '<span class="dubai-badge sample">Sample listing</span>' : '';
    var permit = l.trakheesi_permit ? 'Trakheesi permit: ' + esc(l.trakheesi_permit) : 'Permit number to be added';
    var beds = l.bedrooms === 0 ? 'Studio' : l.bedrooms + ' bed';
    return '<article class="dubai-card">' +
      '<div class="dubai-img"' + img + '>' + (l.imageUrl ? '' : 'Photos coming soon') +
      '<span class="dubai-badge">' + esc(l.status || 'Available') + '</span>' + sample + '</div>' +
      '<div class="dubai-body">' +
      '<span class="dubai-place">' + esc(l.area) + ', Dubai, UAE</span>' +
      '<h3>' + esc(l.title) + '</h3>' +
      '<div class="dubai-price">' + money(l.price_aed) + '</div>' +
      '<div class="dubai-psf">' + psf(l.price_aed, l.size_sqft) + '</div>' +
      '<div class="dubai-meta"><span><b>' + esc(beds) + '</b></span><span>' + Number(l.size_sqft).toLocaleString('en-US') + ' sq ft</span><span>' + esc(l.view) + '</span></div>' +
      '<p class="dubai-amen">' + esc((l.amenities || []).join(' · ')) + '</p>' +
      '<div class="dubai-permit">' + permit + '</div>' +
      '<a class="btn whatsapp" href="' + wa(l) + '" target="_blank" rel="noopener">💬 Contact Admin on WhatsApp</a>' +
      '</div></article>';
  }

  function draw(append) {
    if (!append) { grid.innerHTML = ''; shown = 0; }
    if (!results.length) {
      grid.innerHTML = '<div class="dubai-empty">No Dubai properties match these filters. Try a wider budget or another area.</div>';
      more.style.display = 'none'; count.textContent = ''; return;
    }
    var next = results.slice(shown, shown + size);
    grid.insertAdjacentHTML('beforeend', next.map(card).join(''));
    shown += next.length;
    count.textContent = 'Showing ' + shown + ' of ' + results.length + ' Dubai properties.';
    more.style.display = shown < results.length ? 'block' : 'none';
  }

  function run() {
    load().then(function () {
      if (!loaded) return;
      searched = true;
      results = filtered();
      draw(false);
      // Suppress the India grid message while Dubai is selected
      $('propertyGrid').innerHTML = '';
      $('listingStatus').innerText = 'Found ' + results.length + ' matching Dubai properties.';
    });
  }

  function sync() {
    var on = isDubai();
    row.style.display = on ? 'grid' : 'none';
    panel.style.display = on ? 'block' : 'none';
    if (on) load(); else { searched = false; grid.innerHTML = ''; count.textContent = ''; more.style.display = 'none'; }
  }

  country.addEventListener('change', sync);
  $('searchBtn').addEventListener('click', function () { if (isDubai()) setTimeout(run, 0); });
  $('clearFilters').addEventListener('click', function () {
    ['dbArea', 'dbType', 'dbBeds', 'dbMax', 'dbSort'].forEach(function (id) { $(id).value = ''; });
    sync();
  });
  more.addEventListener('click', function () { draw(true); });
  ['dbArea', 'dbType', 'dbBeds', 'dbMax', 'dbSort'].forEach(function (id) {
    $(id).addEventListener('change', function () { if (searched) run(); });
  });
  $('dbCur').addEventListener('change', function (e) { cur = e.target.value; if (searched) { draw(false); } });
  sync();
})();

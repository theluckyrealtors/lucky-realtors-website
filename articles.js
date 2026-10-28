/* THE LUCKY REALTORS — Section 09 Articles (additive; does not touch existing code)
   Add this ONE line before </body> in index.html:  <script src="articles.js"></script> */
(function () {
  var WA = '918788843016';
  var FALLBACK = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80';
  var u = function (id) { return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=900&q=80'; };

  var A = [
    /* ---------------- DUBAI ---------------- */
    { m: 'Dubai', t: 'Downtown Dubai: Living Beside the Burj', g: 'Luxury Apartments', i: u('1512453979798-5ea266f8880c'),
      p: [
        'Downtown Dubai is the part of the city most people picture first: the Burj Khalifa, the fountains, the Dubai Mall just a short walk from your front door. Apartments here are bought as much for the address as for the home itself, and many buyers hold them as long-term rental assets or as a second home.',
        'Before you fall for the view, look at the practical side. Compare service charges between towers, check which floor and direction give you the skyline rather than a neighbouring building, and ask how easily the unit has rented in the past. A good apartment here is rarely cheap, so a careful site visit is worth more than any brochure.'] },
    { m: 'Dubai', t: 'Palm Jumeirah Villas: Island Living, Explained', g: 'Luxury Villas', i: u('1613490493576-7fde63acd811'),
      p: [
        'Palm Jumeirah is one of the few places where you can step from your garden onto a private beach. Its villas sit on the “fronds” of the island, and each frond feels like a quiet street of its own, with sea on both sides.',
        'Prices vary a lot depending on whether the villa is beachfront, mid-frond or near the trunk, and on how much it has been renovated. Ask about the plot size, the condition of the sea wall access, and any community rules on extensions. Visit at different times of day to hear the traffic and see how the light falls on the house.'] },
    { m: 'Dubai', t: 'Business Bay Flats: Where Work Meets the Waterfront', g: 'Flats & Apartments', i: u('1518684079-3c830dcef090'),
      p: [
        'Business Bay has grown into a true live-and-work district. Towers line the Dubai Canal, offices are minutes away, and Downtown is next door. For professionals and investors, that mix of location and choice of apartment sizes is the main attraction.',
        'Because there are so many buildings, quality differs from one tower to the next. Look at the age of the building, the lift capacity, parking, and the maintenance record. Studios and one-bedrooms are popular with tenants, while larger flats suit families who want a city lifestyle. Always read the service charge breakdown before deciding.'] },
    { m: 'Dubai', t: 'Dubai Hills Estate: Villas Built Around Green Space', g: 'Villas & Townhouses', i: u('1600596542815-ffad4c1539a9'),
      p: [
        'Dubai Hills Estate was planned around a golf course, parks and schools, so it appeals to families who want space without leaving the city. Villas and townhouses sit on tree-lined streets, with apartments and a mall close by.',
        'Check which cluster you are buying in, because views of the greens or the skyline can change both the price and how quickly the home resells. Ask about plot size, built-up area and whether the villa has been upgraded. If you plan to rent it out, family-sized homes near schools tend to attract longer tenancies.'] },
    { m: 'Dubai', t: 'Dubai Marina: A Practical Guide for Apartment Buyers', g: 'Flats & Apartments', i: u('1582407947304-fd86f028f716'),
      p: [
        'Dubai Marina is one of the most established waterfront neighbourhoods in the city, with restaurants, the promenade, the tram and the beach all within easy reach. Because it has been popular for years, there is a deep market of resale apartments to choose from.',
        'Older towers can offer good value, but inspect them carefully: ask about recent maintenance, cooling systems and any planned works that could raise your service charges. Marina view units look wonderful, yet noise from the promenade can be a factor on lower floors. Walk the area at night before you commit.'] },
    { m: 'Dubai', t: 'Buying Land in Dubai: What Foreign Investors Should Know', g: 'Land & Plots', i: u('1500382017468-9049fed747ef'),
      p: [
        'Foreign buyers can own property in designated freehold areas of Dubai, and that includes some residential plots. Land is usually sold within master-planned communities, where the developer sets rules on what you can build, how tall it can be and which designs are allowed.',
        'Before buying a plot, confirm the permitted use, plot dimensions, access to utilities and any building timelines you must meet. Get the title documents checked and ask what approvals are needed before construction begins. Budget for design, contractor and approval costs as well, since building a home takes planning beyond the price of the land.'] },
    { m: 'Dubai', t: 'Off-Plan in Dubai: How to Buy Without Getting Burned', g: 'Off-Plan Properties', i: u('1545324418-cc1a3fa10c00'),
      p: [
        'Off-plan means you buy before the building is finished, usually through a staged payment plan. It can lower the entry cost and give you a choice of units, but you are trusting a developer to deliver on time and as promised.',
        'Research the developer’s past projects, and check that the project is registered and that payments go into the proper escrow arrangement. Read the sale agreement closely, especially clauses on delays, changes to the plan and handover. Visit completed projects by the same developer if you can, so you see the real quality instead of the render.'] },
    { m: 'Dubai', t: 'Emirates Hills and Golf Estates: The Top End of Villa Living', g: 'Luxury Villas', i: u('1512917774080-9991f1c4c750'),
      p: [
        'At the top of the market, Dubai offers gated villa communities built around golf courses, lakes and private grounds. Homes here are large, often one-of-a-kind, and bought by families who value privacy, space and security.',
        'Because each villa can be so different, a standard price per square foot tells you little. Compare the plot, the finish, the condition and the view, and ask a trusted adviser to help you judge what is fair. Expect a slower, more personal sale process, with plenty of time to visit more than once.'] },
    { m: 'Dubai', t: 'The Real Cost of Buying in Dubai Beyond the Price Tag', g: 'Investor Guide', i: u('1560448204-e02f11c3d0e2'),
      p: [
        'The listed price is only part of what you pay. There is typically a Dubai Land Department transfer fee, agency fees, registration costs, and if you take a mortgage, bank and valuation charges as well. Ask for a complete list before you make an offer.',
        'After you buy, service charges are an ongoing cost that depends on the building or community. Add maintenance, insurance and any periods when the home is empty. Working these numbers out early helps you judge whether the property suits your goals, and it avoids unpleasant surprises later.'] },
    { m: 'Dubai', t: 'Property and the UAE Golden Visa: What to Check First', g: 'Investor Guide', i: u('1564013799919-ab600027ffc6'),
      p: [
        'Owning property in Dubai can, in some cases, support an application for a long-term residency visa. Rules have included a minimum property value, but they have changed over time and depend on factors such as whether the property is completed or off-plan and whether a mortgage is involved.',
        'Do not buy a home only because of a visa. Check the current requirements on the official government channels or with a licensed adviser before you commit, and keep all title and payment documents together. We can point you to the right questions to ask, but a visa decision should always be confirmed with the authorities.'] },

    /* ---------------- INDIA ---------------- */
    { m: 'India', t: 'Pune Agricultural Land: Mulshi, Maval and Beyond', g: 'Agricultural Land · Pune', i: u('1500382017468-9049fed747ef'),
      p: [
        'The hills and valleys around Pune have drawn buyers looking for farm land, weekend retreats and long-term investment. Areas such as Mulshi and Maval are popular because of their scenery and their distance from the city, yet each parcel is different.',
        'In Maharashtra, who may buy agricultural land is regulated, so confirm your eligibility before you pay anything. Study the 7/12 extract, check the land’s history, and see that the boundaries match what is on the ground. If you plan to build or change its use, ask what permissions are needed first.'] },
    { m: 'India', t: 'Industrial Land Around Pune: Chakan, Talegaon and Ranjangaon', g: 'Industrial Land · Pune', i: u('1487958449943-2429e8be8625'),
      p: [
        'Pune’s industrial belt is home to manufacturing, auto components and logistics. Chakan, Talegaon and Ranjangaon are names every industrial buyer hears, because roads, workers and suppliers are already close.',
        'When looking at a plot, check whether it lies in an MIDC area or privately held industrial land, and understand whether you are buying freehold or taking an allotment with conditions. Confirm road width, power and water supply, and effluent rules for your type of business. A site visit with your engineer saves costly mistakes.'] },
    { m: 'India', t: 'R-Zone Land in Pune: How to Read the Zone Certificate', g: 'R-Zone Land · Pune', i: u('1600607687939-ce8a6c25118c'),
      p: [
        'R-Zone refers to land marked for residential use in the development plan, which is what many plotting and housing projects look for. The zone certificate is the document that tells you how the planning authority classifies a particular piece of land.',
        'Always ask for the certificate and compare it with the survey number you are buying. Look for any reservations, road widening or other restrictions on the plot. Plan approvals, access and the development potential also matter, so involve a qualified planner or lawyer before you finalise a deal.'] },
    { m: 'India', t: 'Commercial Space in Pune: Hinjewadi, Kharadi, Baner and Magarpatta', g: 'Commercial · Pune', i: u('1486406146926-c627a92ad1ab'),
      p: [
        'Pune’s commercial spaces are clustered around business districts where IT parks, co-working spaces and retail meet. Each area serves a different type of tenant, so the right choice depends on who your customers or employees are.',
        'Compare carpet area against built-up area, because the difference affects what you really get. Ask about parking, power backup, maintenance charges and the lease terms of any existing tenant. For an investment, a space that is easy to reach and suits many kinds of businesses is usually easier to rent again.'] },
    { m: 'India', t: 'Agricultural Land Near Mumbai: Raigad, Palghar and Karjat', g: 'Agricultural Land · Mumbai', i: u('1500382017468-9049fed747ef'),
      p: [
        'Within a few hours of Mumbai, districts such as Raigad and Palghar offer farm land, orchards and weekend plots. The pull is easy: green surroundings that still sit within reach of the city.',
        'Because rules on who can buy farm land and how it can be used are strict, do not rely on a seller’s word. Check the 7/12 extract, mutation entries and the exact survey number, and ask whether any conversion to non-agricultural use is allowed. Walk the boundary with the seller so there are no surprises.'] },
    { m: 'India', t: 'Industrial and Warehousing Land in the Mumbai Region', g: 'Industrial Land · Mumbai', i: u('1565008447742-97f6f38c985c'),
      p: [
        'Warehousing and light industry have grown around Bhiwandi, Taloja and parts of Navi Mumbai because they link well to the port, highways and the city. Demand for storage and logistics space is the reason many investors look here.',
        'Before buying, confirm the zoning, truck access, ceiling height needs and power load. If the land lies in an industrial estate, understand the authority’s rules on transfers and permitted use. Talk to current occupiers about floods, traffic and labour availability, which a map will never show you.'] },
    { m: 'India', t: 'Residential Land and R-Zone in the Mumbai Region', g: 'R-Zone Land · Mumbai', i: u('1600585154340-be6161a56a0c'),
      p: [
        'Land inside Mumbai is scarce, so opportunities usually come through redevelopment or from the wider metropolitan region. Development potential depends on the planning rules for that parcel, including permitted floor space and road access.',
        'Study the zone, any reservations, tenants or existing occupants, and the title history before you take a step. For redevelopment, society approvals and legal clarity are as important as the land itself. A joint venture with an experienced developer can help share both the work and the risk.'] },
    { m: 'India', t: 'Commercial Space in Mumbai: BKC, Lower Parel, Andheri and Navi Mumbai', g: 'Commercial · Mumbai', i: u('1570168007204-dfb528c6958f'),
      p: [
        'Mumbai’s business districts each carry their own character. BKC is known for finance and corporate offices, Lower Parel for media and creative firms, Andheri for its airport links, and Navi Mumbai for newer, spacious buildings at a lower cost.',
        'Ask how the area is measured and what the real usable space is. Check the lease length, lock-in, escalation terms and who handles maintenance. Whether you want to use it or rent it out, a well-connected building with good parking will usually be easier to keep occupied.'] },
    { m: 'India', t: 'Seven Documents Every Maharashtra Land Buyer Should Check', g: 'Buyer Guide', i: u('1486325212027-8081e485255e'),
      p: [
        'Before paying for land in Maharashtra, ask to see the 7/12 extract, the 8A extract, mutation (ferfar) entries, the title documents, an encumbrance record, the zone certificate and a measurement or demarcation record. Together they show who owns the land, how it is classified and whether anything is pending against it.',
        'Match every document to the same survey or gat number and look for gaps or differences in names. Have a lawyer carry out a proper title search, and if the project is a housing scheme, check its RERA registration. Never skip this step because the price looks attractive.'] },
    { m: 'India', t: 'Joint Venture Land Deals in Pune and Mumbai: How They Work', g: 'Joint Ventures', i: u('1497366216548-37526070297c'),
      p: [
        'In a joint venture, a landowner contributes the land and a developer contributes the money, approvals and construction. Both then share the result, either as built-up area, a share of revenue, or a mix of the two.',
        'The agreement is everything. It should state who does what, the timelines, how sales are handled, and what happens if something goes wrong. Landowners should check the developer’s previous projects, and developers should check the land’s title. Have a lawyer draft and review the papers before anything is signed.'] }
  ];

  /* ---------- styles (scoped, uses the site's own variables) ---------- */
  var css = '#articles .art-tabs{display:flex;gap:10px;flex-wrap:wrap;margin:22px 0}' +
    '#articles .art-tab{background:transparent;border:1px solid var(--line);padding:10px 18px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;color:var(--green)}' +
    '#articles .art-tab.on{background:var(--green);color:var(--ivory);border-color:var(--green)}' +
    '#articles .art-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:19px}' +
    '.art-card{background:#fff;border:1px solid var(--line);display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s}' +
    '.art-card:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(16,44,37,.12)}' +
    '.art-img{height:210px;background:#d9d6ca center/cover;position:relative}' +
    '.art-img .tag{position:absolute;top:14px;left:14px;background:var(--green);color:#fff;padding:8px 10px;font-size:9px;text-transform:uppercase;letter-spacing:1px}' +
    '.art-body{padding:20px;display:flex;flex-direction:column;flex:1}' +
    '.art-body small{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);font-weight:700}' +
    '.art-body h3{font:600 25px/1.1 "Cormorant Garamond",serif;margin:8px 0 10px}' +
    '.art-body p{font-size:12px;line-height:1.8;color:#646960;margin:0 0 16px}' +
    '.art-body .btn{margin-top:auto}' +
    '.art-modal{position:fixed;inset:0;background:#071a16c9;display:none;align-items:center;justify-content:center;padding:18px;z-index:40}' +
    '.art-modal.open{display:flex}' +
    '.art-box{background:var(--ivory);width:min(720px,100%);max-height:92vh;overflow:auto;position:relative;box-shadow:0 20px 80px #0005}' +
    '.art-box .hero-img{height:300px;background:#d9d6ca center/cover}' +
    '.art-box .in{padding:28px 30px 32px}' +
    '.art-box h2{font:500 clamp(30px,4vw,42px)/1.05 "Cormorant Garamond",serif;margin:8px 0 16px}' +
    '.art-box p{font-size:14px;line-height:1.95;color:#40443d}' +
    '.art-box .note{font-size:11px;color:#8a6a30;border-top:1px solid var(--line);padding-top:14px;margin-top:20px}' +
    '.art-x{position:absolute;right:12px;top:10px;width:36px;height:36px;border:0;border-radius:50%;background:#fffdf8cc;font-size:22px;cursor:pointer;z-index:2}' +
    '@media(max-width:900px){#articles .art-grid{grid-template-columns:repeat(2,1fr)}}' +
    '@media(max-width:650px){#articles .art-grid{grid-template-columns:1fr}.art-box .hero-img{height:210px}.art-box .in{padding:22px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- section 09 ---------- */
  var sec = document.createElement('section');
  sec.className = 'section'; sec.id = 'articles';
  sec.innerHTML = '<div class="section-label">09 / ARTICLES</div>' +
    '<h2>Property insights, <em>written for you.</em></h2>' +
    '<p class="section-desc">Practical guides on Dubai and India real estate: flats, villas, land, industrial and commercial space. General information to help you ask better questions before you invest.</p>' +
    '<div class="art-tabs"><button class="art-tab on" data-f="">All Articles</button>' +
    '<button class="art-tab" data-f="Dubai">Dubai</button><button class="art-tab" data-f="India">India: Mumbai &amp; Pune</button></div>' +
    '<div class="art-grid" id="artGrid"></div>';

  var contact = document.getElementById('contact');
  if (contact && contact.parentNode) {
    contact.parentNode.insertBefore(sec, contact);
    var lbl = contact.querySelector('.section-label');
    if (lbl) lbl.textContent = '10 / GET IN TOUCH';   // keeps numbering in order
  } else { document.body.appendChild(sec); }

  /* ---------- header dropdown link ---------- */
  var dd = document.querySelector('#contactDropdown .dropdown-content');
  if (dd) {
    var a = document.createElement('a'); a.href = '#articles'; a.textContent = 'Articles';
    a.addEventListener('click', function () { var d = document.getElementById('contactDropdown'); if (d) d.classList.remove('show'); });
    dd.appendChild(a);
  }

  /* ---------- modal ---------- */
  var modal = document.createElement('div');
  modal.className = 'art-modal'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = '<div class="art-box"><button class="art-x" aria-label="Close article">×</button>' +
    '<div class="hero-img" id="aImg"></div><div class="in"><div class="section-label" id="aTag"></div>' +
    '<h2 id="aTitle"></h2><div id="aText"></div>' +
    '<a class="btn whatsapp" id="aWa" target="_blank" rel="noopener" style="width:auto;margin-top:8px">💬 Discuss this on WhatsApp</a>' +
    '<p class="note">General information only, not legal, tax or financial advice. Rules, fees and approvals change, so please verify current requirements with the relevant authority or a licensed professional. Images are illustrative stock photos, not specific listings.</p></div></div>';
  document.body.appendChild(modal);

  function setImg(el, src) {
    el.style.backgroundImage = 'url("' + src + '")';
    var t = new Image(); t.onerror = function () { el.style.backgroundImage = 'url("' + FALLBACK + '")'; }; t.src = src;
  }
  function closeM() { modal.classList.remove('open'); document.body.style.overflow = ''; }
  modal.querySelector('.art-x').addEventListener('click', closeM);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeM(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeM(); });

  function openM(a) {
    setImg(document.getElementById('aImg'), a.i);
    document.getElementById('aTag').textContent = a.m + ' · ' + a.g;
    document.getElementById('aTitle').textContent = a.t;
    var box = document.getElementById('aText'); box.innerHTML = '';
    a.p.forEach(function (x) { var p = document.createElement('p'); p.textContent = x; box.appendChild(p); });
    document.getElementById('aWa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hello, I read your article "' + a.t + '" and would like to talk to your team.');
    modal.classList.add('open'); document.body.style.overflow = 'hidden'; modal.querySelector('.art-box').scrollTop = 0;
  }

  /* ---------- grid ---------- */
  var grid = document.getElementById('artGrid');
  function render(f) {
    grid.innerHTML = '';
    A.filter(function (a) { return !f || a.m === f; }).forEach(function (a) {
      var d = document.createElement('article'); d.className = 'art-card';
      d.innerHTML = '<div class="art-img"><span class="tag"></span></div><div class="art-body"><small></small><h3></h3><p></p><button class="btn dark small">Read article ↗</button></div>';
      d.querySelector('.tag').textContent = a.m;
      d.querySelector('small').textContent = a.g;
      d.querySelector('h3').textContent = a.t;
      d.querySelector('p').textContent = a.p[0].length > 150 ? a.p[0].slice(0, 147).replace(/\s+\S*$/, '') + '…' : a.p[0];
      setImg(d.querySelector('.art-img'), a.i);
      d.querySelector('button').addEventListener('click', function () { openM(a); });
      grid.appendChild(d);
    });
  }
  sec.querySelectorAll('.art-tab').forEach(function (b) {
    b.addEventListener('click', function () {
      sec.querySelectorAll('.art-tab').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on'); render(b.getAttribute('data-f'));
    });
  });
  render('');
})();

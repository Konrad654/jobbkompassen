'use strict';
const $ = id => document.getElementById(id);
const copy = {
  jobs:['Hitta jobb','Find jobs','Jobs finden'],
  sources:['Jobbkällor','Job sources','Jobquellen'],
  kicker:['JOBBSÖKNING I EUROPA','JOBS ACROSS EUROPE','JOBS IN EUROPA'],
  heading:['Hitta ditt nästa jobb.','Find your next job.','Finde deinen nächsten Job.'],
  intro:['Sök i Platsbanken och svenska jobbportaler. Hitta vidare till arbetsförmedlingar i Europa.','Search the Swedish employment service and partner job boards. Explore employment services across Europe.','Durchsuche die schwedische Arbeitsvermittlung und ihre Partner. Entdecke Arbeitsvermittlungen in Europa.'],
  keyword:['Yrke eller sökord','Job or keyword','Beruf oder Suchbegriff'],
  placeholder:['Exempel: elektriker, developer, Pflegekraft','Example: electrician, developer, Pflegekraft','Beispiel: Elektriker, developer, Pflegekraft'],
  submit:['Sök jobb','Search jobs','Jobs suchen'],
  filters:['Filter','Filters','Filter'],
  clear:['Rensa','Clear','Zurücksetzen'],
  origin:['Nuvarande land','Current country','Aktuelles Land'],
  destination:['Jobbets land','Job location','Arbeitsland'],
  eu:['Endast EU-länder','EU countries only','Nur EU-Länder'],
  category:['Yrkesområde','Occupation field','Berufsfeld'],
  education:['Utbildningsnivå','Education level','Bildungsniveau'],
  training:['Utbildning eller kurs','Training or course','Ausbildung oder Kurs'],
  cert:['Certifikat eller behörighet','Certificate or licence','Zertifikat oder Zulassung'],
  salary:['Minsta angivna månadslön (SEK)','Minimum listed monthly pay (SEK)','Angegebener Mindestmonatslohn (SEK)'],
  overview:['JOBBÖVERSIKT','JOB OVERVIEW','STELLENÜBERSICHT'],
  coverage:['TÄCKNING OCH KÄLLOR','COVERAGE AND SOURCES','ABDECKUNG UND QUELLEN'],
  sourceIntro:['Platsbanken och JobAd Links visas i sökresultaten. Övriga källor öppnas i respektive portal.','Search results include Platsbanken and JobAd Links. Other sources open in their own job portals.','Die Ergebnisse stammen aus Platsbanken und JobAd Links. Weitere Quellen öffnen sich im jeweiligen Portal.'],
  rights:['Läs om att arbeta utomlands hos Your Europe','Read about working abroad at Your Europe','Informationen zur Arbeit im Ausland bei Your Europe'],
  independent:['En fristående jobbsökning','An independent job search','Eine unabhängige Jobsuche'],
  more:['Hämta fler annonser','Load more listings','Weitere Stellen laden'],
  all:['Alla','All','Alle'],
  unspecified:['Ej valt','Unspecified','Nicht ausgewählt'],
  loading:['Hämtar annonser…','Loading listings…','Stellen werden geladen…'],
  found:['annonser visas','listings shown','Stellen angezeigt'],
  empty:['Inga träffar bland hämtade annonser.','No matches in the loaded listings.','Keine Treffer unter den geladenen Stellen.'],
  outside:['Det valda landet ligger utanför EU. Avmarkera EU-filtret för att söka där.','The selected country is outside the EU. Clear the EU filter to search there.','Das gewählte Land liegt außerhalb der EU. Deaktiviere den EU-Filter für die Suche dort.'],
  unavailable:['Kunde inte hämta annonser från','Could not load listings from','Stellen konnten nicht geladen werden von'],
  partial:['Fler annonser kan finnas hos källorna.','More listings may be available at the sources.','Weitere Stellen können bei den Quellen verfügbar sein.'],
  filtersNote:['Krav och lön filtreras bland hämtade annonser när uppgifterna finns.','Requirements and pay are filtered among loaded listings when data is available.','Anforderungen und Gehalt werden unter geladenen Stellen gefiltert, soweit angegeben.'],
  unknown:['Ej angivet','Not stated','Nicht angegeben'],
  details:['Annonsuppgifter','Listing details','Stellendetails'],
  original:['Öppna originalannons','Open original listing','Originalanzeige öffnen'],
  live:['Annonser i sökresultaten','Listings in search results','Stellen in den Suchergebnissen'],
  externalTitle:['Sök hos andra jobbportaler','Search other job portals','Weitere Jobportale durchsuchen'],
  externalIntro:['De här länkarna öppnar sökningen hos respektive källa.','These links open the search on each provider’s site.','Diese Links öffnen die Suche beim jeweiligen Anbieter.'],
  noDescription:['Källan har inte skickat någon beskrivning.','The source did not provide a description.','Die Quelle hat keine Beschreibung bereitgestellt.'],
  external:['Extern jobbsökning','External job search','Externe Jobsuche'],
  same:['Jobb i ditt nuvarande land','Jobs in your current country','Jobs in deinem aktuellen Land'],
  noRights:['Landsvalet visar en sökväg. Se Your Europe för villkor om att arbeta utomlands.','Country selection shows your search route. See Your Europe for rules on working abroad.','Die Länderauswahl zeigt deine Suchroute. Informationen zur Arbeit im Ausland findest du bei Your Europe.'],
};
const eu = 'AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE'.split(' ');
const countries = [...eu, ...'AL AD AM AZ BA BY CH GB GE IS LI MC MD ME MK NO RS RU SM TR UA VA XK'.split(' ')];
const jobtechCodes = {
  BE:'21', BG:'33', CY:'43', DK:'44', FI:'59', FR:'60', GR:'71', IS:'89', MT:'130',
  NL:'147', NO:'155', PL:'167', CH:'185', ES:'193', GB:'195', SE:'199', DE:'219', AX:'246',
};
countries.push('AX');
const levels = {
  secondary:['Gymnasial','Upper secondary','Sekundarstufe II'],
  vocational:['Eftergymnasial yrkesutbildning','Post-secondary vocational','Postsekundäre Berufsausbildung'],
  university:['Högskola eller universitet','University','Hochschule oder Universität'],
};
const fields = [
  ['j7Cq_ZJe_GkT','Bygg och anläggning','Construction','Bau'],
  ['apaJ_2ja_LuF','Data/IT','IT','IT'],
  ['NYW6_mP6_vwf','Hälso- och sjukvård','Healthcare','Gesundheit'],
  ['6Hq3_tKo_V57','Teknik','Engineering','Technik'],
  ['MVqp_eS8_kDZ','Pedagogik','Education','Bildung'],
  ['ASGV_zcE_bWf','Transport och lager','Transport and warehousing','Verkehr und Lager'],
  ['wTEr_CBC_bqh','Industriell tillverkning','Manufacturing','Fertigung'],
  ['X82t_awd_Qyc','Administration, ekonomi, juridik','Administration, finance, law','Verwaltung, Finanzen, Recht'],
  ['RPTn_bxG_ExZ','Försäljning, inköp, marknadsföring','Sales, purchasing, marketing','Vertrieb, Einkauf, Marketing'],
  ['ScKy_FHB_7wT','Hotell och restaurang','Hospitality','Gastgewerbe'],
  ['yhCP_AqT_tns','Installation, drift, underhåll','Installation and maintenance','Installation und Wartung'],
  ['GazW_2TU_kJw','Yrken med social inriktning','Social services','Soziale Berufe'],
  ['bh3H_Y3h_5eD','Chefer och verksamhetsledare','Management','Management'],
  ['whao_Q6A_ScE','Sanering och renhållning','Cleaning and sanitation','Reinigung'],
  ['E7hm_BLq_fqZ','Säkerhet och bevakning','Security','Sicherheit'],
  ['9puE_nYg_crq','Kultur, media, design','Culture, media, design','Kultur, Medien, Design'],
  ['VuuL_7CH_adj','Naturbruk','Agriculture and forestry','Land- und Forstwirtschaft'],
  ['kJeN_wmw_9wX','Naturvetenskap','Natural sciences','Naturwissenschaften'],
  ['Uuf1_GMh_Uvw','Kropps- och skönhetsvård','Beauty and wellness','Körper- und Schönheitspflege'],
  ['PaxQ_o1G_wWH','Hantverk','Crafts','Handwerk'],
  ['bH5L_uXD_ZAX','Militära yrken','Military','Militär'],
];
const synonyms = [
  ['sjuksköterska','nurse','pflegekraft','krankenschwester','infirmier','enfermero'],
  ['systemutvecklare','developer','software developer','softwareentwickler','développeur','desarrollador'],
  ['elektriker','electrician','elektroniker','électricien','electricista'],
  ['snickare','carpenter','tischler','zimmerer','menuisier','carpintero'],
  ['byggarbetare','construction worker','bauarbeiter','ouvrier du bâtiment','obrero de construcción'],
  ['lärare','teacher','lehrer','enseignant','profesor'],
  ['kock','cook','chef de cuisine','koch','cuisinier','cocinero'],
  ['lastbilschaufför','truck driver','lkw fahrer','chauffeur routier','conductor de camión'],
  ['mekaniker','mechanic','mechaniker','mécanicien','mecánico'],
  ['ingenjör','engineer','ingenieur','ingénieur','ingeniero'],
  ['lagerarbetare','warehouse worker','lagermitarbeiter','magasinier','mozo de almacén'],
  ['servitör','waiter','kellner','serveur','camarero'],
];
const feeds = [
  {name:'Platsbanken', url:'https://jobsearch.api.jobtechdev.se/search', cap:2000},
  {name:'JobAd Links', url:'https://links.api.jobtechdev.se/joblinks', cap:1000},
];
const language = () => $('language').value;
const langIndex = () => ['sv','en','de'].indexOf(language());
const t = key => copy[key][langIndex()];
const displayNames = () => new Intl.DisplayNames([language()],{type:'region'});
const countryName = code => displayNames().of(code);
const countryLookup = new Map(['sv','en','de'].flatMap(lang => {
  const names = new Intl.DisplayNames([lang],{type:'region'});
  return countries.map(code => [names.of(code).toLowerCase(),code]);
}));
const jobtechLookup = new Map(Object.entries(jobtechCodes).map(([code,id]) => [id,code]));
const normalize = value => String(value ?? '').toLowerCase().normalize('NFD').replace(/\p{M}/gu,'').trim();
function queryTerms(query) {
  const match = synonyms.find(group => group.some(term => normalize(term) === normalize(query)));
  return [...new Set([...(match ? [match[0]] : []), query])];
}
function setOptions(id, items, first) {
  const select = $(id);
  const value = select.value;
  select.replaceChildren(new Option(first,''));
  items.forEach(([key,label]) => select.add(new Option(label,key)));
  select.value = items.some(([key]) => key === value) ? value : '';
}
function portals() {
  const lang = language();
  const query = $('query').value.trim();
  const params = new URLSearchParams();
  if (query) params.set('keywords',query);
  const navSearch = new URL('https://arbeidsplassen.nav.no/stillinger');
  if (query) navSearch.searchParams.set('q',query);
  if ($('destination').value) params.set('location',new Intl.DisplayNames(['en'],{type:'region'}).of($('destination').value));
  return [
    ['Platsbanken','https://arbetsformedlingen.se/platsbanken/',true],
    ['JobAd Links','https://links.api.jobtechdev.se/',true],
    ['EURES','https://europa.eu/eures/portal/jv-se/home?lang=' + lang,false],
    ['Bundesagentur für Arbeit','https://www.arbeitsagentur.de/jobsuche/',false],
    ['France Travail','https://candidat.francetravail.fr/rechercheoffre/emploi',false],
    ['NAV Arbeidsplassen',navSearch.href,false],
    ['LinkedIn Jobs','https://www.linkedin.com/jobs/search/?' + params,false],
  ];
}
function element(tag, value, className) {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (className) node.className = className;
  return node;
}
function link(name, url) {
  const node = element('a',name);
  node.href = url;
  return node;
}
function renderPortals() {
  const sources = portals();
  $('external-portals').replaceChildren(...sources.filter(([, , live]) => !live).map(([name,url]) => {
    const item = element('li');
    item.append(link(name,url));
    return item;
  }));
  $('portals').replaceChildren(...sources.map(([name,url,live]) => {
    const card = element('div',null,'portal');
    card.append(link(name,url),element('p',t(live ? 'live' : 'external')));
    return card;
  }));
}
function translate() {
  document.documentElement.lang = language();
  document.querySelectorAll('[data-t]').forEach(node => { node.textContent = t(node.dataset.t); });
  $('query').placeholder = t('placeholder');
  $('rights').href = 'https://europa.eu/youreurope/citizens/work/work-abroad/index_' + language() + '.htm';
  const options = countries.map(code => [code,countryName(code)]).sort((a,b) => a[1].localeCompare(b[1],language()));
  setOptions('origin',options,t('unspecified'));
  setOptions('destination',options,t('all'));
  setOptions('category',fields.map(([key,...labels]) => [key,labels[langIndex()]]),t('all'));
  setOptions('education',Object.entries(levels).map(([key,labels]) => [key,labels[langIndex()]]),t('all'));
  renderPortals();
  render();
}
function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch { return ''; }
}
function codeFor(address) {
  const code = String(address.country_code ?? '').toUpperCase();
  if (countries.includes(code)) return code;
  return jobtechLookup.get(code) ?? countryLookup.get(String(address.country ?? '').toLowerCase()) ?? '';
}
function normalizeJob(raw, feed) {
  const url = safeUrl(raw.webpage_url) || (raw.source_links ?? []).map(item => safeUrl(item.url)).find(Boolean);
  if (!url || !raw.headline || raw.removed) return null;
  const addresses = Array.isArray(raw.workplace_addresses) && raw.workplace_addresses.length
    ? raw.workplace_addresses : [raw.workplace_address ?? {}];
  const labels = list => (list ?? []).map(item => item.label).filter(Boolean);
  const requirements = raw.must_have ?? {};
  const salary = raw.salary_description ?? '';
  const description = raw.description?.text?.trim() || raw.brief?.trim() || '';
  return {
    url, source:feed.name, title:raw.headline, employer:raw.employer?.name ?? '',
    category:raw.occupation_field?.label ?? '', description, salary,
    addresses:addresses.map(address => ({code:codeFor(address), place:address.city || address.municipality || address.region || address.country || ''})),
    education:labels(requirements.education), level:labels(requirements.education_level),
    licences:[
      ...(raw.driving_license_required ? labels(raw.driving_license).map(item => 'Körkort ' + item) : []),
      ...labels(requirements.skills).filter(item => /certifikat|certifier|behörighet|legitimation|licens|truckkort|yrkeskompetensbevis|auktorisation/i.test(item)),
    ],
  };
}
function monthlySek(text) {
  const amount = text.match(/(?:^|[^\d–—-])(\d{2,3}[ \u00a0\u202f]\d{3}|\d{4,6})(?:\s*[–—-]\s*(?:\d{2,3}[ \u00a0\u202f]\d{3}|\d{4,6}))?\s*(?:SEK|kr)\s*(?:\/\s*(?:mån(?:ad)?\b|month\b)|per\s+(?:månad|month)\b)/i);
  return amount ? Number(amount[1].replace(/\s/g,'')) : null;
}
function educationLevel(values, level) {
  const patterns = {secondary:/gymnas|secondary/,vocational:/yrkeshogskol|yrkesutbildning|vocational/,university:/hogskol|universitet|kandidat|bachelor|master|doctoral/};
  return values.some(value => {
    const normalized = normalize(value);
    if (/^eftergymnas/.test(normalized)) {
      return level !== 'secondary' && !/yrkeshogskol/.test(normalized)
        ? patterns[level].test(normalized) : level === 'vocational' && patterns.vocational.test(normalized);
    }
    return patterns[level].test(normalized);
  });
}
const pageSize = 30;
let searchId = 0;
let controller;
let jobs = new Map();
let queries = [];
let loading = false;
let invalidRegion = false;
const destination = () => $('destination').value;
function matches(job) {
  const country = destination();
  const onlyEU = $('eu').checked;
  if (!job.addresses.some(address => (!country || address.code === country)
    && (!onlyEU || eu.includes(address.code) || address.code === 'AX')
    && (address.code || (!address.place && !onlyEU && !country)))) return false;
  const education = $('education').value;
  const training = normalize($('training').value);
  const certificate = normalize($('certificate').value);
  const salary = $('salary').valueAsNumber;
  const monthly = monthlySek(job.salary);
  return (!education || educationLevel(job.level,education))
    && (!training || normalize(job.education.join(' ')).includes(training))
    && (!certificate || normalize(job.licences.join(' ')).includes(certificate))
    && (!Number.isFinite(salary) || (monthly !== null && monthly >= salary));
}
function card(job) {
  const article = element('article');
  const title = element('h3');
  title.append(link(job.title,job.url));
  const places = job.addresses.map(({code,place}) => {
    const country = code ? countryName(code) : '';
    return [place,country].filter((value,index,items) => value && items.indexOf(value) === index).join(', ');
  }).filter(Boolean);
  const meta = [job.employer,[...new Set(places)].join(' / '),job.category].filter(Boolean).join(' · ');
  const details = element('details');
  details.append(element('summary',t('details')));
  const requirements = element('ul');
  for (const [label,value] of [
    ['education',job.level.join(', ')],['training',job.education.join(', ')],
    ['cert',job.licences.join(', ')],['salary',job.salary],
  ]) {
    requirements.append(element('li',t(label) + ' — ' + (value || t('unknown'))));
  }
  details.append(requirements);
  const compactDescription = job.description.replace(/\s+/g,' ');
  const maxLength = 360;
  const excerpt = compactDescription.length > maxLength
    ? compactDescription.slice(0,maxLength + 1).replace(/\s+\S*$/,'').slice(0,maxLength) + '…'
    : compactDescription;
  if (excerpt !== compactDescription) details.append(element('p',job.description,'description'));
  article.append(
    element('span',job.source,'tag'),title,element('p',meta,'meta'),
    element('p',excerpt || t('noDescription'),'job-excerpt'),
    details,link(t('original'),job.url),
  );
  return article;
}
function render() {
  const origin = $('origin').value;
  const country = destination();
  $('route').textContent = origin && country
    ? (origin === country ? t('same') : countryName(origin) + ' → ' + countryName(country) + '. ' + t('noRights'))
    : '';
  const visible = [...jobs.values()].filter(matches);
  $('cards').replaceChildren(...visible.map(card));
  const failed = [...new Set(queries.filter(query => query.failed).map(query => query.feed.name))];
  const pending = queries.some(query => !query.done || query.failed);
  const status = [visible.length ? visible.length + ' ' + t('found') + '.' : t('empty')];
  if (invalidRegion) status.splice(0,1,t('outside'));
  if (loading) status.splice(0,1,t('loading'));
  if (failed.length) status.push(t('unavailable') + ' ' + failed.join(', ') + '.');
  if (!loading && !invalidRegion && !visible.length && !failed.length) status.push(t('partial'));
  if ($('education').value || $('training').value || $('certificate').value || $('salary').value) status.push(t('filtersNote'));
  $('status').textContent = status.join(' ');
  $('more').hidden = !pending;
  $('more').disabled = loading;
}
async function loadPage() {
  const id = searchId;
  loading = true;
  render();
  await Promise.all(queries.filter(query => !query.done || query.failed).map(async query => {
    const {feed,term,offset} = query;
    const params = new URLSearchParams({limit:String(pageSize),offset:String(offset)});
    if (term) params.set('q',term);
    if (query.category) params.set('occupation-field',query.category);
    if (query.country) params.set('country',query.country);
    if (query.abroad) params.set('abroad','true');
    if (feed === feeds[0] && !term) params.set('sort','pubdate-desc');
    try {
      const signal = AbortSignal.any([controller.signal,AbortSignal.timeout(12000)]);
      const response = await fetch(feed.url + '?' + params,{signal});
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const result = await response.json();
      if (id !== searchId) return;
      if (!Array.isArray(result.hits)) throw new Error('Invalid result');
      query.failed = false;
      query.offset += result.hits.length;
      query.done = result.hits.length < pageSize || query.offset >= Math.min(result.total?.value ?? result.total ?? Infinity,feed.cap);
      for (const raw of result.hits) {
        const job = normalizeJob(raw,feed);
        if (job && (!jobs.has(job.url) || feed === feeds[0])) jobs.set(job.url,job);
      }
    } catch {
      if (id === searchId) query.failed = true;
    }
  }));
  if (id !== searchId) return;
  loading = false;
  render();
}
function search() {
  controller?.abort();
  controller = new AbortController();
  searchId++;
  jobs = new Map();
  queries = [];
  const country = destination();
  const category = $('category').value;
  invalidRegion = Boolean(country && $('eu').checked && !eu.includes(country) && country !== 'AX');
  renderPortals();
  if (invalidRegion) {
    loading = false;
    render();
    return;
  }
  for (const feed of feeds) {
    if (feed === feeds[1] && country && country !== 'SE') continue;
    for (const term of queryTerms($('query').value.trim())) {
      const base = {feed,term,category,offset:0,done:false,failed:false};
      if (feed === feeds[1]) {
        queries.push({...base,country:country ? 'i46j_HmG_v64' : ''});
      } else if (country && jobtechCodes[country]) {
        queries.push({...base,country:jobtechCodes[country]});
      } else {
        if (!country) queries.push({...base,country:jobtechCodes.SE});
        queries.push({...base,abroad:true});
      }
    }
  }
  loadPage();
}
$('search').addEventListener('submit',event => { event.preventDefault(); search(); });
$('filters').addEventListener('submit',event => { event.preventDefault(); render(); });
for (const id of ['destination','category','eu']) $(id).addEventListener('change',search);
for (const id of ['origin','education','training','certificate','salary']) $(id).addEventListener('change',render);
$('clear').addEventListener('click',() => { $('filters').reset(); $('search').reset(); search(); });
$('language').addEventListener('change',translate);
$('more').addEventListener('click',loadPage);
translate();
search();

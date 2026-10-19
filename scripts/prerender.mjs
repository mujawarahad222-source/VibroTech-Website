import { createServer } from 'vite'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

const SITE = 'https://vibrotechbalancing.com'
const NAME = 'VibroTech Balancing'
const DIST = 'dist'
const LOGO = SITE + '/vibrotech-logo.jpg'
const BIZ_ID = SITE + '/#business'
const EMAIL = 'vibrotechbalancing@gmail.com'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const decode = (s) => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
const stripTags = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
const clip = (s, max) => {
  if (s.length <= max) return s
  const cut = s.slice(0, max - 3)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '...'
}
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase())

let lastmod = new Date().toISOString().slice(0, 10)
try {
  lastmod = execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim() || lastmod
} catch {
  /* keep today's date */
}

const routerSrc = readFileSync('src/AppRouter.jsx', 'utf8')
const routes = [...new Set([...routerSrc.matchAll(/path="([^"]+)"/g)].map((m) => m[1]))]
const base = readFileSync(join(DIST, 'index.html'), 'utf8')

const areaServed = [
  { '@type': 'City', name: 'Navi Mumbai' },
  { '@type': 'City', name: 'Mumbai' },
  { '@type': 'City', name: 'Thane' },
  { '@type': 'City', name: 'Pune' },
  { '@type': 'State', name: 'Maharashtra' },
  { '@type': 'Country', name: 'India' },
]

const business = {
  '@type': 'LocalBusiness',
  '@id': BIZ_ID,
  name: 'VIBROTECH BALANCING',
  alternateName: NAME,
  url: SITE + '/',
  logo: LOGO,
  image: LOGO,
  email: EMAIL,
  telephone: '+91-8454987213',
  description:
    'Industrial dynamic balancing, vibration analysis, laser shaft alignment, condition monitoring and rotating-equipment engineering services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R-269, T.T.C Industrial Area, Rabale',
    addressLocality: 'Navi Mumbai',
    postalCode: '400701',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: [
    { '@type': 'ContactPoint', name: 'Abdul Ahad', telephone: '+91-8454987213', contactType: 'customer service', email: EMAIL },
    { '@type': 'ContactPoint', name: 'Abdul Ahad', telephone: '+91-9867427537', contactType: 'customer service', email: EMAIL },
    { '@type': 'ContactPoint', name: 'Abdus Samad', telephone: '+91-7710967549', contactType: 'customer service', email: EMAIL },
  ],
  areaServed,
  knowsAbout: [
    'Dynamic Balancing', 'Rotor Balancing', 'Motor Rotor Balancing', 'Vibration Analysis', 'Laser Shaft Alignment',
    'Condition Monitoring', 'Marine Propeller Balancing', 'Turbine Rotor Balancing', 'Fan Balancing',
    'Blower Balancing', 'Pump Balancing', 'Compressor Balancing', 'Industrial Rotating Equipment',
  ],
}

const website = {
  '@type': 'WebSite',
  '@id': SITE + '/#website',
  url: SITE + '/',
  name: NAME,
  inLanguage: 'en-IN',
  publisher: { '@id': BIZ_ID },
}

const STRIP_META = /<meta\s+(?:name|property)="(?:keywords|description|og:title|og:description|twitter:title|twitter:description)"[\s\S]*?\/>\s*/g
const STRIP_TITLE = /<title>[\s\S]*?<\/title>\s*/
const STRIP_LD = /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g

function buildPage({ title, desc, url, schemas, html }) {
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas }).replace(/</g, '\\u003c')
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${LOGO}" />`,
    `<meta property="og:image:alt" content="VibroTech Balancing logo" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${LOGO}" />`,
    `<script type="application/ld+json">${ld}</script>`,
  ].map((l) => '    ' + l).join('\n') + '\n'

  return base
    .replace(STRIP_META, '')
    .replace(STRIP_TITLE, '')
    .replace(STRIP_LD, '')
    .replace('</head>', () => head + '  </head>')
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
}

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
let AppRouter = null
try {
  AppRouter = (await vite.ssrLoadModule('/src/AppRouter.jsx')).default
} catch (e) {
  console.warn('[prerender] Could not load the app for server rendering; writing head-only pages. Reason:', e.message)
}

const pages = []
let withBody = 0

for (const route of routes) {
  let html = ''
  if (AppRouter) {
    try {
      html = renderToString(createElement(MemoryRouter, { initialEntries: [route] }, createElement(AppRouter)))
    } catch (e) {
      console.warn(`[prerender] ${route}: body render failed (${e.message})`)
    }
  }
  if (html) withBody++

  const url = SITE + route
  const slugName = titleCase((route.split('/').filter(Boolean).pop() || '').replace(/-/g, ' '))
  let title, desc, schemas, heading

  if (route === '/') {
    heading = NAME
    title = 'Dynamic Balancing in Navi Mumbai | VibroTech Balancing'
    desc = 'Industrial dynamic balancing, vibration analysis, laser shaft alignment and condition monitoring from Navi Mumbai. Call or send your enquiry today.'
    schemas = [business, website]
  } else {
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]
    const intro = (html.match(/class="seo-hero"[\s\S]*?<p>([\s\S]*?)<\/p>/) || [])[1]
    heading = h1 ? stripTags(h1) : slugName
    title = /vibrotech/i.test(heading) ? heading : `${heading} | ${NAME}`
    if (title.length > 60) title = `${heading} | VibroTech`
    if (title.length > 60) title = heading
    const fullIntro = intro ? stripTags(intro) : `${heading} from ${NAME}, Navi Mumbai.`
    desc = clip(fullIntro, 155)
    schemas = [
      business,
      website,
      {
        '@type': 'Service',
        '@id': url + '#service',
        name: heading,
        description: fullIntro,
        url,
        provider: { '@id': BIZ_ID },
        areaServed,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: heading, item: url },
        ],
      },
    ]
  }

  if (route === '/contact/') {
    schemas = [
      business,
      website,
      { '@type': 'ContactPage', '@id': url + '#contactpage', name: heading, url, about: { '@id': BIZ_ID } },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: url },
        ],
      },
    ]
  }
  const dir = route === '/' ? DIST : join(DIST, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), buildPage({ title, desc, url, schemas, html }))
  pages.push({ route, url, heading, desc })
}

await vite.close()

// 404 page: never indexed
writeFileSync(
  join(DIST, '404.html'),
  base
    .replace(STRIP_TITLE, '<title>Page not found | VibroTech Balancing</title>\n')
    .replace(/<meta name="robots"[\s\S]*?\/>/, '<meta name="robots" content="noindex, follow" />')
    .replace(STRIP_LD, ''),
)

// sitemap.xml with real lastmod (date of the latest commit)
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map((p) => `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n') +
  '\n</urlset>\n'
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)

// llms.txt for AI assistants
const groups = [
  ['services', 'Services'],
  ['balancing-solutions', 'Balancing Solutions'],
  ['industries', 'Industries Served'],
  ['locations', 'Service Locations'],
]
let llms = `# VibroTech Balancing

> Industrial dynamic balancing, vibration analysis, laser shaft alignment, condition monitoring and rotating-equipment engineering services, based in Rabale, Navi Mumbai, Maharashtra, India. Serves Navi Mumbai, Mumbai, Thane, Pune and industrial customers across Maharashtra.

## Contact
- Address: R-269, T.T.C Industrial Area, Rabale, Navi Mumbai 400701, Maharashtra, India
- Phone: +91 84549 87213, +91 98674 27537, +91 77109 67549
- Email: ${EMAIL}
- Website: ${SITE}/
`
for (const [seg, label] of groups) {
  const items = pages.filter((p) => p.route.split('/')[1] === seg)
  if (!items.length) continue
  llms += `\n## ${label}\n` + items.map((p) => `- [${p.heading}](${p.url}): ${p.desc}`).join('\n') + '\n'
}
writeFileSync(join(DIST, 'llms.txt'), llms)

console.log(`[prerender] ${pages.length} pages written (${withBody} with server-rendered body). lastmod=${lastmod}`)
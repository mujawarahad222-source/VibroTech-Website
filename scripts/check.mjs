import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : [] })
let bad = 0, pages = 0
for (const f of walk('dist')) {
  const h = readFileSync(f, 'utf8'); pages++
  const t = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ''
  const real = t.replace(/&amp;/g, '&')
  const m = h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  let ok = true
  try { JSON.parse(m[1]) } catch { ok = false }
  const issues = []
  if (!ok) issues.push('JSON-LD invalid')
  if (real.length > 60) issues.push('title ' + real.length + ' chars')
  if (/\u00e2\u0086|\u00c3|\u00ef\u00bf\u00bd/.test(h)) issues.push('mojibake')
  if (!/rel="canonical"/.test(h)) issues.push('no canonical')
  if ((h.match(/<h1/g) || []).length !== 1) issues.push('H1 count != 1')
  if (issues.length) { bad++; console.log('PROBLEM', f, issues.join(', ')) }
}
console.log(`Checked ${pages} pages, ${bad} with problems`)
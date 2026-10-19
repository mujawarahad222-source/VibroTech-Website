import { Link, useLocation } from 'react-router-dom'
import FAQ from '../faqData'

export default function SEOPage({
  eyebrow,
  title,
  intro,
  sections = [],
  related = [],
}) {
  const { pathname } = useLocation()
  const faqs = FAQ[pathname] || []
  const faqSchema = faqs.length ? JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }).replace(/</g, '\\u003c') : ''

  return (
    <main className="seo-page">
      <div className="seo-page-inner">
        <Link to="/" className="seo-back">
          ← VIBROTECH BALANCING
        </Link>

        <header className="seo-hero">
          <span className="seo-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>

        <div className="seo-content">
          {sections.map((section) => (
            <section className="seo-section" key={section.heading}>
              <h2>{section.heading}</h2>

              {section.text && <p>{section.text}</p>}

              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {faqs.length > 0 && (
          <section className="seo-section seo-faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((x) => (
              <div key={x.q}>
                <h3>{x.q}</h3>
                <p>{x.a}</p>
              </div>
            ))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
          </section>
        )}

        {related.length > 0 && (
          <section className="seo-related">
            <h2>Related VibroTech Services</h2>

            <div className="seo-related-grid">
              {related.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.title}
                  <span>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="seo-cta">
          <span>VIBROTECH BALANCING</span>
          <h2>Need rotating-equipment engineering support?</h2>
          <p>
            Speak with VibroTech Balancing for industrial balancing,
            vibration analysis and rotating-equipment services.
          </p>

          <Link to="/#contact" className="seo-cta-button">
            CONTACT VIBROTECH
          </Link>
        </section>
      </div>
    </main>
  )
}

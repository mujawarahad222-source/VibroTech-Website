import { Link } from 'react-router-dom'

export default function SEOPage({
  eyebrow,
  title,
  intro,
  sections = [],
  related = [],
}) {
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

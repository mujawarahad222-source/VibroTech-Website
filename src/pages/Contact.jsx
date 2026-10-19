import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="seo-page">
      <div className="seo-page-inner">
        <Link to="/" className="seo-back">&larr; VIBROTECH BALANCING</Link>

        <header className="seo-hero">
          <span className="seo-eyebrow">CONTACT</span>
          <h1>Contact VibroTech Balancing</h1>
          <p>Call, email or send your requirement for dynamic balancing, vibration analysis, laser shaft alignment and rotating-equipment services in Navi Mumbai and across Maharashtra.</p>
        </header>

        <div className="seo-content">
          <section className="seo-section contact-page-block">
            <h2>Call Us</h2>
            <ul className="contact-page-list">
              <li>Abdul Ahad: <a href="tel:+918454987213">+91 84549 87213</a></li>
              <li>Abdul Ahad: <a href="tel:+919867427537">+91 98674 27537</a></li>
              <li>Abdus Samad: <a href="tel:+917710967549">+91 77109 67549</a></li>
            </ul>
          </section>

          <section className="seo-section contact-page-block">
            <h2>Email</h2>
            <p><a href="mailto:vibrotechbalancing@gmail.com">vibrotechbalancing@gmail.com</a></p>
          </section>

          <section className="seo-section contact-page-block">
            <h2>Visit Us</h2>
            <p>VIBROTECH BALANCING<br />R-269, T.T.C Industrial Area, Rabale<br />Navi Mumbai 400701, Maharashtra, India</p>
            <p><a href="https://www.google.com/maps/search/?api=1&query=R-269+T.T.C+Industrial+Area+Rabale+Navi+Mumbai+400701" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
          </section>

          <section className="seo-section contact-page-block">
            <h2>Send Your Requirement</h2>
            <p>Tell us the equipment type, approximate weight and operating speed, and what problem you are seeing.</p>
            <form className="contact-page-form" action="https://formsubmit.co/vibrotechbalancing@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New enquiry from vibrotechbalancing.com contact page" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <label htmlFor="cp-name">Name</label>
              <input id="cp-name" name="name" type="text" autoComplete="name" required />
              <label htmlFor="cp-phone">Phone</label>
              <input id="cp-phone" name="phone" type="tel" autoComplete="tel" />
              <label htmlFor="cp-email">Email</label>
              <input id="cp-email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="cp-msg">Your requirement</label>
              <textarea id="cp-msg" name="message" rows="5" required></textarea>
              <button type="submit" className="seo-cta-button">SEND ENQUIRY</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
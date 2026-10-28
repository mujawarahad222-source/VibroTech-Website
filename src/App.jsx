import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity, BarChart3, Gauge, Menu, MoveRight, Settings2, Thermometer, Waves, X
} from 'lucide-react'
import RealisticMotor from './RealisticMotor'
import './App.css'



const servicePaths = {
  "Vibration Analysis": "/services/vibration-analysis/",
  "Dynamic Balancing": "/services/dynamic-balancing/",
  "Laser Shaft Alignment": "/services/laser-shaft-alignment/",
  "Condition Monitoring": "/services/condition-monitoring/",
  "Thermography": "/services/thermography/",
  "Heavy Machining & Shaft Grinding": "/services/heavy-machining/",
}

const services = [
  { title:'Vibration Analysis', text:'Machine vibration measurement, spectrum review and engineering interpretation.', icon:Activity },
  { title:'Dynamic Balancing', text:'Single-plane and two-plane balancing for rotating equipment.', icon:Gauge },
  { title:'Laser Shaft Alignment', text:'Precision shaft and coupling alignment for rotating machinery.', icon:MoveRight },
  { title:'Condition Monitoring', text:'Trend machine measurements over time to make changes visible.', icon:BarChart3 },
  { title:'Thermography', text:'Infrared inspection for electrical and mechanical temperature anomalies.', icon:Thermometer },
  { title:'Heavy Machining & Shaft Grinding', text:'Heavy engineering support for shafts, rotors and machine components.', icon:Settings2 },
]

function App() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    let active = true;
    const BASE = 'https://abacus.jasoncameron.dev';
    const NS = 'vibrotechbalancing-site-7k2';
    const KEY = 'unique-visitors';
    const START_OFFSET = 0;
    let seen = false;
    try { seen = localStorage.getItem('vt-counted') === '1'; } catch (e) {}
    fetch(`${BASE}/${seen ? 'get' : 'hit'}/${NS}/${KEY}`)
      .then(response => response.json())
      .then(data => {
        if (active && data && typeof data.value !== 'undefined') {
          setVisitorCount(data.value + START_OFFSET);
          if (!seen) { try { localStorage.setItem('vt-counted', '1'); } catch (e) {} }
        }
      })
      .catch(() => {
        if (active) setVisitorCount(null);
      });
    return () => {
      active = false;
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)

  
  useEffect(() => {
    /* vt-hash-scroll */
    const id = window.location.hash.slice(1)
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }), 150)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setMobileMenu(false)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="VibroTech Balancing home">
          <img src="/vibrotech-logo.jpg" alt="VibroTech Balancing" />
          <span>VIBROTECH BALANCING</span>
        </button>

        <nav className={mobileMenu ? 'nav open' : 'nav'}>
          <button onClick={() => window.location.assign('/about/')}>ABOUT US</button>
          <button onClick={() => scrollTo('why-vibrotech')}>WHY VIBROTECH</button>
          <button onClick={() => window.location.assign('/rent-before-you-buy/')}>RENT BEFORE YOU BUY</button>
          <button onClick={() => scrollTo('services')}>SERVICES</button>
          <button onClick={() => scrollTo('industries')}>INDUSTRIES WE SERVE</button>
          <button onClick={() => scrollTo('contact')}>CONTACT</button>
        </nav>

        <button className="menu-btn" onClick={() => setMobileMenu(v => !v)}>
          {mobileMenu ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <video
            className="hero-propeller-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/turbine-rotor.mp4" type="video/mp4"/>
          </video>
          <div className="hero-propeller-overlay"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"/> INDUSTRIAL MACHINE INTELLIGENCE</div>
            <h1>Every Machine<br/><em>Speaks.</em> We Listen.</h1>
            <p className="hero-lead">
              Vibration analysis, dynamic balancing, alignment and condition monitoring
              for critical rotating machinery — with a strong focus on motors and rotating machinery.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('contact')}>CONTACT US <MoveRight size={18}/></button>
              <button className="secondary-btn" onClick={() => scrollTo('services')}>EXPLORE SERVICES</button>
            </div>

          </div>


        </section>

        

<section id="services" className="section services-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker"><Waves size={15}/> ENGINEERING SERVICES</span>
              <h2>Precision Engineering for All Rotating Equipment</h2>
              <p>Engineering services centered around rotating equipment and critical machinery.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map(({title,text,icon:Icon}) => (
              <Link to={servicePaths[title]} className={`service-card ${title === 'Vibration Analysis' ? 'vibration-analysis-card' : ''} ${title === 'Dynamic Balancing' ? 'dynamic-balancing-card' : ''} ${title === 'Condition Monitoring' ? 'condition-monitoring-card' : ''} ${title === 'Thermography' ? 'thermography-card' : ''} ${title === 'Heavy Machining & Shaft Grinding' ? 'shaft-grinding-card' : ''} ${title === 'Laser Shaft Alignment' ? 'laser-alignment-card' : ''}`} key={title}>
                {title === 'Vibration Analysis' && (
                  <div className="service-spectrum" aria-hidden="true">
                    <div className="spectrum-grid"></div>
                    <div className="spectrum-bars">
                      {[18,32,24,48,36,72,42,28,55,38,86,46,30,62,40,24,52,34,68,44,26,58,35,76,42,30,54,38].map((height, i) => (
                        <i
                          key={i}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.07}s`
                          }}
                        />
                      ))}
                    </div>
                    <div className="spectrum-line">
                      <span></span><span></span><span></span><span></span><span></span>
                      <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div className="spectrum-label">LIVE FFT • 1X • 2X • HARMONICS</div>
                  </div>
                )}

                {title === 'Dynamic Balancing' && (
                  <div className="dynamic-balancing-video" aria-hidden="true">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src="/videos/turbine-rotor.mp4" type="video/mp4"/>
                    </video>
                    <div className="dynamic-balancing-overlay"></div>
                  </div>
                )}

                {title === 'Condition Monitoring' && (
                  <div className="condition-waveform" aria-hidden="true">
                    <div className="wave-grid"></div>

                    <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                      <path
                        className="waveform-path waveform-path-back"
                        d="M0 92
                        C20 88 25 94 40 90
                        C55 86 58 98 72 91
                        C88 82 94 98 108 89
                        C125 78 130 102 146 91
                        C162 80 168 100 184 88
                        C202 72 210 104 226 90
                        C242 75 250 99 266 91
                        C284 80 290 100 306 89
                        C324 65 330 108 348 91
                        C365 74 372 101 388 88
                        C405 78 414 100 430 90
                        C448 70 455 108 472 91
                        C488 79 496 99 512 89
                        C530 73 540 103 556 91
                        C572 84 582 94 600 89"
                      />
                      <path
                        className="waveform-path waveform-path-main"
                        d="M0 92
                        C15 88 22 96 36 91
                        C50 86 58 94 70 90
                        C84 84 90 98 104 91
                        C118 84 125 96 138 89
                        C153 78 160 103 174 91
                        C188 80 195 99 208 90
                        C222 80 230 101 244 89
                        C258 76 266 104 280 91
                        C294 82 302 98 316 89
                        C330 76 338 103 352 90
                        C366 80 374 98 388 88
                        C402 76 410 104 424 91
                        C438 82 446 98 460 89
                        C474 77 482 102 496 90
                        C510 81 518 99 532 89
                        C548 78 556 102 570 91
                        C584 85 592 95 600 89"
                      />
                    </svg>

                    <div className="waveform-axis">
                      <span>0</span>
                      <span>TIME</span>
                      <span>10 ms</span>
                    </div>

                    <div className="waveform-live">
                      <i></i> LIVE WAVEFORM
                    </div>
                  </div>
                )}

                {title === 'Thermography' && (
                  <div className="thermography-animation" aria-hidden="true">
                    <div className="thermal-grid"></div>

                    <div className="thermal-body">
                      <span className="thermal-hotspot hotspot-one"></span>
                      <span className="thermal-hotspot hotspot-two"></span>
                      <span className="thermal-hotspot hotspot-three"></span>
                      <span className="thermal-hotspot hotspot-four"></span>
                      <span className="thermal-hotspot hotspot-five"></span>
                    </div>

                    <div className="thermal-scan-line"></div>

                    <div className="thermal-scale">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="thermal-label">
                      <i></i> LIVE THERMAL
                    </div>
                  </div>
                )}

                {title === 'Heavy Machining & Shaft Grinding' && (
                  <div className="shaft-grinding-animation" aria-hidden="true">

                    <div className="grinding-machine-bed"></div>

                    <div className="grinding-shaft">
                      <span></span>
                    </div>

                    <div className="grinding-wheel">
                      <div className="grinding-wheel-inner"></div>
                    </div>

                    <div className="grinding-contact"></div>

                    <div className="grinding-sparks">
                      <i></i><i></i><i></i><i></i><i></i>
                      <i></i><i></i><i></i><i></i><i></i>
                      <i></i><i></i><i></i><i></i><i></i>
                    </div>

                    <div className="grinding-label">
                      <i></i> SHAFT GRINDING • PRECISION MACHINING
                    </div>

                  </div>
                )}

                {title === 'Laser Shaft Alignment' && (
                  <div className="laser-alignment-animation" aria-hidden="true">

                    <div className="alignment-machine-left">
                      <div className="machine-base"></div>
                      <div className="machine-body"></div>
                      <div className="shaft-coupling"></div>
                    </div>

                    <div className="alignment-machine-right">
                      <div className="machine-base"></div>
                      <div className="machine-body"></div>
                      <div className="shaft-coupling"></div>
                    </div>

                    <div className="alignment-shaft"></div>

                    <div className="laser-beam">
                      <span></span>
                    </div>

                    <div className="laser-target">
                      <span></span>
                    </div>

                    <div className="alignment-measurement">
                      <span>0.02</span>
                      <small>mm</small>
                    </div>

                    <div className="alignment-label">
                      <i></i> LASER ALIGNMENT • LIVE MEASUREMENT
                    </div>

                  </div>
                )}

                <div className="service-card-content">
                  <div className="service-icon"><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span>ENGINEERING SERVICE <MoveRight size={15}/></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        

        <section id="why-vibrotech" className="section why-vibrotech-section">
          <div className="section-inner why-vibrotech-inner">
            <div className="section-heading section-heading-stacked">
              <span className="section-kicker">WHY VIBROTECH</span>
              <h2>Built For <span>Precision.</span></h2>
              <p>Industrial balancing capability backed by practical engineering support from Navi Mumbai.</p>
            </div>
            <div className="why-vibrotech-grid">
              <div className="why-vibrotech-card"><strong>20 TON</strong><span>Job weight capacity</span></div>
              <div className="why-vibrotech-card"><strong>5 METER</strong><span>Maximum OD</span></div>
              <div className="why-vibrotech-card"><strong>15 METER</strong><span>Maximum job length</span></div>
              <div className="why-vibrotech-card"><strong>3000 RPM</strong><span>Balancing capability</span></div>
              <div className="why-vibrotech-card"><strong>NAVI MUMBAI</strong><span>Strategic Navi Mumbai location</span></div>
              <div className="why-vibrotech-card accuracy-card"><strong>EXCELLENT ACCURACY</strong><span>Precision-focused balancing</span></div>
            </div>
          </div>
        </section>

        <section id="industries" className="section industries-section">
          <div className="section-inner industries-inner">
            <div className="section-heading section-heading-stacked">
              <span className="section-kicker">INDUSTRIES WE SERVE</span>
              <h2>Engineering Support Across <span>Critical Industries.</span></h2>
              <p>Balancing, vibration and rotating-equipment services for demanding industrial environments.</p>
            </div>
            <div className="industries-grid">
              <Link to="/industries/marine/" className="industry-card"><video className="industry-video" src="/videos/MARINE.mp4" muted loop playsInline preload="none" /><span>01</span><strong>MARINE</strong></Link>
              <Link to="/industries/power-plants/" className="industry-card"><video className="industry-video" src="/videos/POWER%20PLANTS.mp4" muted loop playsInline preload="none" /><span>02</span><strong>POWER PLANTS</strong></Link>
              <Link to="/industries/oil-gas/" className="industry-card"><video className="industry-video" src="/videos/OIL%20%26%20GAS.mp4" muted loop playsInline preload="none" /><span>03</span><strong>OIL &amp; GAS</strong></Link>
              <Link to="/industries/petrochemical/" className="industry-card"><video className="industry-video" src="/videos/PETROCHEMICAL.mp4" muted loop playsInline preload="none" /><span>04</span><strong>PETROCHEMICAL</strong></Link>
              <Link to="/industries/naval-defence/" className="industry-card"><video className="industry-video" src="/videos/NAVY.mp4" muted loop playsInline preload="none" /><span>05</span><strong>NAVY</strong></Link>
              <Link to="/industries/naval-defence/" className="industry-card"><video className="industry-video" src="/videos/COAST%20GUARD.mp4" muted loop playsInline preload="none" /><span>06</span><strong>COAST GUARD</strong></Link>
              <Link to="/industries/manufacturing/" className="industry-card"><video className="industry-video" src="/videos/MANUFACTURERS.mp4" muted loop playsInline preload="none" /><span>07</span><strong>MANUFACTURERS</strong></Link>
              <Link to="/industries/steel-plants/" className="industry-card"><video className="industry-video" src="/videos/STEEL%20PLANTS.mp4" muted loop playsInline preload="none" /><span>08</span><strong>STEEL PLANTS</strong></Link>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">

          <div className="contact-background" aria-hidden="true">

            <div className="contact-grid-pattern"></div>

            <div className="contact-turbine">

              <div className="turbine-outer-ring"></div>
              <div className="turbine-outer-ring turbine-outer-ring-two"></div>

              <div className="turbine-blades">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="turbine-hub">
                <span></span>
              </div>

            </div>

            <div className="contact-background-word">VIBROTECH</div>

          </div>

          <div className="contact-content">

            <div className="contact-heading">
              <span className="section-kicker">VIBROTECH BALANCING • ENGINEERING SUPPORT</span>

              <h2>
                Precision Begins With
                <span> The Right Conversation.</span>
              </h2>

              <p>
                Connect with our engineering team for dynamic balancing,
                vibration analysis, laser shaft alignment, condition monitoring,
                thermography, heavy machining and shaft grinding services.
              </p>
            </div>

            <div className="contact-details-grid">

              <div className="contact-detail-card contact-primary-card">
                <span className="contact-detail-label">ENGINEERING CONTACT</span>
                <h3>ABDUL AHAD</h3>

                <div className="contact-phone-number">
                  <a href="tel:8454987213">8454987213</a>
                  <a href="tel:9867427537">9867427537</a>
                </div>

                <div className="contact-card-line"></div>
                <small>DIRECT CONTACT</small>
              </div>

              <div className="contact-detail-card">
                <span className="contact-detail-label">ENGINEERING CONTACT</span>
                <h3>ABDUS SAMAD</h3>

                <div className="contact-phone-number">
                  <a href="tel:7710967549">7710967549</a>
                </div>

                <div className="contact-card-line"></div>
                <small>DIRECT ENGINEERING CONTACT</small>
              </div>

              <div className="contact-detail-card contact-email-card">
                <span className="contact-detail-label">EMAIL</span>
                <h3>EMAIL</h3>

                <a href="mailto:vibrotechbalancing@gmail.com">
                  vibrotechbalancing@gmail.com
                </a>

                <div className="contact-card-line"></div>
                <small>BUSINESS &amp; TECHNICAL ENQUIRIES</small>
              </div>

              <div className="contact-detail-card contact-address-card">
                <span className="contact-detail-label">WORKSHOP ADDRESS</span>
                <h3>VIBROTECH BALANCING</h3>
                <p>R-269, T.T.C INDUSTRIAL AREA</p>
                <p>RABALE, NAVI MUMBAI 400701</p>

                <div className="contact-card-line"></div>
                <small>NAVI MUMBAI • MAHARASHTRA</small>
              </div>

              <div className="contact-detail-card contact-gst-card">
                <span className="contact-detail-label">GST</span>
                <h3>GST NUMBER</h3>
                <p>27CXVPM5902P1ZH</p>

                <div className="contact-card-line"></div>
                <small>REGISTERED BUSINESS DETAILS</small>
              </div>

            </div>

            <div className="contact-actions">
              <a className="primary-btn" href="mailto:vibrotechbalancing@gmail.com">
                EMAIL ENGINEERING <MoveRight size={18}/>
              </a>

              <a className="secondary-btn" href="tel:8454987213">
                CALL ABDUL AHAD <MoveRight size={18}/>
              </a>
          <a className="secondary-btn whatsapp-btn" href="https://wa.me/918454987213?text=Hello%20VibroTech%20Balancing%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer">CHAT ON WHATSAPP <MoveRight size={18}/></a>
            </div>

            <div className="inquiry-form-wrap">
  <div className="inquiry-form-heading">
    <span className="section-kicker">ENGINEERING ENQUIRY</span>
    <h3>Tell Us About Your Requirement</h3>
    <p>Share your machine details and service needs. Our team will get in touch with you.</p>
  </div>

  <form className="inquiry-form" action="https://formsubmit.co/vibrotechbalancing@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="New Website Enquiry - VibroTech Balancing" />
    <input type="hidden" name="_template" value="table" />

    <div className="inquiry-form-grid">
      <div className="inquiry-field">
        <label htmlFor="inquiry-name">Full Name *</label>
        <input id="inquiry-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
      </div>
      <div className="inquiry-field">
        <label htmlFor="inquiry-company">Company Name</label>
        <input id="inquiry-company" name="company" type="text" autoComplete="organization" placeholder="Your company" />
      </div>
      <div className="inquiry-field">
        <label htmlFor="inquiry-phone">Phone Number *</label>
        <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required />
      </div>
      <div className="inquiry-field">
        <label htmlFor="inquiry-email">Email Address *</label>
        <input id="inquiry-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      </div>
      <div className="inquiry-field inquiry-field-full">
        <label htmlFor="inquiry-service">Service Required *</label>
        <select id="inquiry-service" name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Dynamic Balancing</option>
          <option>Marine Propeller Balancing</option>
          <option>Motor / Rotor Balancing</option>
          <option>Vibration Analysis</option>
          <option>Laser Shaft Alignment</option>
          <option>Condition Monitoring</option>
          <option>Thermography</option>
          <option>Heavy Machining</option>
          <option>Shaft Grinding</option>
          <option>Other Engineering Requirement</option>
        </select>
      </div>
      <div className="inquiry-field inquiry-field-full">
        <label htmlFor="inquiry-message">Enquiry Details *</label>
        <textarea id="inquiry-message" name="message" rows="5" placeholder="Describe the machine, component, dimensions, operating speed or service required..." required />
      </div>
    </div>

    <button className="inquiry-submit-btn" type="submit">
      SEND ENQUIRY <MoveRight size={18} />
    </button>
    <p className="inquiry-privacy-note">Your details will be used to respond to your engineering enquiry.</p>
  </form>
</div>
<div className="contact-bottom-strip">
              <span>ROTATING EQUIPMENT</span>
              <i></i>
              <span>PRECISION ENGINEERING</span>
              <i></i>
              <span>VIBRATION &amp; BALANCING</span>
              <i></i>
              <span>NAVI MUMBAI</span>
            </div>

          </div>

        </section>
      </main>

      <nav className="site-links" aria-label="Site links">
        <div>
          <span className="site-links-title">Contact</span>
          <Link to="/#contact">Contact VibroTech Balancing</Link>
        </div>
        <div>
          <span className="site-links-title">Balancing Solutions</span>
          <Link to="/balancing-solutions/motor-rotor-balancing/">Motor Rotor Balancing</Link>
          <Link to="/balancing-solutions/marine-propeller-balancing/">Marine Propeller Balancing</Link>
          <Link to="/balancing-solutions/fan-balancing/">Fan Balancing</Link>
          <Link to="/balancing-solutions/blower-balancing/">Blower Balancing</Link>
          <Link to="/balancing-solutions/pump-balancing/">Pump Impeller Balancing</Link>
          <Link to="/balancing-solutions/compressor-balancing/">Compressor Rotor Balancing</Link>
          <Link to="/balancing-solutions/turbine-rotor-balancing/">Turbine Rotor Balancing</Link>
          <Link to="/balancing-solutions/alternator-rotor-balancing/">Alternator Rotor Balancing</Link>
          <Link to="/balancing-solutions/roll-balancing/">Roll Balancing</Link>
          <Link to="/balancing-solutions/high-speed-rotor-balancing/">High-Speed Rotor Balancing</Link>
        </div>
        <div>
          <span className="site-links-title">Service Locations</span>
          <Link to="/locations/dynamic-balancing-navi-mumbai/">Dynamic Balancing Navi Mumbai</Link>
          <Link to="/locations/dynamic-balancing-mumbai/">Dynamic Balancing Mumbai</Link>
          <Link to="/locations/dynamic-balancing-thane/">Dynamic Balancing Thane</Link>
          <Link to="/locations/dynamic-balancing-pune/">Dynamic Balancing Pune</Link>
          <Link to="/locations/vibration-analysis-navi-mumbai/">Vibration Analysis Navi Mumbai</Link>
          <Link to="/locations/rotor-balancing-maharashtra/">Rotor Balancing Maharashtra</Link>
        </div>
      </nav>

      <footer>

        <div className="footer-main">
          <span>© VIBROTECH BALANCING</span>
          <span>VIBRATION ANALYSIS • BALANCING • ALIGNMENT • CONDITION MONITORING</span>
        </div>

        <div className="visitor-counter">
          <span className="visitor-counter-dot"></span>
          <span>WEBSITE VISITORS</span>
          <strong>{visitorCount !== null ? visitorCount.toLocaleString() : '—'}</strong>
        </div>


      </footer>
    </div>
  )
}

export default App

import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  Cpu,
  Gauge,
  Menu,
  Radio,
  ShieldCheck,
  Thermometer,
  Waves,
  X,
  Zap,
} from 'lucide-react'
import RealisticMotor from './RealisticMotor'
import './App.css'

const SENSOR_POINTS = [
  { side: 'DE', direction: 'V' },
  { side: 'DE', direction: 'H' },
  { side: 'DE', direction: 'A' },
  { side: 'NDE', direction: 'V' },
  { side: 'NDE', direction: 'H' },
  { side: 'NDE', direction: 'A' },
]

const SERVICES = [
  ['Vibration Analysis', 'Frequency-domain diagnostics, waveform review and engineering interpretation.', Activity],
  ['Dynamic Balancing', 'Precision rotor balancing with phase and correction-mass workflow.', Gauge],
  ['HV Motor Diagnostics', 'Condition assessment of high-voltage motors, bearings, shafts and couplings.', Zap],
  ['Laser Shaft Alignment', 'Precision alignment workflows for rotating equipment and coupled machines.', Radio],
  ['Condition Monitoring', 'Trend-based machine condition monitoring and engineering review.', Waves],
  ['Thermography', 'Infrared inspection to identify abnormal thermal patterns for investigation.', Thermometer],
  ['Heavy Machining', 'Industrial machining support for demanding rotating-equipment applications.', Cpu],
  ['Shaft Grinding', 'Precision shaft surface restoration for rotating machinery components.', ShieldCheck],
]

function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [selectedSensor, setSelectedSensor] = useState({ side: 'DE', direction: 'H' })
  const [rpm, setRpm] = useState(3000)
  const [temperature, setTemperature] = useState(58.4)
  const [vibration, setVibration] = useState(2.14)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRpm(3000 + Math.round((Math.random() - 0.5) * 6))
      setTemperature(58.4 + (Math.random() - 0.5) * 1.4)
      setVibration(2.14 + (Math.random() - 0.5) * 0.08)
      setPhase((value) => value + 0.18)
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const frequency = useMemo(() => rpm / 60, [rpm])
  const secondHarmonic = frequency * 2

  const waveform = useMemo(() => {
    const points = []
    for (let i = 0; i < 180; i += 1) {
      const t = (i / 179) * Math.PI * 8
      const y =
        50 +
        Math.sin(t + phase) * 15 +
        Math.sin(t * 2.1 + phase * 0.6) * 6 +
        Math.sin(t * 4.2) * 2
      points.push(`${(i / 179) * 1000},${y}`)
    }
    return points.join(' ')
  }, [phase])

  const navTo = (id) => {
    setMobileMenu(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => navTo('top')} aria-label="VIBROTECH BALANCING home">
            <img src="/vibrotech-logo.jpg" alt="VIBROTECH BALANCING logo" className="brand-logo" />
            <div className="brand-copy">
              <strong>VIBROTECH BALANCING</strong>
              <span>INDUSTRIAL MACHINE INTELLIGENCE</span>
            </div>
          </button>

          <nav className={`main-nav ${mobileMenu ? 'is-open' : ''}`}>
            <button onClick={() => navTo('monitor')}>MONITOR</button>
            <button onClick={() => navTo('services')}>SERVICES</button>
            <button onClick={() => navTo('technology')}>TECHNOLOGY</button>
            <button onClick={() => navTo('engineering')}>ENGINEERING</button>
            <button onClick={() => navTo('contact')}>CONTACT</button>
          </nav>

          <button className="menu-button" onClick={() => setMobileMenu((value) => !value)} aria-label="Toggle navigation">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow"><span /> LIVE MACHINE INTELLIGENCE</div>
            <h1>EVERY MACHINE<br /><em>SPEAKS.</em> WE LISTEN.</h1>
            <p>
              Vibration diagnostics, balancing, alignment and condition monitoring
              for rotating industrial machinery.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navTo('monitor')}>
                ENTER LIVE MONITOR <ArrowRight size={17} />
              </button>
              <button className="secondary-button" onClick={() => navTo('services')}>
                EXPLORE SERVICES
              </button>
            </div>
          </div>

          <div className="hero-machine">
            <RealisticMotor rpm={rpm} vibration={vibration} status="NORMAL" />
          </div>

          <div className="hero-telemetry">
            <div><span>RPM</span><strong>{rpm}</strong></div>
            <div><span>VIBRATION</span><strong>{vibration.toFixed(2)} <small>mm/s</small></strong></div>
            <div><span>TEMPERATURE</span><strong>{temperature.toFixed(1)} <small>Â°C</small></strong></div>
            <div className="status-cell"><span>STATUS</span><strong><i /> NORMAL</strong></div>
          </div>
        </section>

        <section className="monitor-section section-pad" id="monitor">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / LIVE MONITOR</span>
              <h2>SEE THE MACHINE<br /><em>IN MOTION.</em></h2>
            </div>
            <p>Illustrative live telemetry showing how vibration measurements can be visualized, trended and interpreted.</p>
          </div>

          <div className="monitor-grid">
            <article className="panel waveform-panel">
              <div className="panel-header">
                <div><span className="panel-kicker">TIME DOMAIN</span><h3>LIVE WAVEFORM</h3></div>
                <span className="live-badge"><i /> LIVE</span>
              </div>
              <div className="waveform-meta">
                <span>{selectedSensor.side}-{selectedSensor.direction}</span>
                <span>RMS {vibration.toFixed(2)} mm/s</span>
              </div>
              <div className="waveform-chart">
                <div className="chart-grid" />
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-label="Simulated vibration waveform">
                  <polyline points={waveform} fill="none" />
                </svg>
              </div>
              <div className="axis-labels"><span>0 ms</span><span>TIME</span><span>1000 ms</span></div>
            </article>

            <article className="panel fft-panel">
              <div className="panel-header">
                <div><span className="panel-kicker">FREQUENCY DOMAIN</span><h3>LIVE FFT</h3></div>
                <Activity size={19} />
              </div>
              <div className="fft-readout">
                <div><span>ROTATIONAL SPEED</span><strong>{rpm} <small>RPM</small></strong></div>
                <div><span>1Ã— COMPONENT</span><strong>{frequency.toFixed(1)} <small>Hz</small></strong></div>
                <div><span>2Ã— COMPONENT</span><strong>{secondHarmonic.toFixed(1)} <small>Hz</small></strong></div>
              </div>
              <div className="fft-bars">
                {[12, 19, 13, 25, 18, 58, 22, 16, 34, 12, 9, 14, 8, 11, 7, 9, 6, 8, 5, 7].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="fft-caption"><strong>DOMINANT COMPONENT</strong><span>1Ã— ROTATIONAL â€¢ {frequency.toFixed(1)} Hz</span></div>
            </article>

            <article className="panel sensor-panel">
              <div className="panel-header">
                <div><span className="panel-kicker">SENSOR MAP</span><h3>SIX-POINT MONITORING</h3></div>
                <span className="machine-tag">MTR-001</span>
              </div>
              <div className="sensor-layout">
                <div className="sensor-side">
                  <span className="sensor-side-title">NDE</span>
                  {['V', 'H', 'A'].map((direction) => (
                    <button
                      key={`NDE-${direction}`}
                      className={selectedSensor.side === 'NDE' && selectedSensor.direction === direction ? 'sensor-point active' : 'sensor-point'}
                      onClick={() => setSelectedSensor({ side: 'NDE', direction })}
                    >
                      <b>NDE</b><strong>{direction}</strong><span />
                    </button>
                  ))}
                </div>
                <div className="motor-schematic">
                  <div className="schematic-body" />
                  <div className="schematic-shaft" />
                  <div className="schematic-base" />
                </div>
                <div className="sensor-side">
                  <span className="sensor-side-title">DE</span>
                  {['V', 'H', 'A'].map((direction) => (
                    <button
                      key={`DE-${direction}`}
                      className={selectedSensor.side === 'DE' && selectedSensor.direction === direction ? 'sensor-point active' : 'sensor-point'}
                      onClick={() => setSelectedSensor({ side: 'DE', direction })}
                    >
                      <b>DE</b><strong>{direction}</strong><span />
                    </button>
                  ))}
                </div>
              </div>
              <div className="selected-reading">
                <span>SELECTED POINT</span>
                <strong>{selectedSensor.side}-{selectedSensor.direction}</strong>
                <div><span>{rpm} RPM</span><span>{vibration.toFixed(2)} mm/s RMS</span><span>{temperature.toFixed(1)} Â°C</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="diagnostic-section section-pad">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">02 / DIAGNOSTIC INTERPRETATION</span>
              <h2>FROM SIGNAL<br /><em>TO INSIGHT.</em></h2>
            </div>
            <p>Engineering interpretation should connect measurements to patterns, investigation and appropriate action.</p>
          </div>
          <div className="signal-flow">
            {['RAW SIGNAL', 'FREQUENCY SPECTRUM', 'PATTERN', 'ENGINEERING INVESTIGATION', 'ACTION'].map((item, index) => (
              <div className="signal-step" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 4 && <ArrowRight size={17} />}
              </div>
            ))}
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">03 / ENGINEERING SERVICES</span>
              <h2>PRECISION FOR<br /><em>ROTATING EQUIPMENT.</em></h2>
            </div>
            <p>Focused industrial services for measurement, diagnosis, correction and machine condition assessment.</p>
          </div>
          <div className="service-grid">
            {SERVICES.map(([title, description, Icon], index) => (
              <article className="service-card" key={title}>
                <span className="service-number">0{index + 1}</span>
                <Icon size={25} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={() => navTo('contact')}>DISCUSS REQUIREMENT <ArrowRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="engineering-section section-pad" id="engineering">
          <div className="engineering-grid">
            <div>
              <span className="section-kicker">04 / PRECISION ENGINEERING</span>
              <h2>DYNAMIC<br /><em>BALANCING.</em></h2>
              <p>
                A visual balancing workflow can communicate the engineering sequence:
                baseline measurement, correction calculation and verification measurement.
              </p>
              <div className="balance-stages">
                <div><span>01</span><strong>UNBALANCED</strong><b>8.4 mm/s</b></div>
                <div><span>02</span><strong>CORRECTION</strong><b>42.6 g @ 127Â°</b></div>
                <div><span>03</span><strong>VERIFIED</strong><b>1.4 mm/s</b></div>
              </div>
              <small className="disclaimer">Illustrative engineering simulation â€” values shown are examples, not a field measurement.</small>
            </div>
            <div className="rotor-visual">
              <div className="rotor-ring ring-1" />
              <div className="rotor-ring ring-2" />
              <div className="rotor-core" />
              <div className="rotor-phase">127Â°</div>
              <div className="rotor-correction">42.6 g</div>
            </div>
          </div>
        </section>

        <section className="technology-section section-pad" id="technology">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">05 / TECHNOLOGY</span>
              <h2>MEASURE.<br /><em>CONNECT. UNDERSTAND.</em></h2>
            </div>
            <p>Current website visuals represent the system architecture concept. Sensor and wireless hardware can be connected in a future implementation.</p>
          </div>
          <div className="architecture">
            {['SENSOR', 'ESP32', 'WIRELESS DATA', 'VIBROTECH SYSTEM', 'ANALYTICS', 'ENGINEERING INSIGHT'].map((item, index) => (
              <div className="architecture-node" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 5 && <ArrowRight size={16} />}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-card">
            <span className="section-kicker">06 / CONTACT</span>
            <h2>WHAT IS YOUR<br /><em>MACHINE TELLING YOU?</em></h2>
            <p>Measure it. Analyze it. Understand it.</p>
            <a className="primary-button" href="mailto:info@vibrotech.in">START A CONVERSATION <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/vibrotech-logo.jpg" alt="VIBROTECH BALANCING logo" />
          <div><strong>VIBROTECH BALANCING</strong><span>INDUSTRIAL MACHINE INTELLIGENCE</span></div>
        </div>
        <span>Â© 2026 VIBROTECH BALANCING. ENGINEERING â€¢ DIAGNOSTICS â€¢ PRECISION.</span>
      </footer>
    </div>
  )
}

export default App



import { useEffect, useMemo, useState } from 'react'
import {
  Activity, Anchor, ArrowDownRight, ArrowUpRight, BarChart3, Gauge,
  Menu, MoveRight, Radio, Settings2, Thermometer, Waves, X
} from 'lucide-react'
import RealisticMotor from './RealisticMotor'
import './App.css'

const sensorPoints = [
  ['DE','V','Drive End • Vertical'], ['DE','H','Drive End • Horizontal'], ['DE','A','Drive End • Axial'],
  ['NDE','V','Non-Drive End • Vertical'], ['NDE','H','Non-Drive End • Horizontal'], ['NDE','A','Non-Drive End • Axial'],
]

const services = [
  { title:'Vibration Analysis', text:'Machine vibration measurement, spectrum review and engineering interpretation.', icon:Activity },
  { title:'Dynamic Balancing', text:'Single-plane and two-plane balancing for rotating equipment.', icon:Gauge },
  { title:'Laser Shaft Alignment', text:'Precision shaft and coupling alignment for rotating machinery.', icon:MoveRight },
  { title:'Condition Monitoring', text:'Trend machine measurements over time to make changes visible.', icon:BarChart3 },
  { title:'Thermography', text:'Infrared inspection for electrical and mechanical temperature anomalies.', icon:Thermometer },
  { title:'Heavy Machining & Shaft Grinding', text:'Heavy engineering support for shafts, rotors and machine components.', icon:Settings2 },
]

function makeWave(phase, amplitude = 58) {
  const points = []
  for (let i = 0; i <= 520; i += 5) {
    const t = i / 520
    const x = 20 + i
    const y = 92
      - Math.sin(t * Math.PI * 12 + phase) * amplitude * 0.34
      - Math.sin(t * Math.PI * 36 + phase * 1.7) * amplitude * 0.08
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return points.join(' ')
}

function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [selectedSensor, setSelectedSensor] = useState({ side:'DE', direction:'H' })
  const [rpm, setRpm] = useState(3000)
  const [temperature, setTemperature] = useState(58.4)
  const [vibration, setVibration] = useState(2.14)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRpm(3000 + Math.sin(Date.now() / 850) * 3)
      setTemperature(58.4 + Math.sin(Date.now() / 1250) * 0.7)
      setVibration(2.14 + Math.sin(Date.now() / 720) * 0.04)
      setPhase(p => p + 0.18)
    }, 100)
    return () => clearInterval(id)
  }, [])

  const oneX = rpm / 60
  const twoX = oneX * 2
  const waveform = useMemo(() => makeWave(phase), [phase])

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
          <button onClick={() => scrollTo('monitor')}>LIVE MONITOR</button>
          <button onClick={() => scrollTo('services')}>SERVICES</button>
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
              <button className="primary-btn" onClick={() => scrollTo('monitor')}>ENTER LIVE MONITOR <MoveRight size={18}/></button>
              <button className="secondary-btn" onClick={() => scrollTo('services')}>EXPLORE SERVICES</button>
            </div>

          </div>


        </section>

        <section id="monitor" className="section monitor-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker"><Radio size={15}/> LIVE MONITOR</span>
              <h2>Rotating Machinery — Live Condition View</h2>
              <p>Select any measurement point to update the monitoring panel.</p>
            </div>
            <div className="live-badge"><i/> LIVE DATA</div>
          </div>

          <div className="monitor-grid">
            <div className="monitor-main panel">
              <div className="panel-head">
                <div><span>HV MOTOR — MTR-001</span><strong>{selectedSensor[0]} / {selectedSensor[1]}</strong></div>
                <span className="status normal"><i/> NORMAL</span>
              </div>
              <div className="telemetry">
                <div><span>RPM</span><b>{rpm.toFixed(0)}</b><small>rotational speed</small></div>
                <div><span>VIBRATION</span><b>{vibration.toFixed(2)} <small>mm/s RMS</small></b><small>{selectedSensor[0]} {selectedSensor[1]}</small></div>
                <div><span>TEMPERATURE</span><b>{temperature.toFixed(1)} <small>°C</small></b><small>bearing / housing</small></div>
                <div><span>1×</span><b>{oneX.toFixed(1)} <small>Hz</small></b><small>rotational frequency</small></div>
              </div>

              <div className="chart-title"><span>LIVE WAVEFORM</span><small>TIME DOMAIN • 100 ms WINDOW</small></div>
              <div className="wave-chart">
                <div className="chart-grid"/>
                <svg viewBox="0 0 560 180" preserveAspectRatio="none">
                  <polyline points={waveform} fill="none" stroke="currentColor" strokeWidth="2.4"/>
                </svg>
              </div>

              <div className="chart-title"><span>LIVE FFT</span><small>1× {oneX.toFixed(1)} Hz • 2× {twoX.toFixed(1)} Hz</small></div>
              <div className="fft">
                {[12,18,25,20,36,18,15,13,17,14,11,10,12,9,8,7,6,5].map((h,i)=>
                  <i key={i} style={{height:`${h + (i===4 ? 28 : 0)}%`}}/>
                )}
              </div>
            </div>

            <aside className="sensor-panel panel">
              <div className="panel-head"><div><span>6-POINT MONITORING</span><strong>SENSOR MAP</strong></div></div>
              <div className="sensor-map">
                <div className="sensor-motor-outline"><img src="/motor-top-view.png" alt="Motor sensor map"/></div>
                {sensorPoints.map(([side, dir, label], i) => (
                  <button
                    key={label}
                    className={`sensor-point sp-${i} ${selectedSensor[0]===side && selectedSensor[1]===dir ? 'selected':''}`}
                    onClick={() => setSelectedSensor({side,direction:dir})}
                    title={label}
                  >
                    <i/><span>{side}-{dir}</span>
                  </button>
                ))}
              </div>
              <div className="sensor-list">
                {sensorPoints.map(([side, dir, label]) => (
                  <button key={label} onClick={() => setSelectedSensor({side,direction:dir})} className={selectedSensor[0]===side && selectedSensor[1]===dir ? 'selected':''}>
                    <span><i/>{side} — {dir}</span><b>2.14 mm/s</b>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </section>

<section id="services" className="section services-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker"><Waves size={15}/> ENGINEERING SERVICES</span>
              <h2>Precision for All Rotating Equipment</h2>
              <p>Engineering services centered around rotating equipment and critical machinery.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map(({title,text,icon:Icon}) => (
              <article className={`service-card ${title === 'Vibration Analysis' ? 'vibration-analysis-card' : ''} ${title === 'Dynamic Balancing' ? 'dynamic-balancing-card' : ''}`} key={title}>
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

                <div className="service-card-content">
                  <div className="service-icon"><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span>ENGINEERING SERVICE <MoveRight size={15}/></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <span className="section-kicker">VIBROTECH BALANCING</span>
            <h2>What Is Your Machine Telling You?</h2>
            <p>Measure it. Analyze it. Understand it.</p>
          </div>
          <button className="primary-btn">CONTACT ENGINEERING <MoveRight size={18}/></button>
        </section>
      </main>

      <footer><span>© VIBROTECH BALANCING</span><span>VIBRATION • BALANCING • ALIGNMENT • CONDITION MONITORING</span></footer>
    </div>
  )
}

export default App



















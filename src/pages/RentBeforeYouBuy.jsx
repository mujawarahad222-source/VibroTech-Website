import { useEffect } from 'react'
export default function RentBeforeYouBuy() {
  useEffect(() => {
    document.title = 'Rent a Balancing Machine Before You Buy | VibroTech'
    const d = document.querySelector('meta[name="description"]')
    if (d) d.setAttribute('content', 'Rent a dynamic balancing machine and test it on your own rotors before you buy. Buy the same machine or order a new one. VibroTech Balancing, Navi Mumbai.')
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="rent-page">
      <div className="rent-top">
        <a href="/">VIBROTECH BALANCING</a>
        <a href="/">BACK TO HOME</a>
      </div>
      <div className="rent-wrap">
        <p className="rent-kicker">RENTAL PROGRAM</p>
        <h1>Rent Before You Buy</h1>
        <p className="rent-lead">Test a balancing machine in your own plant before you commit to owning one. Run your real jobs, see the real results, and then decide.</p>
        <section className="rent-section">
          <h2>The hidden cost of buying first</h2>
          <p>Many companies buy a balancing machine to bring production costs down. What they often do not see before buying is the heavy repair and maintenance cost, and the shortage of trained balancing machine operators. The machine then sits idle for a year or more, and instead of reducing production cost it ends up increasing it.</p>
          <p>Our rental offer gives you a second option: try the machine first, and buy only when it has proven itself in your own plant.</p>
        </section>
        <section className="rent-section">
          <h2>How it works</h2>
          <div className="rent-grid">
            <div className="rent-card"><img className="rent-step-img" src="/images/rent/step-1.jpeg" alt="Step 1: Rent the machine" loading="lazy" /><span>STEP 1</span><h3>Rent the machine</h3><p>Choose a balancing machine that suits your rotors from the ranges we already have available for rent.</p></div>
            <div className="rent-card"><img className="rent-step-img" src="/images/rent/step-2.jpeg" alt="Step 2: Test it in your plant" loading="lazy" /><span>STEP 2</span><h3>Test it in your plant</h3><p>Run your own jobs and judge the results, the running cost and the operator requirement in real conditions.</p></div>
            <div className="rent-card"><img className="rent-step-img" src="/images/rent/step-3.jpeg" alt="Step 3: Decide with confidence" loading="lazy" /><span>STEP 3</span><h3>Decide with confidence</h3><p>Once the results are clear, choose what to do next. The options are below.</p></div>
          </div>
        </section>
        <section className="rent-section">
          <h2>After the trial, you choose</h2>
          <div className="rent-grid">
            <div className="rent-card"><img className="rent-choice-img" src="/images/rent/machine-image.jpg" alt="Balancing machine" loading="lazy" /><h3>Buy the same machine</h3><p>If the trial worked, keep the machine you have already tested.</p></div>
            <div className="rent-card"><img className="rent-choice-img" src="/images/rent/machine-image.jpg" alt="Balancing machine" loading="lazy" /><h3>Order a brand new one</h3><p>Prefer a new machine? Order one with the same confidence, based on what you learned.</p></div>
            <div className="rent-card"><img className="rent-choice-img" src="/images/rent/machine-image.jpg" alt="Balancing machine" loading="lazy" /><h3>Return it</h3><p>If it does not suit your needs, return it. No purchase risk: you pay for the rental, not for a machine that does not work for you.</p></div>
          </div>
        </section>
        <section className="rent-section">
          <h2>Customized machines, built to your requirement</h2>
          <p>Cannot find a standard machine that fits your rotor? We also provide customized balancing machines made to your requirement. Many ranges are already available with us to rent out.</p>
          <div className="rent-grid rent-grid-4">
            <div className="rent-card"><img className="rent-step-img rent-custom-img" src="/images/rent/higher-od-capacity.jpg" alt="Higher OD capacity" loading="lazy" /><h3>Higher OD capacity</h3><p>For larger diameter rotors.</p></div>
            <div className="rent-card"><img className="rent-step-img rent-custom-img" src="/images/rent/maximum-length.jpg" alt="Maximum length" loading="lazy" /><h3>Maximum length</h3><p>For longer rotors and shafts.</p></div>
            <div className="rent-card"><img className="rent-step-img rent-custom-img" src="/images/rent/higher-weight.jpg" alt="Higher weight" loading="lazy" /><h3>Higher weight</h3><p>For heavier rotors.</p></div>
            <div className="rent-card"><img className="rent-step-img rent-custom-img" src="/images/rent/high-speed.jpg" alt="High speed" loading="lazy" /><h3>High speed</h3><p>High-speed machines for demanding applications.</p></div>
          </div>
        </section>
        <section className="rent-cta">
        <div className="rent-cta-bg" aria-hidden="true">
          <div className="rent-cta-grid"></div>
          <div className="rent-cta-turbine">
            <div className="rent-turbine-ring rent-turbine-ring-one"></div>
            <div className="rent-turbine-ring rent-turbine-ring-two"></div>
            <div className="rent-turbine-blades"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div className="rent-turbine-hub"></div>
          </div>
          <div className="rent-cta-word">VIBROTECH</div>
        </div>
        <div className="rent-cta-content"><h2>Contact us for more info</h2>
          <p>Tell us about your rotors and your requirement, and we will suggest the right machine and rental terms.</p>
          <a className="rent-btn" href="/#contact">CONTACT US</a>
        </div>
        </section>
      </div>
    </div>
  )
}
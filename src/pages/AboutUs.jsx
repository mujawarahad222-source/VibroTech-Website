import SEOPage from './SEOPage'

export default function AboutUs() {
  return (
    <div className="about-page-bg"><SEOPage
      eyebrow="ABOUT US"
      title="About VIBROTECH BALANCING"
      intro="VIBROTECH BALANCING provides dynamic balancing, vibration analysis, laser shaft alignment and related rotating-equipment engineering services from Rabale, Navi Mumbai, serving industry since 1980."
      sections={[
        {
          heading: 'Our Company',
          text: 'VIBROTECH BALANCING is based at R-269, T.T.C. Industrial Area, Rabale, Navi Mumbai. The company was established in 1980 by Mr. Sadique Abbas Mujawar and has served industry for more than 45 years. Its owners are Sadique Abbas Mujawar, Abdul Ahad Mujawar and Abdus Samad Mujawar.',
        },
        {
          heading: 'What We Do',
          text: 'We support industrial customers with balancing and condition-monitoring related services for rotating equipment (preventive maintenance & predictive maintenance).',
          items: [
            'Dynamic balancing and in-situ balancing',
            'Vibration measurement and analysis',
            'Laser shaft alignment',
            'Infrared thermography',
            'Heavy machining',
            'Shaft grinding',
            'Predictive maintenance and condition monitoring',
          ],
        },
        {
          heading: 'Balancing Capability',
          text: 'Our workshop balances rotating components within the following limits. The practical limit for any job depends on the component, so not every job can reach all four maximums at the same time.',
          items: [
            'Component weight up to 20 tonnes',
            'Outside diameter up to 5 m',
            'Component length up to 15 m',
            'Balancing speed up to 3,000 RPM',
          ],
        },
        {
          heading: 'Rotating Equipment We Work On',
          text: 'We provide balancing services for a wide range of industrial rotating equipment, subject to the technical requirements and feasibility of each component.',
          items: [
            'Fans and blowers',
            'Industrial rotors',
            'Shafts and rolls',
            'Marine propellers',
            'Crusher rotors',
            'Centrifugal baskets',
            'Crankshafts',
            'Pumps and impellers',
            'Motor armatures and rotors',
            'Turbines',
            'Other rotating equipment',
          ],
        },
        {
          heading: 'On-Site and In-Situ Service',
          text: 'VIBROTECH BALANCING provides on-site and in-situ balancing services for industrial rotating equipment at customer facilities worldwide, where moving large or installed machinery to a workshop is impractical. Each assignment is assessed according to the equipment, site conditions and technical requirements.',
        },
        {
          heading: 'Quality and Standards',
          text: 'We use top-class, high-quality machinery and equipment to carry out industrial balancing work. Our approach focuses on precision, reliable results, and meeting the technical requirements of each component and application. Balancing follows ISO 21940-11 where applicable to the job and customer requirement.',
          items: [
            'Initial and final balancing results',
            'Vibration readings',
            'Correction weights and positions',
            'Operating RPM and balancing speed',
            'ISO balance quality grade, when applicable',
            'Customer and component identification',
            'Final acceptance result',
          ],
        },
        {
          heading: 'Industries We Serve',
          text: 'Our work supports rotating equipment in heavy and process industries.',
          items: [
            'Marine and shipbuilding',
            'Naval and defence equipment',
            'Power generation',
            'Oil and gas',
            'Petrochemical plants',
            'Steel plants',
            'Industrial manufacturing',
          ],
        },
        {
          heading: 'Service Area',
          text: 'Based in Navi Mumbai, Maharashtra, VIBROTECH BALANCING serves industrial customers across India and accepts worldwide enquiries for on-site and in-situ balancing services.',
        },
      ]}
      related={[
        { title: 'Dynamic Balancing', path: '/services/dynamic-balancing/' },
        { title: 'Vibration Analysis', path: '/services/vibration-analysis/' },
        { title: 'Laser Shaft Alignment', path: '/services/laser-shaft-alignment/' },
        { title: 'Condition Monitoring', path: '/services/condition-monitoring/' },
      ]}
    /></div>
  )
}
import SEOPage from './SEOPage'

export default function HighSpeedRotorBalancing() {
  return (
    <SEOPage
      eyebrow="PRECISION HIGH-SPEED ROTOR ENGINEERING"
      title="High-Speed Rotor Balancing Services"
      intro="Precision balancing support for high-speed industrial rotors, turbine components, compressor rotors, generator rotors and other critical rotating equipment."
      sections={[
        {
          heading: 'High-Speed Rotor Balancing',
          text: 'VibroTech Balancing provides balancing support for critical rotating components where operating speed, rotor geometry, mass distribution and residual unbalance require careful engineering consideration.',
        },
        {
          heading: 'High-Speed Rotor Applications',
          text: 'Balancing requirements are evaluated according to rotor construction, operating speed, geometry, mass distribution, correction locations and the applicable equipment requirements.',
          items: [
            'High-speed industrial rotor balancing',
            'High-speed motor rotor balancing',
            'Compressor rotor balancing',
            'Turbine rotor balancing',
            'Generator and alternator rotor balancing',
            'Precision rotating-component balancing',
          ],
        },
        {
          heading: 'Why High-Speed Rotor Balancing Matters',
          text: 'Rotor unbalance can generate significant centrifugal forces as operating speed increases. Proper balancing can help reduce vibration and mechanical loading and support stable operation of critical rotating machinery.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the complete rotor and its operating requirements. Rotor geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'High-speed industrial machinery',
            'Turbine rotating equipment',
            'Centrifugal compressor rotors',
            'Generator and alternator rotors',
            'High-speed electric motor rotors',
            'Power-generation rotating equipment',
            'Petrochemical rotating machinery',
            'Critical industrial rotating components',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Turbine Rotor Balancing',
          path: '/balancing-solutions/turbine-rotor-balancing/',
        },
        {
          title: 'Compressor Rotor Balancing',
          path: '/balancing-solutions/compressor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

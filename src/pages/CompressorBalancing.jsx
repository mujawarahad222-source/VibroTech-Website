import SEOPage from './SEOPage'

export default function CompressorBalancing() {
  return (
    <SEOPage
      eyebrow="INDUSTRIAL COMPRESSOR ENGINEERING"
      title="Compressor Rotor Balancing Services"
      intro="Industrial compressor balancing services for centrifugal compressors, reciprocating compressor rotating assemblies, compressor rotors and other critical rotating equipment."
      sections={[
        {
          heading: 'Industrial Compressor Balancing',
          text: 'VibroTech Balancing provides compressor balancing support for industrial compressor rotors and rotating assemblies where unbalance can contribute to vibration, bearing loading, mechanical stress and reduced equipment reliability.',
        },
        {
          heading: 'Compressor Balancing Applications',
          text: 'Balancing requirements are evaluated according to compressor construction, rotor geometry, operating speed, correction locations and the applicable equipment requirements.',
          items: [
            'Centrifugal compressor rotor balancing',
            'Single-stage compressor rotor balancing',
            'Multistage compressor rotor balancing',
            'Compressor shaft and rotor assembly balancing',
            'Industrial process compressor balancing',
            'Large compressor rotating-component balancing',
          ],
        },
        {
          heading: 'Why Compressor Balancing Matters',
          text: 'Compressor rotor unbalance can generate centrifugal forces during operation and contribute to vibration, bearing loading and mechanical stress. Proper balancing can help improve rotating stability and support reliable compressor operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the compressor rotor or rotating assembly together with its operating requirements. Component geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Centrifugal compressors',
            'Industrial process compressors',
            'Single-stage compressor systems',
            'Multistage compressor systems',
            'Petrochemical compressor equipment',
            'Oil and gas compressor systems',
            'Power-plant compressor equipment',
            'Marine and industrial compressor machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
        {
          title: 'Condition Monitoring',
          path: '/services/condition-monitoring/',
        },
      ]}
    />
  )
}

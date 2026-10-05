import SEOPage from './SEOPage'

export default function PumpBalancing() {
  return (
    <SEOPage
      eyebrow="PUMP ROTATING EQUIPMENT"
      title="Pump Impeller Balancing Services"
      intro="Industrial pump balancing services for pump impellers, rotating assemblies, multistage pumps and critical pumping equipment."
      sections={[
        {
          heading: 'Industrial Pump Balancing',
          text: 'VibroTech Balancing provides pump balancing support for rotating pump components where unbalance can contribute to vibration, bearing loading, mechanical stress and reduced equipment reliability.',
        },
        {
          heading: 'Pump Balancing Applications',
          text: 'Balancing requirements are evaluated according to pump construction, impeller geometry, rotor configuration, operating speed, correction locations and the applicable equipment requirements.',
          items: [
            'Pump impeller balancing',
            'Single-stage impeller balancing',
            'Multistage pump impeller balancing',
            'Pump shaft and rotor assembly balancing',
            'Centrifugal pump rotating-component balancing',
            'Large industrial pump balancing',
          ],
        },
        {
          heading: 'Why Pump Balancing Matters',
          text: 'Pump rotor and impeller unbalance can generate centrifugal forces during operation and contribute to vibration and mechanical loading. Proper balancing can help improve rotating stability and support reliable pump operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the pump rotor or impeller together with its operating requirements. Component geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial centrifugal pumps',
            'Single-stage pump systems',
            'Multistage pump systems',
            'Process and circulation pumps',
            'Power-plant pump equipment',
            'Petrochemical pump systems',
            'Oil and gas pumping equipment',
            'Marine and industrial pumping systems',
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

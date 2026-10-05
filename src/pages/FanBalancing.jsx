import SEOPage from './SEOPage'

export default function FanBalancing() {
  return (
    <SEOPage
      eyebrow="INDUSTRIAL FAN ENGINEERING"
      title="Fan Balancing Services"
      intro="Industrial fan balancing services for centrifugal fans, axial fans, exhaust fans and other rotating fan assemblies."
      sections={[
        {
          heading: 'Industrial Fan Balancing',
          text: 'VibroTech Balancing provides fan balancing support for industrial rotating fans where rotor unbalance can contribute to vibration, bearing loading, structural loading and mechanical operating problems.',
        },
        {
          heading: 'Fan Balancing Applications',
          text: 'Balancing requirements are evaluated according to fan construction, rotor geometry, operating speed, correction locations and the applicable equipment requirements.',
          items: [
            'Centrifugal fan balancing',
            'Axial fan balancing',
            'Industrial exhaust fan balancing',
            'Ventilation fan balancing',
            'Blower and fan rotor balancing',
            'Large industrial fan balancing',
          ],
        },
        {
          heading: 'Why Fan Balancing Matters',
          text: 'Fan rotor unbalance can generate centrifugal forces during operation and contribute to vibration and mechanical loading. Correct balancing can help improve rotating stability and support reliable fan operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the fan rotor, operating speed, correction arrangement and machine installation. The balancing objective is considered together with the fan construction and operating requirements.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial ventilation systems',
            'Centrifugal process fans',
            'Axial flow fans',
            'Exhaust and extraction systems',
            'HVAC and industrial air systems',
            'Power-plant fans',
            'Steel-plant ventilation equipment',
            'Marine and industrial fan systems',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Blower Balancing',
          path: '/balancing-solutions/blower-balancing/',
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

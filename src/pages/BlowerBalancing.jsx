import SEOPage from './SEOPage'

export default function BlowerBalancing() {
  return (
    <SEOPage
      eyebrow="INDUSTRIAL BLOWER ENGINEERING"
      title="Blower Balancing Services"
      intro="Industrial blower balancing services for centrifugal blowers, process blowers, induced-draft systems and other rotating blower assemblies."
      sections={[
        {
          heading: 'Industrial Blower Balancing',
          text: 'VibroTech Balancing provides blower balancing support for industrial rotating blowers where rotor unbalance can contribute to vibration, bearing loading, structural loading and reduced mechanical reliability.',
        },
        {
          heading: 'Blower Balancing Applications',
          text: 'Balancing requirements are evaluated according to blower construction, rotor geometry, operating speed, correction locations and the applicable equipment requirements.',
          items: [
            'Centrifugal blower balancing',
            'Industrial process blower balancing',
            'Induced-draft blower balancing',
            'Forced-draft blower balancing',
            'Root Blower balancing',
            'Large industrial blower balancing',
          ],
        },
        {
          heading: 'Why Blower Balancing Matters',
          text: 'Blower rotor unbalance generates centrifugal forces during operation and can contribute to vibration and mechanical loading. Proper balancing can help improve rotating stability and support reliable blower operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the blower rotor, operating speed, correction arrangement and machine installation. The balancing objective is considered together with blower construction, operating conditions and the required machine performance.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial process plants',
            'Power-plant blower systems',
            'Steel-plant blower equipment',
            'Petrochemical facilities',
            'Oil and gas facilities',
            'Forced-draft and induced-draft systems',
            'Industrial air-handling systems',
            'Marine and heavy industrial machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Fan Balancing',
          path: '/balancing-solutions/fan-balancing/',
        },
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
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

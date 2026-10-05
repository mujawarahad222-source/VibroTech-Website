import SEOPage from './SEOPage'

export default function AlternatorRotorBalancing() {
  return (
    <SEOPage
      eyebrow="ALTERNATOR ROTOR ENGINEERING"
      title="Alternator Rotor Balancing Services"
      intro="Industrial alternator rotor balancing services for generator rotors, turbo-generator assemblies, alternator shafts and critical power-generation rotating equipment."
      sections={[
        {
          heading: 'Industrial Alternator Rotor Balancing',
          text: 'VibroTech Balancing provides alternator and generator rotor balancing support where rotor unbalance can contribute to vibration, bearing loading, mechanical stress and reduced reliability during operation.',
        },
        {
          heading: 'Alternator Rotor Balancing Applications',
          text: 'Balancing requirements are evaluated according to rotor construction, shaft geometry, operating speed, mass distribution, correction locations and the applicable power-generation equipment requirements.',
          items: [
            'Alternator rotor balancing',
            'Generator rotor balancing',
            'Turbo-generator rotor balancing',
            'Alternator shaft and rotor assembly balancing',
            'Large power-generator rotor balancing',
            'Industrial rotating-generator component balancing',
          ],
        },
        {
          heading: 'Why Alternator Rotor Balancing Matters',
          text: 'Alternator and generator rotor unbalance can generate centrifugal forces at operating speed and contribute to vibration, bearing loading and mechanical stress. Proper balancing can help improve rotor stability and support reliable power-generation equipment operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the alternator or generator rotor together with its operating requirements. Rotor geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial alternators',
            'Large electrical generators',
            'Turbo-generator equipment',
            'Power-plant generator rotors',
            'Industrial power-generation machinery',
            'Petrochemical power-generation equipment',
            'Marine generator machinery',
            'Heavy industrial rotating equipment',
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
          title: 'Turbine Rotor Balancing',
          path: '/balancing-solutions/turbine-rotor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

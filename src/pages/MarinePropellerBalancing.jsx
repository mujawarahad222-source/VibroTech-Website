import SEOPage from './SEOPage'

export default function MarinePropellerBalancing() {
  return (
    <SEOPage
      eyebrow="MARINE ROTATING EQUIPMENT"
      title="Marine Propeller Balancing Services"
      intro="Industrial marine propeller balancing support for ship propellers, marine rotating components and critical propulsion equipment."
      sections={[
        {
          heading: 'Marine Propeller Balancing',
          text: 'VibroTech Balancing provides balancing support for marine propellers and rotating components where mass distribution and residual unbalance can influence vibration, bearing loading and propulsion-system behaviour during operation.',
        },
        {
          heading: 'Marine Balancing Applications',
          text: 'Balancing requirements are evaluated according to propeller geometry, mass distribution, operating speed, correction locations and the applicable marine equipment requirements.',
          items: [
            'Marine propeller balancing',
            'Ship propeller balancing support',
            'Propeller shaft rotating-component support',
            'Marine rotor balancing',
            'Naval propulsion rotating components',
            'Large marine rotating assemblies',
          ],
        },
        {
          heading: 'Why Propeller Balancing Matters',
          text: 'Propeller and rotating-component unbalance can generate centrifugal forces and vibration during operation. Proper balancing can help reduce unnecessary mechanical loading and contribute to smoother rotating-equipment performance.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the propeller or rotating component together with its operating requirements. Geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Commercial marine vessels',
            'Naval and defence vessels',
            'Coast Guard vessels',
            'Marine propulsion systems',
            'Shipyard rotating equipment',
            'Marine engine components',
            'Oil-rig rotating machinery',
            'Large industrial marine components',
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

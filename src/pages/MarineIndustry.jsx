import SEOPage from './SEOPage'

export default function MarineIndustry() {
  return (
    <SEOPage
      eyebrow="MARINE ROTATING EQUIPMENT ENGINEERING"
      title="Marine Industry Balancing & Vibration Services"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for marine vessels, shipyards, propulsion systems and critical marine machinery."
      sections={[
        {
          heading: 'Marine Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for marine applications where propellers, shafts, motors, pumps, fans and other rotating machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Marine Balancing Services',
          text: 'Marine rotating components are evaluated according to their geometry, mass distribution, operating speed, correction requirements and equipment application.',
          items: [
            'Marine propeller balancing',
            'Marine rotor balancing',
            'Hovercraft propeller balancing',
            'Propeller and rotating-component balancing support',
            'Pump and fan rotating-component balancing',
            'Large marine rotating assemblies',
          ],
        },
        {
          heading: 'Marine Vibration & Alignment',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting rotating machinery. Measurement and engineering assessment can be applied to marine motors, pumps, fans, gearboxes and other coupled rotating equipment.',
          items: [
            'Marine machinery vibration analysis',
            'Motor and pump vibration measurement',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
            'Coupled machinery alignment support',
          ],
        },
        {
          heading: "VibroTech's Marine Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment and related machining requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Marine Applications',
          items: [
            'Commercial marine vessels',
            'Naval and defence vessels',
            'Coast Guard vessels',
            'Shipyards and marine workshops',
            'Marine propulsion systems',
            'Marine engine and motor equipment',
            'Oil-rig and offshore machinery',
            'Large marine rotating equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Marine Propeller Balancing',
          path: '/balancing-solutions/marine-propeller-balancing/',
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
          title: 'Laser Shaft Alignment',
          path: '/services/laser-shaft-alignment/',
        },
      ]}
    />
  )
}

import SEOPage from './SEOPage'

export default function SteelPlantsIndustry() {
  return (
    <SEOPage
      eyebrow="STEEL PLANT ROTATING EQUIPMENT ENGINEERING"
      title="Steel Plant Rotating Equipment Services"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for steel plants, rolling mills, processing lines and critical heavy industrial machinery."
      sections={[
        {
          heading: 'Steel Plant Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for steel plants where motors, rolls, fans, blowers, pumps, gearboxes and other critical machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Steel Plant Balancing Services',
          text: 'Balancing requirements are evaluated according to rotor or roll geometry, mass distribution, operating speed, correction locations and the specific industrial application.',
          items: [
            'Motor rotor balancing',
            'Industrial roll balancing',
            'Fan and blower balancing',
            'Pump impeller balancing',
            'Gearbox and rotating-component balancing',
            'Large industrial rotor balancing',
          ],
        },
        {
          heading: 'Steel Plant Vibration & Alignment',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting heavy industrial machinery. Measurement and engineering assessment can be applied to motors, pumps, fans, blowers, gearboxes, rolls and other coupled rotating equipment.',
          items: [
            'Steel-plant machinery vibration analysis',
            'Motor and pump vibration measurement',
            'Rolling-mill equipment vibration assessment',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
          ],
        },
        {
          heading: "VibroTech's Steel Plant Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment, condition monitoring and related machining or shaft-grinding requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Steel Plant Applications',
          items: [
            'Integrated steel plants',
            'Rolling mills',
            'Steel processing lines',
            'Continuous casting equipment',
            'Steel-plant fans and blowers',
            'Industrial pumps and motors',
            'Large rolls and rotating components',
            'Heavy industrial rotating machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Roll Balancing',
          path: '/balancing-solutions/roll-balancing/',
        },
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
        },
        {
          title: 'Fan Balancing',
          path: '/balancing-solutions/fan-balancing/',
        },
        {
          title: 'Heavy Machining',
          path: '/services/heavy-machining/',
        },
      ]}
    />
  )
}

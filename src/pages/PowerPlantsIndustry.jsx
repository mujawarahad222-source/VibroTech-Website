import SEOPage from './SEOPage'

export default function PowerPlantsIndustry() {
  return (
    <SEOPage
      eyebrow="POWER GENERATION ROTATING EQUIPMENT ENGINEERING"
      title="Power Plant Rotating Equipment Services"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for power plants, generators, turbines, motors, pumps and critical power-generation machinery."
      sections={[
        {
          heading: 'Power Plant Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for power-generation facilities where turbines, generator rotors, motors, pumps, fans, compressors and other critical machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Power Plant Balancing Services',
          text: 'Balancing requirements are evaluated according to rotor geometry, mass distribution, operating speed, correction locations and the specific rotating-equipment application.',
          items: [
            'Turbine rotor balancing',
            'Alternator rotor balancing',
            'Generator rotor balancing',
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Fan and blower balancing',
          ],
        },
        {
          heading: 'Power Plant Vibration & Alignment',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting critical power-generation machinery. Measurement and engineering assessment can be applied to turbines, generators, motors, pumps, fans, compressors and other coupled rotating equipment.',
          items: [
            'Turbine vibration analysis',
            'Generator and alternator vibration measurement',
            'Motor and pump vibration analysis',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
          ],
        },
        {
          heading: "VibroTech's Power Plant Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment, condition monitoring and related machining requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Power Generation Applications',
          items: [
            'Thermal power plants',
            'Gas turbine power plants',
            'Steam turbine power plants',
            'Captive power plants',
            'Industrial power-generation facilities',
            'Power-plant auxiliary machinery',
            'Generator and alternator equipment',
            'Critical rotating power-generation equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Turbine Rotor Balancing',
          path: '/balancing-solutions/turbine-rotor-balancing/',
        },
        {
          title: 'Alternator Rotor Balancing',
          path: '/balancing-solutions/alternator-rotor-balancing/',
        },
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

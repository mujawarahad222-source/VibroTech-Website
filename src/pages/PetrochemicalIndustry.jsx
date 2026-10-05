import SEOPage from './SEOPage'

export default function PetrochemicalIndustry() {
  return (
    <SEOPage
      eyebrow="PETROCHEMICAL ROTATING EQUIPMENT ENGINEERING"
      title="Petrochemical Rotating Equipment Services"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for petrochemical plants, refineries, process units and critical rotating machinery."
      sections={[
        {
          heading: 'Petrochemical Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for petrochemical facilities where motors, pumps, compressors, fans, blowers, turbines and other critical process machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Petrochemical Balancing Services',
          text: 'Balancing requirements are evaluated according to rotor geometry, mass distribution, operating speed, correction locations and the specific rotating-equipment application.',
          items: [
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Compressor rotor balancing',
            'Fan and blower balancing',
            'Turbine rotor balancing',
            'Large industrial rotor balancing',
          ],
        },
        {
          heading: 'Petrochemical Vibration & Alignment',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting critical process machinery. Measurement and engineering assessment can be applied to motors, pumps, compressors, fans, blowers, turbines and other coupled rotating equipment.',
          items: [
            'Process machinery vibration analysis',
            'Motor and pump vibration measurement',
            'Compressor vibration analysis',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
          ],
        },
        {
          heading: "VibroTech's Petrochemical Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment, condition monitoring and related machining requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Petrochemical Applications',
          items: [
            'Petrochemical plants',
            'Refineries',
            'Process manufacturing facilities',
            'Chemical and hydrocarbon processing units',
            'Process pumps and compressors',
            'Gas turbine and steam turbine equipment',
            'Industrial fans and blowers',
            'Critical petrochemical rotating equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Compressor Rotor Balancing',
          path: '/balancing-solutions/compressor-balancing/',
        },
        {
          title: 'Pump Impeller Balancing',
          path: '/balancing-solutions/pump-balancing/',
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

import SEOPage from './SEOPage'

export default function OilGasIndustry() {
  return (
    <SEOPage
      eyebrow="OIL & GAS ROTATING EQUIPMENT ENGINEERING"
      title="Oil & Gas Rotating Equipment Services"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for oil and gas facilities, refineries, offshore machinery and critical process equipment."
      sections={[
        {
          heading: 'Oil & Gas Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for oil and gas applications where motors, pumps, compressors, fans, blowers, turbines and other critical machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Oil & Gas Balancing Services',
          text: 'Balancing requirements are evaluated according to rotor geometry, mass distribution, operating speed, correction locations and the specific rotating-equipment application.',
          items: [
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Compressor rotor balancing',
            'Fan and blower balancing',
            'Turbine rotor balancing',
            'Large industrial rotating-component balancing',
          ],
        },
        {
          heading: 'Oil & Gas Vibration & Alignment',
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
          heading: "VibroTech's Oil & Gas Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment, condition monitoring and related machining requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Oil & Gas Applications',
          items: [
            'Oil and gas facilities',
            'Refineries',
            'Petrochemical process facilities',
            'Offshore oil-rig machinery',
            'Process pumps and compressors',
            'Gas turbine and steam turbine equipment',
            'Industrial fans and blowers',
            'Critical rotating process equipment',
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

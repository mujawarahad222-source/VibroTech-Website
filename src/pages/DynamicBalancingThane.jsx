import SEOPage from './SEOPage'

export default function DynamicBalancingThane() {
  return (
    <SEOPage
      eyebrow="THANE INDUSTRIAL BALANCING"
      title="Dynamic Balancing Services in Thane"
      intro="Industrial dynamic balancing services for Thane industries, manufacturers, rotating-equipment users and engineering companies requiring precision balancing support."
      sections={[
        {
          heading: 'Dynamic Balancing in Thane',
          text: 'VibroTech Balancing provides industrial dynamic balancing support for customers in Thane and the surrounding industrial region. Balancing requirements are assessed according to rotor geometry, mass distribution, operating speed, correction locations and the specific equipment application.',
        },
        {
          heading: 'Rotating Equipment We Balance',
          text: 'Balancing support can be provided for a wide range of industrial rotating components where controlled residual unbalance and stable operation are important.',
          items: [
            'Industrial electric motor rotors',
            'Pump impellers and rotating assemblies',
            'Fans and blowers',
            'Compressor rotors',
            'Turbine and generator rotors',
            'Alternator rotors',
            'Industrial rolls and rotating components',
            'Marine rotating equipment',
          ],
        },
        {
          heading: 'Dynamic Balancing for Thane Industries',
          text: 'Thane and its surrounding industrial areas support manufacturing, engineering, chemical, pharmaceutical, process and other industrial activities where rotating machinery requires reliable balancing and engineering support.',
          items: [
            'Manufacturing and engineering equipment',
            'Chemical and process machinery',
            'Pharmaceutical industrial equipment',
            'Power and utility rotating machinery',
            'Pump and fan systems',
            'Heavy industrial rotating equipment',
          ],
        },
        {
          heading: "VibroTech's Thane Service Location",
          text: 'VibroTech Balancing operates from Navi Mumbai and provides access to industrial customers across Thane and the wider Mumbai Metropolitan Region. This location supports balancing requirements for motors, rotors, pumps, fans, blowers, compressors and other rotating equipment.',
        },
        {
          heading: 'Related Rotating Equipment Services',
          items: [
            'Dynamic balancing',
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Fan and blower balancing',
            'Compressor rotor balancing',
            'Vibration analysis',
            'Laser shaft alignment',
            'Condition monitoring',
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
          title: 'Pump Balancing',
          path: '/balancing-solutions/pump-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

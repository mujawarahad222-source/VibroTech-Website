import SEOPage from './SEOPage'

export default function DynamicBalancingPune() {
  return (
    <SEOPage
      eyebrow="PUNE INDUSTRIAL BALANCING"
      title="Dynamic Balancing Services in Pune"
      intro="Industrial dynamic balancing services for Pune manufacturers, engineering companies, power and process industries, and users of critical rotating equipment."
      sections={[
        {
          heading: 'Dynamic Balancing in Pune',
          text: 'VibroTech Balancing provides industrial dynamic balancing support for customers in Pune and the surrounding industrial region. Balancing requirements are evaluated according to rotor geometry, mass distribution, operating speed, correction locations and the specific rotating-equipment application.',
        },
        {
          heading: 'Rotating Equipment We Balance',
          text: 'Balancing support covers a range of industrial rotating components where controlled residual unbalance, vibration reduction and reliable machine operation are important.',
          items: [
            'Industrial electric motor rotors',
            'Pump impellers and rotating assemblies',
            'Fans and blowers',
            'Compressor rotors',
            'Turbine and generator rotors',
            'Alternator rotors',
            'Industrial rolls and large rotating components',
            'Marine rotating equipment',
          ],
        },
        {
          heading: 'Dynamic Balancing for Pune Industries',
          text: 'Pune has a major manufacturing and engineering base with automotive, industrial machinery, process, power and other engineering applications where rotating equipment requires precision balancing and related engineering support.',
          items: [
            'Manufacturing and engineering machinery',
            'Automotive industrial equipment',
            'Industrial motor and pump systems',
            'Power and utility rotating machinery',
            'Process and production equipment',
            'Heavy industrial rotating components',
          ],
        },
        {
          heading: "VibroTech's Pune Service Location",
          text: 'VibroTech Balancing operates from Navi Mumbai and provides balancing support for industrial customers across Maharashtra, including Pune. The service location supports requirements involving motor rotors, pumps, fans, blowers, compressors, turbines and other rotating equipment.',
        },
        {
          heading: 'Related Rotating Equipment Services',
          items: [
            'Dynamic balancing',
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Fan and blower balancing',
            'Compressor rotor balancing',
            'Turbine rotor balancing',
            'Vibration analysis',
            'Laser shaft alignment',
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
          title: 'Compressor Rotor Balancing',
          path: '/balancing-solutions/compressor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

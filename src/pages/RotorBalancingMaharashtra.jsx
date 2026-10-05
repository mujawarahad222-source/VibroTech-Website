import SEOPage from './SEOPage'

export default function RotorBalancingMaharashtra() {
  return (
    <SEOPage
      eyebrow="MAHARASHTRA ROTOR BALANCING"
      title="Rotor Balancing Services in Maharashtra"
      intro="Industrial rotor balancing services for Maharashtra industries, including motor rotors, pump rotors, fan and blower rotors, turbine rotors, compressor rotors and other critical rotating equipment."
      sections={[
        {
          heading: 'Rotor Balancing in Maharashtra',
          text: 'VibroTech Balancing provides industrial rotor balancing support for customers across Maharashtra. Balancing requirements are evaluated according to rotor geometry, mass distribution, operating speed, correction locations and the specific rotating-equipment application.',
        },
        {
          heading: 'Rotor Types We Balance',
          text: 'Different rotor designs require an assessment of their geometry, operating conditions and balancing requirements before the balancing process is planned.',
          items: [
            'Electric motor rotors',
            'Generator and alternator rotors',
            'Pump rotors and impellers',
            'Fan and blower rotors',
            'Compressor rotors',
            'Turbine rotors',
            'Marine rotating components',
            'Industrial rolls and large rotating components',
          ],
        },
        {
          heading: 'Rotor Balancing Applications',
          text: 'Rotor balancing can be applied across a wide range of industrial sectors where rotating machinery requires controlled residual unbalance and stable operating performance.',
          items: [
            'Power-generation machinery',
            'Marine and shipyard equipment',
            'Oil and gas machinery',
            'Petrochemical process equipment',
            'Steel-plant rotating machinery',
            'Industrial manufacturing equipment',
            'Heavy engineering machinery',
            'Critical rotating equipment',
          ],
        },
        {
          heading: "VibroTech's Maharashtra Service Location",
          text: 'VibroTech Balancing operates from Navi Mumbai and serves industrial customers across Maharashtra. The location provides access to the major industrial regions of Mumbai, Navi Mumbai, Thane, Pune and other manufacturing and engineering centres in the state.',
        },
        {
          heading: 'Related Rotor Engineering Services',
          items: [
            'Dynamic balancing',
            'Motor rotor balancing',
            'Marine propeller balancing',
            'Turbine rotor balancing',
            'Alternator rotor balancing',
            'Compressor rotor balancing',
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
          title: 'High-Speed Rotor Balancing',
          path: '/balancing-solutions/high-speed-rotor-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

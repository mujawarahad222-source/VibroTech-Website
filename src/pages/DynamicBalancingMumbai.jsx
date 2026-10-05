import SEOPage from './SEOPage'

export default function DynamicBalancingMumbai() {
  return (
    <SEOPage
      eyebrow="MUMBAI INDUSTRIAL BALANCING"
      title="Dynamic Balancing Services in Mumbai"
      intro="Industrial dynamic balancing services for Mumbai industries, manufacturers, marine equipment, power plants, oil and gas facilities and critical rotating machinery."
      sections={[
        {
          heading: 'Dynamic Balancing in Mumbai',
          text: 'VibroTech Balancing provides industrial dynamic balancing support for customers across Mumbai and the surrounding industrial region. Balancing work is focused on reducing residual unbalance in rotating components and supporting reliable machine operation.',
        },
        {
          heading: 'Rotating Equipment We Balance',
          text: 'Each balancing requirement is evaluated according to component geometry, mass distribution, operating speed, correction locations and the specific equipment application.',
          items: [
            'Industrial electric motor rotors',
            'Pump impellers and rotating assemblies',
            'Fans and blowers',
            'Compressor rotors',
            'Turbine rotors',
            'Alternator and generator rotors',
            'Marine propellers and rotating components',
            'Industrial rolls and large rotating components',
          ],
        },
        {
          heading: 'Dynamic Balancing for Mumbai Industries',
          text: 'Mumbai and the surrounding industrial region include marine, manufacturing, power-generation, oil and gas, petrochemical and heavy engineering applications where rotating equipment requires controlled balancing and engineering support.',
          items: [
            'Marine and shipyard machinery',
            'Industrial manufacturing equipment',
            'Power-generation rotating machinery',
            'Oil and gas equipment',
            'Petrochemical process machinery',
            'Steel and heavy industrial equipment',
          ],
        },
        {
          heading: "VibroTech's Mumbai Service Location",
          text: 'VibroTech Balancing operates from Navi Mumbai, providing access to customers across Mumbai and the wider industrial belt. The location supports industrial balancing requirements for rotating equipment used in manufacturing, marine, power and process industries.',
        },
        {
          heading: 'Balancing & Related Services',
          items: [
            'Dynamic balancing',
            'Motor rotor balancing',
            'Marine propeller balancing',
            'Fan and blower balancing',
            'Pump impeller balancing',
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
          title: 'Marine Propeller Balancing',
          path: '/balancing-solutions/marine-propeller-balancing/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

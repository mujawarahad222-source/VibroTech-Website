import SEOPage from './SEOPage'

export default function HeavyMachining() {
  return (
    <SEOPage
      eyebrow="HEAVY ENGINEERING SUPPORT"
      title="Heavy Machining Services"
      intro="Industrial heavy machining support for shafts, rotors, large rotating components and critical machine parts."
      sections={[
        {
          heading: 'Industrial Heavy Machining',
          text: 'VibroTech Balancing provides heavy machining support for industrial shafts, rollers, rotors and large machine components where dimensional accuracy, component condition and preparation for further engineering work are important.',
        },
        {
          heading: 'Machining Applications',
          text: 'Machining requirements are evaluated according to the component geometry, material, dimensional requirement and intended machine application.',
          items: [
            'Large industrial shaft machining',
            'Rotor and rotating-component machining',
            'Heavy component dimensional correction',
            'Machining preparation for balancing',
            'Machining support for repaired components',
            'Industrial machine-component work',
          ],
        },
        {
          heading: 'Component Preparation',
          text: 'Proper machining and component preparation can be important before balancing, grinding, alignment or installation. Dimensional condition, shaft geometry and component surfaces are considered according to the required engineering work.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach connects heavy machining support with the broader requirements of rotating equipment. Where appropriate, machining work can be considered alongside balancing, vibration analysis, shaft alignment and other rotating-equipment services.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial motor shafts',
            'Large rotors',
            'Pump and turbine components',
            'Fan and blower components',
            'Marine rotating components',
            'Power-plant machinery components',
            'Steel-plant equipment',
            'Heavy industrial machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Shaft Grinding',
          path: '/services/shaft-grinding/',
        },
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
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

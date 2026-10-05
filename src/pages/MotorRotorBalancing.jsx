import SEOPage from './SEOPage'

export default function MotorRotorBalancing() {
  return (
    <SEOPage
      eyebrow="MOTOR ROTOR ENGINEERING"
      title="Motor Rotor Balancing Services"
      intro="Industrial motor rotor balancing for electric motors, rotating shafts and critical motor assemblies."
      sections={[
        {
          heading: 'Industrial Motor Rotor Balancing',
          text: 'VibroTech Balancing provides motor rotor balancing support for industrial electric motors and rotating assemblies where rotor unbalance can contribute to vibration, bearing loading and mechanical stress during operation.',
        },
        {
          heading: 'Motor Rotor Balancing Applications',
          text: 'Balancing requirements are evaluated according to rotor construction, operating speed, rotor geometry, correction-plane arrangement and the applicable balancing objective.',
          items: [
            'Industrial motor rotor balancing',
            'HT motor rotor balancing',
            'LT motor rotor balancing',
            'Motor shaft and rotor assembly balancing',
            'Large electric motor rotor balancing',
            'Coupled rotating-component balancing',
          ],
        },
        {
          heading: 'Why Motor Rotor Balancing Matters',
          text: 'Rotor unbalance produces centrifugal forces that increase with rotational speed. Correctly addressing rotor unbalance can help reduce vibration and mechanical loading and support more reliable motor operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the complete motor rotor assembly and its operating requirements. Rotor geometry, mass distribution, operating speed, correction locations and the required balancing objective are considered when planning the balancing work.',
        },
        {
          heading: 'Applications',
          items: [
            'HT and LT industrial motors',
            'Large electric motors',
            'Induction motors',
            'Synchronous motors',
            'Motor rotors and shafts',
            'Marine motor assemblies',
            'Power-plant motor equipment',
            'Industrial rotating machinery',
          ],
        },
      ]}
      related={[
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
        {
          title: 'Condition Monitoring',
          path: '/services/condition-monitoring/',
        },
      ]}
    />
  )
}

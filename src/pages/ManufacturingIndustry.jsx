import SEOPage from './SEOPage'

export default function ManufacturingIndustry() {
  return (
    <SEOPage
      eyebrow="MANUFACTURING ROTATING EQUIPMENT ENGINEERING"
      title="Rotating Equipment Services for Manufacturing Industry"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for manufacturers, production facilities, machinery builders and critical industrial equipment."
      sections={[
        {
          heading: 'Rotating Equipment Services for Manufacturing Industry',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for manufacturing facilities where motors, pumps, fans, blowers, gearboxes, compressors, rolls and other critical machinery require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Balancing Services for manufacturers',
          text: 'Balancing requirements are evaluated according to rotor or component geometry, mass distribution, operating speed, correction locations and the specific industrial application.',
          items: [
            'Motor rotor balancing',
            'Pump impeller balancing',
            'Fan and blower balancing',
            'Gearbox and rotating-component balancing',
            'Industrial roll balancing',
            'Large machine rotor balancing',
          ],
        },
        {
          heading: 'Vibration Analysis & Shaft Alignment service for manufacturers',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting production machinery. Measurement and engineering assessment can be applied to motors, pumps, fans, blowers, gearboxes, compressors, rolls and other coupled rotating equipment.',
          items: [
            'Production machinery vibration analysis',
            'Motor and pump vibration measurement',
            'Gearbox vibration assessment',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
          ],
        },
        {
          heading: "VibroTech's approach towards manufacturing units",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment, condition monitoring and related machining or shaft-grinding requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Manufacturing Applications',
          items: [
            'Industrial manufacturing plants',
            'Machinery manufacturers',
            'Production and process facilities',
            'Automotive and component manufacturing',
            'Engineering and fabrication facilities',
            'Industrial motors and gearboxes',
            'Fans, blowers and pumps',
            'Critical manufacturing machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
        },
        {
          title: 'Fan Balancing',
          path: '/balancing-solutions/fan-balancing/',
        },
        {
          title: 'Pump Impeller Balancing',
          path: '/balancing-solutions/pump-balancing/',
        },
        {
          title: 'Laser Shaft Alignment',
          path: '/services/laser-shaft-alignment/',
        },
      ]}
    />
  )
}

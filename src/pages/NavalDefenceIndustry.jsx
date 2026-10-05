import SEOPage from './SEOPage'

export default function NavalDefenceIndustry() {
  return (
    <SEOPage
      eyebrow="NAVAL & DEFENCE ROTATING EQUIPMENT ENGINEERING"
      title="Services for Naval & Defence sector"
      intro="Industrial balancing, vibration analysis, shaft alignment and rotating-equipment engineering support for naval vessels, Coast Guard vessels, defence machinery and critical marine propulsion systems."
      sections={[
        {
          heading: 'Naval & Defence Rotating Equipment Services',
          text: 'VibroTech Balancing provides rotating-equipment engineering support for naval and defence applications where propulsion machinery, motors, propellers, shafts, pumps, fans and other critical rotating equipment require controlled balancing, vibration assessment and mechanical engineering support.',
        },
        {
          heading: 'Naval Balancing Services',
          text: 'Balancing requirements for naval and defence rotating components are evaluated according to component geometry, mass distribution, operating speed, correction requirements and the specific equipment application.',
          items: [
            'Marine propeller balancing',
            'Hovercraft propeller balancing',
            'Naval motor rotor balancing',
            'Propeller shaft rotating-component support',
            'Naval pump and fan balancing',
            'Large defence rotating assemblies',
          ],
        },
        {
          heading: 'Naval Vibration & Alignment',
          text: 'Vibration analysis and shaft alignment can help identify mechanical conditions affecting critical naval rotating machinery. Measurement and engineering assessment can be applied to motors, pumps, fans, gearboxes and other coupled rotating equipment.',
          items: [
            'Naval machinery vibration analysis',
            'Marine motor and pump vibration measurement',
            'Laser shaft alignment',
            'Rotating-equipment condition assessment',
            'Bearing and mechanical vibration assessment',
            'Coupled machinery alignment support',
          ],
        },
        {
          heading: "VibroTech's Defence Engineering Approach",
          text: 'Our approach considers the rotating component, operating conditions and equipment application together. Balancing, vibration analysis, alignment and related machining requirements can be considered as connected parts of the rotating-equipment engineering process.',
        },
        {
          heading: 'Naval & Defence Applications',
          items: [
            'Indian Navy vessels',
            'Coast Guard vessels',
            'Naval propulsion systems',
            'Defence shipyards and marine workshops',
            'Naval engine and motor equipment',
            'Marine defence rotating machinery',
            'Offshore and patrol vessels',
            'Critical defence rotating equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Marine Propeller Balancing',
          path: '/balancing-solutions/marine-propeller-balancing/',
        },
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
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

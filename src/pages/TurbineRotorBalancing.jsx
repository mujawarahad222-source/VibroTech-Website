import SEOPage from './SEOPage'

export default function TurbineRotorBalancing() {
  return (
    <SEOPage
      eyebrow="TURBINE ROTOR ENGINEERING"
      title="Turbine Rotor Balancing Services"
      intro="Industrial turbine rotor balancing services for steam turbines, gas turbines, turbine shafts and critical high-speed rotating equipment."
      sections={[
        {
          heading: 'Industrial Turbine Rotor Balancing',
          text: 'VibroTech Balancing provides turbine rotor balancing support for steam turbines, gas turbines and other critical rotating assemblies where rotor unbalance can contribute to vibration, bearing loading and mechanical stress during operation.',
        },
        {
          heading: 'Turbine Rotor Balancing Applications',
          text: 'Balancing requirements are evaluated according to rotor construction, shaft geometry, operating speed, correction locations, rotor configuration and the applicable equipment requirements.',
          items: [
            'Steam turbine rotor balancing',
            'Gas turbine rotor balancing',
            'Turbine shaft and rotor assembly balancing',
            'Multistage turbine rotor balancing',
            'Industrial turbine rotating-component balancing',
            'Large turbine rotor balancing',
          ],
        },
        {
          heading: 'Why Turbine Rotor Balancing Matters',
          text: 'Turbine rotor unbalance can generate significant centrifugal forces at operating speed and contribute to vibration, bearing loading and mechanical stress. Proper balancing can help improve rotor stability and support reliable turbine operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the turbine rotor together with its operating requirements. Rotor geometry, mass distribution, operating speed, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Steam turbine equipment',
            'Gas turbine equipment',
            'Power-plant turbine machinery',
            'Industrial process turbines',
            'Petrochemical turbine equipment',
            'Oil and gas rotating machinery',
            'Marine turbine machinery',
            'Large industrial rotating equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Compressor Rotor Balancing',
          path: '/balancing-solutions/compressor-balancing/',
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

import SEOPage from './SEOPage'

export default function DynamicBalancingNaviMumbai() {
  return (
    <SEOPage
      eyebrow="NAVI MUMBAI INDUSTRIAL BALANCING"
      title="Dynamic Balancing Services in Navi Mumbai"
      intro="Industrial dynamic balancing services in Navi Mumbai for motor rotors, pumps, fans, blowers, compressors, turbines, marine components and other rotating equipment."
      sections={[
        {
          heading: 'Dynamic Balancing in Navi Mumbai',
          text: 'VibroTech Balancing provides industrial dynamic balancing support from Navi Mumbai for rotating components where controlled mass distribution, reduced residual unbalance and stable operation are important.',
        },
        {
          heading: 'Rotating Equipment We Balance',
          text: 'Balancing requirements are evaluated according to component geometry, mass distribution, operating speed, correction locations and the specific equipment application.',
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
          heading: 'Why Dynamic Balancing Matters',
          text: 'Rotor unbalance can generate centrifugal forces during rotation and contribute to vibration, bearing loading and mechanical stress. Proper balancing can help reduce these effects and support smoother operation of rotating machinery.',
        },
        {
          heading: "VibroTech's Navi Mumbai's Location",
          text: 'Our balancing approach considers rotor geometry, operating speed, correction-plane arrangement, mass distribution and the required balancing objective. The applicable balance quality and residual-unbalance requirements are determined according to the rotor and equipment application.',
        },
        {
          heading: 'Industries We Serve',
          items: [
            'Marine and shipyard equipment',
            'Naval and defence machinery',
            'Power-generation equipment',
            'Oil and gas machinery',
            'Petrochemical plants',
            'Steel plants and rolling mills',
            'Industrial manufacturing units',
            'Heavy rotating machinery',
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

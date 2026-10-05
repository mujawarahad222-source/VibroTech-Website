import SEOPage from './SEOPage'

export default function DynamicBalancing() {
  return (
    <SEOPage
      eyebrow="INDUSTRIAL ROTATING EQUIPMENT"
      title="Dynamic Balancing Services"
      intro="Industrial dynamic balancing services for motors, rotors, fans, blowers, pumps, propellers, turbines, marine components and other rotating equipment."
      sections={[
        {
          heading: 'Industrial Dynamic Balancing',
          text: 'VibroTech Balancing approaches dynamic balancing as a controlled rotor-correction process focused on reducing residual unbalance and the resulting centrifugal forces generated during rotation. The engineering assessment considers rotor mass, geometry, operating speed, correction radius, correction-plane arrangement and the permissible residual unbalance required for the application. For rigid rotors, balancing tolerances and balance quality can be established with reference to ISO 21940-11, which provides procedures and tolerances for the balancing of rigid rotors. Where flexible-rotor behaviour is relevant, ISO 21940-12 provides guidance for balancing flexible rotors. The assessment of balancing errors and their influence on the final residual unbalance can also be considered with reference to ISO 21940-14. The applicable balance quality, permissible residual unbalance and acceptance criteria are determined according to the rotor characteristics, operating speed, balancing requirements and customer or equipment specifications.',
        },
        {
          heading: 'Rotor Balancing',
          text: 'Balancing support is available for industrial motor rotors and a wide range of rotating components. The objective is to reduce residual unbalance and improve the running condition of the assembled rotating system.',
          items: [
            'Industrial motor rotor balancing',
            'Rotating shaft and roller balancing',
            'Fan and blower balancing',
            'Pump impeller and rotating-component balancing',
            'Turbine and alternator rotor balancing',
            'Propeller & other marine component related support',
          ],
        },
        {
          heading: 'Why Dynamic Balancing Matters',
          text: 'Rotor unbalance creates centrifugal forces that increase with speed. Correctly addressing unbalance can help reduce vibration and mechanical loading and can contribute to more reliable rotating-equipment operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach combines balancing capability with practical engineering understanding of rotating machinery. The work is considered in relation to rotor design, operating conditions, machine application and the required balancing objective.',
        },
        {
          heading: 'Industries Served',
          items: [
            'Marine and ship-related applications',
            'Naval and defence equipment',
            'Power plants',
            'Oil and gas',
            'Petrochemical plants',
            'Steel plants',
            'Industrial manufacturers',
          ],
        },
      ]}
      related={[
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
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
          title: 'Laser Shaft Alignment',
          path: '/services/laser-shaft-alignment/',
        },
      ]}
    />
  )
}

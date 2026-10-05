import SEOPage from './SEOPage'

export default function LaserShaftAlignment() {
  return (
    <SEOPage
      eyebrow="ROTATING EQUIPMENT ALIGNMENT"
      title="Laser Shaft Alignment Services"
      intro="Industrial laser shaft alignment for motors, pumps, gearboxes, compressors and other coupled rotating machinery."
      sections={[
        {
          heading: 'Industrial Laser Shaft Alignment',
          text: 'VibroTech Balancing provides laser shaft alignment services for coupled rotating machinery where accurate shaft and coupling alignment is important for reliable operation. Alignment work considers the relative position of connected shafts and the machine movement required to achieve the specified alignment condition.',
        },
        {
          heading: 'Shaft Alignment Measurement',
          text: 'Laser alignment systems can measure angular and parallel misalignment between coupled shafts. Measurements are evaluated according to the machine arrangement, coupling configuration, shaft geometry, operating requirements and applicable alignment tolerances.',
          items: [
            'Angular misalignment assessment',
            'Parallel or offset misalignment assessment',
            'Coupled motor and pump alignment',
            'Motor and gearbox alignment',
            'Horizontal machine alignment',
            'Alignment verification after correction',
          ],
        },
        {
          heading: 'Why Shaft Alignment Matters',
          text: 'Incorrect shaft alignment can contribute to increased vibration, coupling loading, bearing loading and mechanical wear. Proper alignment can help reduce unnecessary mechanical stresses and support more reliable operation of coupled rotating equipment.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the complete rotating-equipment arrangement rather than treating alignment as an isolated measurement. Machine design, coupling arrangement, shaft condition, operating requirements and the required alignment tolerance are considered when planning and performing alignment work.',
        },
        {
          heading: 'Applications',
          items: [
            'Electric motor and pump sets',
            'Motor and gearbox assemblies',
            'Industrial compressors',
            'Fans and blowers',
            'Coupled rotating machinery',
            'Marine and oil rig machinery',
            'Power-plant rotating equipment',
            'Industrial manufacturing machinery',
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
          title: 'Condition Monitoring',
          path: '/services/condition-monitoring/',
        },
        {
          title: 'Motor Rotor Balancing',
          path: '/balancing-solutions/motor-rotor-balancing/',
        },
      ]}
    />
  )
}

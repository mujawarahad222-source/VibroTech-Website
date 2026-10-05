import SEOPage from './SEOPage'

export default function Thermography() {
  return (
    <SEOPage
      eyebrow="INFRARED MACHINE INSPECTION"
      title="Thermography Services"
      intro="Industrial infrared thermography for electrical systems, motors, rotating equipment, panels and critical machinery."
      sections={[
        {
          heading: 'Industrial Thermography',
          text: 'VibroTech Balancing provides thermography services using infrared temperature measurement to identify abnormal thermal patterns in electrical and mechanical equipment. Infrared inspection can help locate areas of excessive heating that may require further engineering investigation or maintenance attention.',
        },
        {
          heading: 'Thermal Inspection',
          text: 'Thermal inspections can be performed on accessible equipment and components according to the operating condition and inspection requirement.',
          items: [
            'Electrical panel and connection inspection',
            'Motor and rotating-equipment thermal inspection',
            'Bearing and housing temperature assessment',
            'Cable, terminal and connection inspection',
            'Mechanical component thermal patterns',
            'Thermal comparison between similar components',
          ],
        },
        {
          heading: 'What Thermography Can Identify',
          text: 'Abnormal temperature patterns can provide useful evidence of developing electrical or mechanical conditions. Thermal interpretation should consider equipment loading, ambient conditions, component design and operating state.',
          items: [
            'Loose or high-resistance electrical connections',
            'Abnormal electrical heating',
            'Overloaded electrical components',
            'Bearing or mechanical heating',
            'Uneven thermal behaviour',
            'Other abnormal temperature conditions',
          ],
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach combines infrared inspection with practical knowledge of industrial machinery. Thermal observations are considered together with equipment type, operating conditions and the surrounding machine environment so that abnormal thermal patterns can be investigated more effectively.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial electric motors',
            'Electrical panels and switchgear',
            'Power-plant equipment',
            'Pumps and rotating machinery',
            'Fans and blowers',
            'Industrial manufacturing equipment',
            'Marine and oil rig machinery',
            'Critical electrical and mechanical systems',
          ],
        },
      ]}
      related={[
        {
          title: 'Condition Monitoring',
          path: '/services/condition-monitoring/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Laser Shaft Alignment',
          path: '/services/laser-shaft-alignment/',
        },
      ]}
    />
  )
}

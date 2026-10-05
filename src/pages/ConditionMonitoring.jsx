import SEOPage from './SEOPage'

export default function ConditionMonitoring() {
  return (
    <SEOPage
      eyebrow="MACHINE HEALTH MONITORING"
      title="Condition Monitoring Services"
      intro="Industrial condition monitoring for motors, pumps, fans, blowers, gearboxes, compressors and other critical rotating equipment."
      sections={[
        {
          heading: 'Industrial Condition Monitoring',
          text: 'VibroTech Balancing provides condition monitoring support for rotating machinery by observing machine measurements and identifying changes in operating behaviour. Monitoring can help establish a clearer understanding of machine condition and support maintenance planning before abnormal conditions develop into major equipment problems.',
        },
        {
          heading: 'Condition Monitoring Measurements',
          text: 'The monitoring approach can use relevant machine-condition parameters according to the equipment type, operating environment and diagnostic requirement.',
          items: [
            'Vibration measurement and trending',
            'Temperature monitoring',
            'Machine-speed related condition assessment',
            'Bearing condition observations',
            'Trend comparison over time',
            'Operating-condition based assessment',
          ],
        },
        {
          heading: 'What Condition Monitoring Can Identify',
          text: 'Changes in monitored parameters can provide early indications of developing machine problems. Interpretation is based on the equipment design, operating condition, measurement location and historical behaviour.',
          items: [
            'Increasing vibration levels',
            'Abnormal temperature changes',
            'Bearing-related condition changes',
            'Mechanical looseness or developing faults',
            'Changes in rotating-equipment behaviour',
            'Other machine-specific abnormal conditions',
          ],
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach combines measurement, trend observation and practical rotating-equipment knowledge. Rather than relying on a single reading, machine behaviour can be reviewed over time so that significant changes become easier to identify and investigate.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial electric motors',
            'Pump systems',
            'Fans and blowers',
            'Gearboxes and coupled machinery',
            'Compressors',
            'Turbines and rotating equipment',
            'Marine and oil rig machinery',
            'Power-plant rotating equipment',
          ],
        },
      ]}
      related={[
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
        {
          title: 'Thermography',
          path: '/services/thermography/',
        },
      ]}
    />
  )
}

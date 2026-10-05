import SEOPage from './SEOPage'

export default function VibrationAnalysis() {
  return (
    <SEOPage
      eyebrow="MACHINE CONDITION DIAGNOSTICS"
      title="Vibration Analysis Services"
      intro="Industrial vibration analysis for motors, pumps, fans, blowers, gearboxes, rotating machinery and other critical equipment."
      sections={[
        {
          heading: 'Industrial Vibration Analysis',
          text: 'VibroTech Balancing provides vibration measurement and detailed analysis for rotating machinery to identify abnormal vibration behaviour, machine-condition changes and potential mechanical problems. Measurements can be evaluated in relation to machine speed, vibration amplitude, frequency components and operating conditions.',
        },
        {
          heading: 'Vibration Measurement',
          text: 'Vibration measurements are collected at relevant machine locations and directions according to the equipment arrangement and diagnostic requirement. Typical measurement points include drive-end and non-drive-end bearing locations with vertical, horizontal and axial measurement directions.',
          items: [
            'Overall vibration measurement',
            'Velocity, acceleration and displacement assessment',
            'Bearing-point vibration measurement',
            'Horizontal, vertical and axial measurements',
            'Machine-speed and frequency-related analysis',
            'Trend comparison for changing machine condition',
          ],
        },
        {
          heading: 'What Vibration Analysis Can Identify',
          text: 'Frequency-domain and time-domain characteristics can provide useful evidence about the behaviour of rotating machinery. The interpretation depends on the machine design, operating speed, measurement location and observed vibration pattern.',
          items: [
            'Rotor unbalance',
            'Shaft misalignment',
            'Mechanical looseness',
            'Bearing-related vibration',
            'Coupling and rotating-component issues',
            'Mechanical resonance and abnormal vibration behaviour',
            'Other machine-specific vibration conditions, etc.',
          ],
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach combines measured vibration data with practical knowledge of rotating equipment. Machine speed, design, bearing arrangement, coupling configuration, operating condition and historical trends are considered when interpreting vibration behaviour. The objective is to turn vibration measurements into useful engineering information for maintenance and troubleshooting decisions.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial electric motors',
            'Pump impellers single/multistage',
            'Fans and blowers',
            'Gearboxes and coupled machinery',
            'Compressors single/multi stage',
            'Turbines and rotating equipment',
            'Marine and oil rig machinery',
            'Power-plant rotating equipment',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Laser Shaft Alignment',
          path: '/services/laser-shaft-alignment/',
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

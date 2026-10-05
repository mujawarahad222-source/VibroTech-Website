import SEOPage from './SEOPage'

export default function VibrationAnalysisNaviMumbai() {
  return (
    <SEOPage
      eyebrow="NAVI MUMBAI VIBRATION ENGINEERING"
      title="Vibration Analysis Services in Navi Mumbai"
      intro="Industrial vibration analysis services in Navi Mumbai for electric motors, pumps, fans, blowers, gearboxes, compressors and critical rotating machinery."
      sections={[
        {
          heading: 'Vibration Analysis in Navi Mumbai',
          text: 'VibroTech Balancing provides industrial vibration analysis support in Navi Mumbai for rotating machinery where vibration measurement and engineering assessment are important for understanding machine condition and identifying potential mechanical issues.',
        },
        {
          heading: 'Machines Covered',
          text: 'Vibration assessment can be applied to a wide range of industrial rotating equipment according to the machine design, operating conditions and measurement requirements.',
          items: [
            'Industrial electric motors',
            'Pumps and pump assemblies',
            'Fans and blowers',
            'Gearboxes and coupled machinery',
            'Compressors',
            'Turbines and rotating equipment',
            'Marine rotating machinery',
            'Critical industrial rotating equipment',
          ],
        },
        {
          heading: 'Vibration Analysis Applications',
          text: 'Vibration measurements can help assess mechanical conditions affecting rotating machinery. The analysis considers measured vibration behaviour together with machine operating conditions and equipment characteristics.',
          items: [
            'Overall vibration assessment',
            'Bearing and mechanical vibration assessment',
            'Motor and pump vibration measurement',
            'Coupled machinery assessment',
            'Rotating-equipment condition assessment',
            'Vibration investigation for abnormal machine behaviour',
          ],
        },
        {
          heading: "VibroTech's Navi Mumbai Location",
          text: 'VibroTech Balancing operates from Navi Mumbai and provides vibration analysis support for industrial customers across the surrounding manufacturing and industrial region. The location provides access to marine, manufacturing, power, oil and gas and other rotating-equipment applications.',
        },
        {
          heading: 'Related Rotating Equipment Services',
          items: [
            'Dynamic balancing',
            'Motor rotor balancing',
            'Laser shaft alignment',
            'Condition monitoring',
            'Thermography',
            'Heavy machining',
            'Shaft grinding',
            'Marine propeller balancing',
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
          title: 'Condition Monitoring',
          path: '/services/condition-monitoring/',
        },
      ]}
    />
  )
}

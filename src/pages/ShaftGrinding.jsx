import SEOPage from './SEOPage'

export default function ShaftGrinding() {
  return (
    <SEOPage
      eyebrow="PRECISION SHAFT FINISHING"
      title="Shaft Grinding Services"
      intro="Industrial shaft grinding support for turbine shafts, rotor shafts, rollers and critical rotating components."
      sections={[
        {
          heading: 'Industrial Shaft Grinding',
          text: 'VibroTech Balancing provides shaft grinding support for industrial shafts, rollers, rotor shafts and other rotating components where surface condition, dimensional accuracy and shaft geometry are important.',
        },
        {
          heading: 'Shaft Grinding Applications',
          text: 'Grinding requirements are evaluated according to the shaft dimensions, material, surface condition, required finish and intended rotating-equipment application.',
          items: [
            'Industrial motor rotor shaft grinding',
            'Turbine Rotor shaft grinding',
            'Roller grinding',
            'Bearing-seat and journal grinding',
            'Shaft surface restoration support',
            'Precision finishing of rotating components',
          ],
        },
        {
          heading: 'Shaft Condition & Preparation',
          text: 'Shaft condition can directly influence bearing fit, coupling installation, alignment and rotating-equipment performance. Grinding and finishing work can be used where controlled dimensional correction or surface restoration is required.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers shaft grinding as part of the complete rotating-equipment engineering process. Shaft geometry, dimensional requirements, bearing locations, surface condition and the subsequent balancing or alignment requirement are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Industrial electric motor shafts',
            'Large rotor shafts',
            'Rollers and industrial rolls',
            'Pump and turbine shafts',
            'Marine rotating components',
            'Power-plant machinery',
            'Steel-plant equipment',
            'Heavy industrial rotating machinery',
          ],
        },
      ]}
      related={[
        {
          title: 'Heavy Machining',
          path: '/services/heavy-machining/',
        },
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
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

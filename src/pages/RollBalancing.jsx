import SEOPage from './SEOPage'

export default function RollBalancing() {
  return (
    <SEOPage
      eyebrow="INDUSTRIAL ROLL ENGINEERING"
      title="Roll Balancing Services"
      intro="Industrial roll balancing services for steel-plant rolls, rolling-mill rolls, paper-machine rolls, printing rolls and other large rotating industrial components."
      sections={[
        {
          heading: 'Industrial Roll Balancing',
          text: 'VibroTech Balancing provides roll balancing support for large industrial rolls and cylindrical rotating components where mass distribution and residual unbalance can contribute to vibration, bearing loading and mechanical stress during operation.',
        },
        {
          heading: 'Roll Balancing Applications',
          text: 'Balancing requirements are evaluated according to roll geometry, dimensions, mass distribution, operating speed, correction locations and the applicable machine requirements.',
          items: [
            'Steel-plant roll balancing',
            'Rolling-mill roll balancing',
            'Paper-machine roll balancing',
            'Printing roll balancing',
            'Rubber and plastic processing roll balancing',
            'Large industrial roll balancing',
          ],
        },
        {
          heading: 'Why Roll Balancing Matters',
          text: 'Roll unbalance can generate centrifugal forces during operation and contribute to vibration, bearing loading, surface-quality problems and mechanical stress. Proper balancing can help improve rotating stability and support reliable machine operation.',
        },
        {
          heading: "VibroTech's Approach",
          text: 'Our approach considers the complete roll together with its operating requirements. Roll geometry, mass distribution, operating speed, bearing locations, correction arrangement and the required balancing objective are considered when planning the work.',
        },
        {
          heading: 'Applications',
          items: [
            'Steel plants and rolling mills',
            'Paper mills and paper machinery',
            'Printing machinery',
            'Rubber processing equipment',
            'Plastic processing machinery',
            'Industrial coating and finishing lines',
            'Heavy manufacturing equipment',
            'Large rotating industrial components',
          ],
        },
      ]}
      related={[
        {
          title: 'Dynamic Balancing',
          path: '/services/dynamic-balancing/',
        },
        {
          title: 'Heavy Machining',
          path: '/services/heavy-machining/',
        },
        {
          title: 'Shaft Grinding',
          path: '/services/shaft-grinding/',
        },
        {
          title: 'Vibration Analysis',
          path: '/services/vibration-analysis/',
        },
      ]}
    />
  )
}

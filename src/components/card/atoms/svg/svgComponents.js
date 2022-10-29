import SvgFree from './SvgFree'
import SvgPro from './SvgPro'
import SvgTeam1 from './SvgTeam1'
import SvgTeam2 from './SvgTeam2'
import SvgTeam3 from './SvgTeam3'

export const svgComponents = [
  {
    svgs: [SvgFree],
    id: 1,
    type: 'Starter',
    price: 'Free',
    features: [
      ['Full courses library', true],
      ['A new daily meditation', true],
      ['Access to the meditation guru', true],
      ['Sleep podcasts and exercises', false],
      ['Mindfulness exercises', false],
      ['Guided miditations', false],
      ['Cookin recipes', false]
    ],
    buttonText: 'Get Started'
  },
  {
    svgs: [SvgPro],
    id: 2,
    type: 'Pro',
    price: '$49',
    features: [
      ['Full courses library', true],
      ['A new daily meditation', true],
      ['Access to the meditation guru', true],
      ['Sleep podcasts and exercises', true],
      ['Mindfulness exercises', true],
      ['Guided miditations', false],
      ['Cookin recipes', false]
    ],
    buttonText: 'Become a Pro'
  },
  {
    svgs: [SvgTeam1, SvgTeam2, SvgTeam3],
    id: 3,
    type: 'Teams',
    price: '$99',
    features: [
      ['Full courses library', true],
      ['A new daily meditation', true],
      ['Access to the meditation guru', true],
      ['Sleep podcasts and exercises', true],
      ['Mindfulness exercises', true],
      ['Guided miditations', true],
      ['Cookin recipes', true]
    ],
    buttonText: 'Get Teams'
  }
]
export default svgComponents

import { svgComponents } from '../atoms/svg'
import Card from './Card'

const CardList = () => {
  return svgComponents.map(component => {
    const { svgs, id, ...rest } = component

    // const Svg1 = svgs[0]
    // const SvgToCard = () => <Svg1 key={id} />
    // if (Svgs.length >= 2) return <Card key={id} Svgs={svgToCard} />
    return <Card key={id} card={id} Svgs={svgs} {...rest} />
  })
}

export default CardList

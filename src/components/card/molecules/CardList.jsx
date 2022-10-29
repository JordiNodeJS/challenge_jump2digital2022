import { svgComponents } from '../atoms/svg'
import Card from './Card'

const CardList = () => {
  return svgComponents.map(component => {
    const { svgs, id, ...rest } = component
    return <Card key={id} card={id} Svgs={svgs} {...rest} />
  })
}

export default CardList

import Button from '../atoms/Button'
import Features from '../atoms/Features'
import Price from '../atoms/Price'

const Card = ({ Svgs, card, ...rest }) => {
  const Svg = Svgs[0]

  const renderSection = () => {
    if (card === 3) {
      const Svg0 = Svgs[0]
      const Svg1 = Svgs[1]
      const Svg2 = Svgs[2]

      return (
        <section className='relative h-20 flex'>
          <Svg0 className='absolute left-2' />
          <Svg1 className='absolute left-[4.5rem]' />
          <Svg2 className='absolute left-32' />
        </section>
      )
    }
    return (
      <section className='flex'>
        <Svg />
      </section>
    )
  }

  return (
    <article className='card'>
      {renderSection()}
      <section>
        <Price {...rest} />
      </section>
      <section>
        <Features {...rest} />
      </section>
      <section>
        <Button card={card} {...rest} />
      </section>
    </article>
  )
}

export default Card

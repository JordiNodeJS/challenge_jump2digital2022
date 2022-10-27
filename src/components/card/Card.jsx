import Features from './atoms/Features'
import Price from './atoms/Price'

const Card = ({ Svgs, card, ...rest }) => {
  const Svg = Svgs[0]

  const renderView = () => {
    if (card === 3) {
      const Svg0 = Svgs[0]
      const Svg1 = Svgs[1]
      const Svg2 = Svgs[2]

      return (
        <article className='card'>
          <section className='relative h-20 flex bg-slate-300'>
            <Svg0 className='absolute left-2' />
            <Svg1 className='absolute left-[4.5rem]' />
            <Svg2 className='absolute left-32' />
          </section>
          <section>
            <Price {...rest} />
          </section>
          <section>
            <Features />
          </section>
        </article>
      )
    }
    return (
      <article className='card'>
        <section className='flex bg-slate-400'>
          <Svg />
        </section>
        <section>
          <Price {...rest} />
        </section>
        <section>
            <Features />
          </section>
      </article>
    )
  }

  return renderView()
}

export default Card

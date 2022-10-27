const Card = ({ Svgs, card }) => {
  const Svg = Svgs[0]
  // const Svg1 = (Svgs[1] ||= () => null)
  // const Svg2 = (Svgs[2] ||= () => null)
  if (card === 3) {
    const Svg0 = Svgs[0]
    const Svg1 = Svgs[1]
    const Svg2 = Svgs[2]

    return (
      <div className='relative card flex bg-slate-400'>
        <Svg0 className='absolute left-2' />
        <Svg1 className='absolute left-[4.5rem]' />
        <Svg2 className='absolute left-32' />
      </div>
    )
  }

  return (
    <div className='card flex bg-slate-400'>
      <Svg />
    </div>
  )
}

export default Card

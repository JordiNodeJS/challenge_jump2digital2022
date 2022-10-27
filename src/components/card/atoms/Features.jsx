const Features = ({ features }) => {
  const list = features.map((feature, i) => {
    const styledFeature = feature[1] === false ? 'mb-4 text-zinc-400' : 'mb-4'
    return (
      <li className={styledFeature + ' flex items-center'} key={i}>
        <span className='material-symbols-outlined mr-1'>done</span> {feature[0]}
      </li>
    )
  })
  return (
    <ul className='mt-4 text-sm font-extralight'>{list}</ul>
  )
}

export default Features

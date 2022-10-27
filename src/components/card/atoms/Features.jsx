const Features = ({ features }) => {
  const list = features.map((feature, i) => {
    const styledFeature = feature[1] === false ? ' text-zinc-400' : 'hover:text-slate-800'
    return (
      <li className={`mb-4 flex items-center   ${styledFeature}`} key={i}>
        <span className='material-symbols-outlined mr-1'>done</span>{' '}
        {feature[0]}
      </li>
    )
  })
  return <ul className='mt-4 text-sm font-extralight'>{list}</ul>
}

export default Features

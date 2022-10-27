const Price = ({ type, price, features }) => {
  console.log(features)
  return (
    <div className='mt-4 flex flex-col'>
      <div className='font-light text-xs'>{type}</div>
      <div className='font-bold text-2xl'>{price}</div>
      <div className='font-light text-xs text-zinc-400'>per month</div>
    </div>
  )
}

export default Price

const Button = ({ button, card }) => {
  card = Number(card)
  const colors = card === 1 ? 'bg-white hover:bg-slate-200 text-black' : card === 2 ? 'bg-black hover:bg-slate-900 text-white' : 'bg-indigo-600  hover:bg-indigo-700 text-white'
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        className={`${colors} flex justify-center w-11/12 py-3 px-4 rounded-lg border-2`}>
        {button} {card}
      </button>
    </div>
  )
}

export default Button

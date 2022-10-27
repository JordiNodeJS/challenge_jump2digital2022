const Button = ({ button, card }) => {
  return (
    <div className="flex justify-center">
      <button type='button' className='flex justify-center w-11/12 py-3 px-4 rounded-lg border-2 border-indigo-600 bg-slate-500'>
        {button} {card}
      </button>
    </div>
  )
}

export default Button

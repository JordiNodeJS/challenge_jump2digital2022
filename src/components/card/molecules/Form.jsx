import useContextModal from '../../../hooks/useContextModal'
import Button from '../atoms/Button'

const Form = () => {
  const { cardColor } = useContextModal()
  return (
    <div className='flex flex-col justify-center'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl'>
        <form>
          <div className='mb-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-gray-800'>
              Email
            </label>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-2 transition-colors duration-700 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>

          <div className='mt-6'>
            <Button buttonText='Send it' card={cardColor} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

import useContextModal from '@hooks/useContextModal'
import Button from '../atoms/Button'

const Form = () => {
  const { cardColor } = useContextModal()
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <form>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <div className="mt-2 flex justify-center">
            <input
              type="email"
              id="email"
              className="flex justify-center align-center border-red-700 w-11/12 py-3 px-4 transition-colors duration-700 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <Button buttonText="Send it" card={cardColor} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

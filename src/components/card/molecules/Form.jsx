/* eslint-disable no-console */
import { useForm } from 'react-hook-form'
import useContextModal from '@hooks/useContextModal'
import Button from '../atoms/Button'

const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const { cardColor } = useContextModal()
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>

          <div className="mt-2 flex justify-center">
            <input
              {...register('email', {
                validate: value => pattern.test(value),
                required: 'Email Address is required'
              })}
              type="text"
              id="email"
              className="flex justify-center align-center w-11/12 py-3 px-4 transition-colors duration-700 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <label htmlFor="email" className="ml-4 block">
            <div className='relative'>
              <p className='h-6' />
              <p className={`absolute top-1 text-sm text-red-500 opacity-0 ${errors.email && 'transition-opacity duration-200 opacity-100 scale-100'}`}>{errors.email && 'Wrong E-mail!!'}</p>
              <p className='text-sm text-red-500'>{errors.email && errors.email?.message}</p>
            </div>

          </label>
          <div className="mt-2">
            <Button buttonText="Send it" card={cardColor} type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

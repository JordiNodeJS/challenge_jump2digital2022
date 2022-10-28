import useContextModal from '../../../hooks/useContextModal'

const Modal = ({ children }) => {
  const { open, handelModal } = useContextModal()
  return (
    <div className={`fixed flex inset-0 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-indigo-700 ${
          open ? 'opacity-70' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
        onClick={_ => handelModal(false)}
      />

      {/* content */}
      <div
        className={`fixed md:left-[18%] md:top-[18%] lg:left-1/4 lg:top-1/4 h-96 w-full md:w-[500px]  bg-white shadow-lg rounded-lg p-4 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}>
        <div>
          <button onClick={_ => handelModal(false)}>
            Click to close modal
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal

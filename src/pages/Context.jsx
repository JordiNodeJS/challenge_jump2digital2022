import { useState, createContext } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <Context.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </Context.Provider>
  )
}

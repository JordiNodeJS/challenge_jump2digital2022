import { useState, createContext } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [cardColor, setCardColor] = useState(null)

  return (
    <Context.Provider
      value={{ isOpen, closeModal, openModal, setCardColor, cardColor }}>
      {children}
    </Context.Provider>
  )
}

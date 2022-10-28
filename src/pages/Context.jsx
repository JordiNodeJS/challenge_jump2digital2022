import { useState, createContext } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [open, setOpen] = useState(false)
  const handelModal = isOpen => setOpen(isOpen)

  return (
    <Context.Provider value={{ open, handelModal }}>
      {children}
    </Context.Provider>
  )
}

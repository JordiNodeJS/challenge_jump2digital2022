import ContextProvider from './Context'
import CardList from '@ui/card/molecules/CardList'
import Modal from '@ui/card/molecules/Modal'

const Layout = () => {
  return (
    <ContextProvider>
      <div className='flex justify-center items-center gap-4 pt-4 flex-wrap h-screen'>
        <CardList />
      </div>
      <Modal />
    </ContextProvider>
  )
}

export default Layout

import ContextProvider from './Context'
import CardList from '../components/card/molecules/CardList'
import Modal from '../components/card/molecules/Modal'

const Layout = () => {
  return (
    <ContextProvider>
      <div className='flex justify-center items-center gap-4 pt-4 flex-wrap h-screen'>
        <CardList />
      </div>
      <Modal>This is a Modal</Modal>
    </ContextProvider>
  )
}

export default Layout

import Card from '../components/card/Card'

const Layout = () => {
  return (
    <div className='flex justify-center items-center gap-x-6 flex-wrap h-screen'>
      <Card title='1' />
      <Card title='2' />
      <Card title='3' />
    </div>
  )
}

export default Layout

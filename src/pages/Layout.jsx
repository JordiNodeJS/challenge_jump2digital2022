import Card from '../components/card/Card'

const Layout = () => {
  return (
    <div className='flex justify-center items-center gap-4 pt-4 flex-wrap h-screen bg-slate-700'>
      <Card title='1' />
      <Card title='2' />
      <Card title='3' />
    </div>
  )
}

export default Layout

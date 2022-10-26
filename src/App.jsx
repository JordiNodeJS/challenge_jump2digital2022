import SvgPro from './components/card/SvgPro'

const Comp = props => <h1>hola {props.yourname}</h1>

function App() {
  return (
    <div className='text-3xl font-bold underline'>
      <Comp yourname='JUMP2DIGITAL' />
      <SvgPro />
    </div>
  )
}

export default App

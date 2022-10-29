import SvgFree from '@ui/card/svg/SvgFree'
import SvgPro from '@ui/card/svg/SvgPro'
import SvgTeam1 from '@ui/card/svg/SvgTeam1'
import SvgTeam2 from '@ui/card/svg/SvgTeam2'
import SvgTeam3 from '@ui/card/svg/SvgTeam3'

const Comp = props => <h1>hola {props.yourname}</h1>

function TestSvg() {
  return (
    <div className='text-3xl font-bold underline'>
      <Comp yourname='JUMP2DIGITAL' />
      <article>
        <h2>SvgPro</h2>
        <SvgPro />
      </article>
      <article>
        <h2>SvgFree</h2>
        <SvgFree />
      </article>
      <article>
        <h2>SvgTeam1</h2>
        <SvgTeam1 />
      </article>
      <article>
        <h2>SvgTeam2</h2>
        <SvgTeam2 />
      </article>
      <article>
        <h2>SvgTeam3</h2>
        <SvgTeam3 />
      </article>
    </div>
  )
}

export default TestSvg

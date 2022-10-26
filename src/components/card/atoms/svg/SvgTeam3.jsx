import { svgdataTeam3 } from './svgdata'

const SvgTeam3 = props => (
  <svg
    width={96}
    height={80}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <path
      transform='matrix(-1 0 0 1 95.667 0)'
      fill='url(#a)'
      d='M0 0h95.667v80H0z'
    />
    <defs>
      <pattern
        id='a'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use xlinkHref='#b' transform='matrix(.00111 0 0 .00133 .056 0)' />
      </pattern>
      <image id='b' width={800} height={753} xlinkHref={svgdataTeam3} />
    </defs>
  </svg>
)

export default SvgTeam3

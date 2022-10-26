import { svgdataTeam1 } from './svgdata'

const SvgTeam1 = props => (
  <svg
    width={97}
    height={80}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <path
      transform='matrix(-1 0 0 1 96.333 0)'
      fill='url(#a-SvgTeam1)'
      d='M0 0h95.667v80H0z'
    />
    <defs>
      <pattern
        id='a-SvgTeam1'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use xlinkHref='#b-SvgTeam1' transform='matrix(.00105 0 0 .00125 .127 0)' />
      </pattern>
      <image id='b-SvgTeam1' width={713} height={800} xlinkHref={svgdataTeam1} />
    </defs>
  </svg>
)

export default SvgTeam1

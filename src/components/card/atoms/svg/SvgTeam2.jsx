import { svgdataTeam2 } from './svgdata'

const SvgTeam2 = props => (
  <svg
    width={96}
    height={80}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <path
      transform='matrix(-1 0 0 1 96 0)'
      fill='url(#a-SvgTeam2)'
      d='M0 0h95.667v80H0z'
    />
    <defs>
      <pattern
        id='a-SvgTeam2'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use xlinkHref='#b-SvgTeam2' transform='matrix(.0011 0 0 .00132 .058 0)' />
      </pattern>
      <image
        id='b-SvgTeam2'
        width={800}
        height={756}
        xlinkHref={svgdataTeam2}
      />
    </defs>
  </svg>
)

export default SvgTeam2

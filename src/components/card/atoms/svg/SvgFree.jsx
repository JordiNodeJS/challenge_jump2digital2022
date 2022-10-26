import { svgdataFree } from './svgdata'

const SvgFree = props => (
  <svg
    width={253}
    height={80}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <path fill='url(#a-SvgFree)' d='M0 0h252.333v80H0z' />
    <defs>
      <pattern
        id='a-SvgFree'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use xlinkHref='#b-SvgFree' transform='matrix(.0004 0 0 .00125 .374 0)' />
      </pattern>
      <image id='b-SvgFree' width={634} height={800} xlinkHref={svgdataFree} />
    </defs>
  </svg>
)

export default SvgFree

import { svgdataPro } from './svgdata'

const SvgPro = props => (
  <svg
    width={205}
    height={80}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <path fill='url(#a-SvgPro)' d='M.333 0h204.333v80H.333z' />
    <defs>
      <pattern
        id='a-SvgPro'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use xlinkHref='#b-SvgPro' transform='matrix(.00084 0 0 .00214 .165 0)' />
      </pattern>
      <image id='b-SvgPro' width={800} height={468} xlinkHref={svgdataPro} />
    </defs>
  </svg>
)

export default SvgPro

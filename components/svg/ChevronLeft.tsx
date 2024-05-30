import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m15 18-6-6 6-6"
    />
  </Svg>
)
export default ChevronLeft


import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowUpLarge = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.381}
      d="M10.5 16.67V3.335m0 0-6.667 6.667M10.5 3.336l6.667 6.667"
    />
  </Svg>
)
export default ArrowUpLarge


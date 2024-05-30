import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Heart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#F04438"
      d="M11.054 2.972A3.554 3.554 0 0 0 8 4.805a3.554 3.554 0 0 0-3.054-1.833 3.776 3.776 0 0 0-3.61 3.915c0 2.525 2.658 5.283 4.887 7.153a2.762 2.762 0 0 0 3.554 0c2.23-1.87 4.887-4.628 4.887-7.153a3.776 3.776 0 0 0-3.61-3.915Z"
    />
  </Svg>
)
export default Heart


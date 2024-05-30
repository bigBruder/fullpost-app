import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Cross = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 3.972-6 6m0-6 6 6"
    />
  </Svg>
)
export default Cross


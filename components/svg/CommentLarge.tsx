import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CommentLarge = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M18.833 9.492a8.34 8.34 0 1 0-8.322 8.857h4.503a3.825 3.825 0 0 0 3.82-3.82V9.493ZM16.75 14.53a1.736 1.736 0 0 1-1.736 1.736H10.51A6.28 6.28 0 0 1 4.535 11.9a6.199 6.199 0 0 1-.245-2.61A6.277 6.277 0 0 1 9.7 3.816c.27-.034.542-.05.815-.05A6.204 6.204 0 0 1 14.498 5.2a6.276 6.276 0 0 1 2.25 4.391v4.939Z"
    />
    <Path
      fill="#fff"
      d="M8.763 9.321h2.084a1.042 1.042 0 0 0 0-2.083H8.763a1.042 1.042 0 1 0 0 2.083ZM13.625 10.71H8.763a1.042 1.042 0 0 0 0 2.084h4.862a1.042 1.042 0 0 0 0-2.084Z"
    />
  </Svg>
)
export default CommentLarge


import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const RightGo = (props) => (
  <Svg
    width={wp(8)}
    height={wp(8)}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={15}
      cy={15}
      r={14.5}
      transform="matrix(-1 0 0 1 30 0)"
      stroke="#455A64"
      strokeOpacity={0.5}
    />
    <Path
      d="M11.25 7.5L18.75 15L11.25 22.5"
      stroke="#455A64"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RightGo;

import * as React from "react";
import Svg, { Path , Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Tick = (props) => (
  <Svg
    width={wp(8)}
    height={wp(8)}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#01818C" />
    <Path
      d="M10 16L14 20L20 11"
      stroke="#FEFCF7"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Tick;

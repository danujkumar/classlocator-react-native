import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Back = ({color}) => (
  <Svg
    width={wp(6.4)}
    height={wp(6.4)}
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2 10.9997L26 10.9997M11.3333 20.333L2 10.9997L11.3333 20.333ZM2 10.9997L11.3333 1.66634L2 10.9997Z"
      stroke={color}
      strokeWidth={2.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Back;

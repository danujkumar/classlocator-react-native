import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Check = (props) => (
  <Svg
    width={wp(5.3)}
    height={wp(3.7)}
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7191 0.892341C18.9629 1.13613 19.0998 1.46673 19.0998 1.81144C19.0998 2.15615 18.9629 2.48675 18.7191 2.73054L8.31914 13.1305C8.07536 13.3743 7.74475 13.5112 7.40004 13.5112C7.05533 13.5112 6.72473 13.3743 6.48094 13.1305L1.28094 7.93054C1.04414 7.68536 0.913103 7.35698 0.916065 7.01612C0.919027 6.67526 1.05575 6.34921 1.29678 6.10818C1.53781 5.86715 1.86386 5.73043 2.20472 5.72747C2.54558 5.7245 2.87396 5.85554 3.11914 6.09234L7.40004 10.3732L16.8809 0.892341C17.1247 0.648629 17.4553 0.511719 17.8 0.511719C18.1448 0.511719 18.4754 0.648629 18.7191 0.892341Z"
      fill="white"
    />
  </Svg>
);
export default Check;

import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Done = (props) => (
  <Svg
    width={wp(6.4)}
    height={wp(6.4)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={1} y={2} width={22} height={20} fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7215 24H2.27855C1.00713 24 0.000502705 22.9692 0.000502705 21.7269V2.29969C-0.0261045 1.03083 1.00694 0 2.27855 0H21.7215C22.9929 0 23.9995 1.03083 23.9995 2.27311V21.6739C24.0259 22.9691 22.9929 23.9999 21.7215 23.9999V24ZM18.5428 7.18953C18.119 6.74021 17.4303 6.74021 17.0065 7.18953L10.0664 14.4053L6.99359 11.1807C6.56972 10.7314 5.88105 10.7314 5.45723 11.1807C5.03336 11.63 5.03336 12.3437 5.45723 12.793L9.29808 16.7841C9.72195 17.2334 10.4106 17.2334 10.8344 16.7841L18.5427 8.77537C18.9664 8.35243 18.9664 7.63872 18.5427 7.18939L18.5428 7.18953Z"
      fill="#01818C"
    />
  </Svg>
);
export default Done;

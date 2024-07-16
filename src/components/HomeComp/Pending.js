import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Pending = (props) => (
  <Svg
    style={{}}
    width={wp(5.6)}
    height={wp(6.6)}
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.4633 18.4076L13.6982 16.5558V18.4201C15.8694 17.1401 17.3978 14.7401 17.3978 11.9941C17.3978 8.5241 14.9865 5.60499 11.7614 4.80223L13.6624 3.70286L10.7224 2.01074C15.8891 2.4008 20 6.72937 20 11.994C20 16.2141 17.3169 19.8308 13.6982 21.3014V23.963L10.4632 22.1109L7.25604 20.259L10.4633 18.4076Z"
      fill="#455A64"
    />
    <Path
      d="M6.46137 2.65253V0L9.62555 1.85162L12.8145 3.70347L6.46137 7.40704V5.52001C4.04888 6.78703 2.59757 9.21313 2.59757 11.9943C2.59757 15.4552 4.95738 18.3687 8.17001 19.1801L6.28801 20.2597L9.26301 21.9813C4.06912 21.6194 0.00026226 17.2789 0.00026226 11.9946C0.000497818 7.74135 2.60133 4.10091 6.46131 2.65241L6.46137 2.65253Z"
      fill="#455A64"
    />
  </Svg>
);
export default Pending;

import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const HomePageBanner = (props) => (
<Svg
    width={wp(100)}
    height={wp(75)}
    viewBox="0 0 375 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M375 0H0V240.847V264.344V280.504L20.8333 277.204C41.6667 273.843 83.3333 267.337 125 267.29C148.9 267.317 172.799 269.469 196.699 271.621C214.466 273.22 232.233 274.82 250 275.547C290.032 277.184 330.065 274.102 351.62 272.443C352.5 272.375 353.349 272.31 354.167 272.247L375 270.59V264.344V240.847V0Z"
      fill="url(#paint0_linear_447_1059)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_447_1059"
          x1={-0.00000201986}
          y1={155.294}
          x2={372.192}
          y2={56.6943}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1DE099" />
          <Stop offset={1} stopColor="#1DC8CD" />
        </LinearGradient>
      </Defs>
  </Svg>
);
export default HomePageBanner;

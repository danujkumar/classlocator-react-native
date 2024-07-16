import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SVGComponent = ({color}) => (
  <Svg
    width={wp(8)}
    height={wp(8)}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <G id="Frame">
      <Path
        id="Vector"
        d="M26.25 26.25L18.75 18.75L26.25 26.25ZM21.25 12.5C21.25 13.6491 21.0237 14.7869 20.5839 15.8485C20.1442 16.9101 19.4997 17.8747 18.6872 18.6872C17.8747 19.4997 16.9101 20.1442 15.8485 20.5839C14.7869 21.0237 13.6491 21.25 12.5 21.25C11.3509 21.25 10.2131 21.0237 9.15152 20.5839C8.08992 20.1442 7.12533 19.4997 6.31282 18.6872C5.5003 17.8747 4.85578 16.9101 4.41605 15.8485C3.97633 14.7869 3.75 13.6491 3.75 12.5C3.75 10.1794 4.67187 7.95376 6.31282 6.31282C7.95376 4.67187 10.1794 3.75 12.5 3.75C14.8206 3.75 17.0462 4.67187 18.6872 6.31282C20.3281 7.95376 21.25 10.1794 21.25 12.5Z"
        // stroke="#455A64"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default SVGComponent;

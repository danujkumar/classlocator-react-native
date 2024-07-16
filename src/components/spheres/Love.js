import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Love = ({isClicked, w = 12.2, h = 10.4}) => (
  <Svg
    width={wp(w)}
    height={wp(h)}
    viewBox="0 0 46 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M24.4899 3.57185L23.0089 5.05276C22.9286 5.18627 22.7841 5.26807 22.6283 5.26807C22.4725 5.26807 22.328 5.18627 22.2476 5.05276L20.7667 3.57185C18.4869 1.29843 15.3986 0.0218473 12.179 0.0218473C8.95948 0.0218473 5.87082 1.29843 3.59106 3.57185C1.27441 6.25991 0 9.69024 0 13.2382C0 16.7869 1.2745 20.2171 3.59106 22.9056C19.8788 38.9177 21.9729 38.9177 22.6283 38.9177C23.2838 38.9177 25.3993 38.9177 41.6656 22.8838C43.9766 20.1975 45.2475 16.771 45.2475 13.2274C45.2475 9.68372 43.9766 6.25728 41.6656 3.57094C39.384 1.28474 36.2866 0 33.0567 0C29.8264 0 26.729 1.28474 24.4474 3.57094L24.4899 3.57185Z"
            // fill="#455A64"
            fill={(isClicked) ? '#01818c' : '#455A64'}
            // fillOpacity={0.55}
            fillOpacity={(isClicked) ? 1 : 0.55}
    />
  </Svg>
);
export default Love;

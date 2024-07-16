import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const TopBell = ({active}) => (
  <Svg
    width={wp(7)}
    height={wp(7)}
    viewBox="0 0 22 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <G id="Frame 1938">
      <G id="Group">
        <Path
          id="Vector"
          d="M17.8756 11.5243C17.8756 6.72424 15.2445 3.84437 12.1512 2.99104C12.08 1.88889 11.1557 1 10.0178 1C8.87986 1 7.95555 1.88889 7.88431 2.99104C4.79105 3.87993 2.15988 6.72443 2.15988 11.5243C2.15988 11.5243 2.15988 15.9688 0.240015 18.8488C0.240015 18.8488 -0.720045 20.7686 1.20008 21.0888H18.8C20.7199 20.7689 19.7601 18.8488 19.7601 18.8488C17.8756 16.0045 17.8756 11.5243 17.8756 11.5243Z"
          fill="#fff"
        />
        <Path
          id="Vector_2"
          d="M10.0175 25.3556C11.7953 25.3556 13.2174 23.9335 13.2174 22.1558H6.81738C6.81738 23.8979 8.23947 25.3556 10.0172 25.3556H10.0175Z"
          fill="#fff"
        />
      </G>
      {(active)?<Circle id="Ellipse 368" cx={17} cy={5} r={5} fill="#F7CF6A" />:<></>}
    </G>
  </Svg>
);
export default TopBell;

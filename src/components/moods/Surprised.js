import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Surprised = ({
  isSelect,
  h = 11,
  w = 11,
  inCol = "#fff",
  outCol = "#007BB7",
}) => {
  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 2) {
      setOutColor("#AED5E8");
      setInColor("#455A64");
    } else if (isSelect == -1) {
      setOutColor(outCol);
      setInColor(inCol);
    } else if (isSelect != -1) {
      setOutColor("#dce3e6");
      setInColor("#98a5ab");
    }
  }, [isSelect]);

  return (
    <Svg
      width={wp(w)}
      height={wp(h)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <Circle
        cx={19.705}
        cy={19.705}
        r={19.705}
        // fill={inColor}
        // fill={(isSelect == 2) ? '#AED5E8' : '#455A64'}
        fill={outColor}
        // fillOpacity={0.15}
        fillOpacity={isSelect == 2 ? "1" : "1"}
      />
      <Path
        d="M13.3 13.6502C13.3 15.6656 11.6656 17.3 9.64981 17.3C7.63433 17.3 6 15.6656 6 13.6502C6 11.6343 7.63433 10 9.64981 10C11.6656 10 13.3 11.6343 13.3 13.6502Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 2 ? "1" : "1"}
      />
      <Path
        d="M33.9999 13.6502C33.9999 15.6656 32.3655 17.3 30.3501 17.3C28.3342 17.3 26.6999 15.6656 26.6999 13.6502C26.6999 11.6343 28.3342 10 30.3501 10C32.3655 10 33.9999 11.6343 33.9999 13.6502Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 2 ? "1" : "1"}
      />
      <Path
        d="M28.5505 24.9501C26.5508 22.2504 22.3506 21.3003 20.0006 21.3003C17.6506 21.3003 13.5007 22.2504 11.4506 24.9501C9.45087 27.6499 11.1507 30.5 13.3005 30.35C15.4503 30.2 19.1004 29.7501 20.0002 29.7501C20.9 29.7501 24.4999 30.1501 26.7 30.35C28.8504 30.4999 30.5503 27.6502 28.5505 24.9501ZM26.7003 29.2999C24.5003 29.1499 20.8505 28.7 20.0006 28.7C19.1507 28.7 15.5009 29.1001 13.3009 29.2999H12.851C12.9008 29.0498 13.6008 25.9999 16.3009 25.4C19.1507 24.7503 20.0007 25.6002 20.0007 25.6002C20.0007 25.6002 20.8506 24.7503 23.6505 25.3501C26.3502 25.95 27.0502 29.0501 27.1005 29.25C26.9505 29.2999 26.8005 29.2999 26.7004 29.2999L26.7003 29.2999Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 2 ? "1" : "1"}
      />
    </Svg>
  );
};
export default Surprised;

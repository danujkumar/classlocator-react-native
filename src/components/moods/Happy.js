import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Happy = ({
  isSelect,
  h = 11,
  w = 11,
  inCol = "#fff",
  outCol = "#D2A100",
}) => {
  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 1) {
      setOutColor("#FFD64F");
      setInColor("#455A64");
    } else if (isSelect == -1) {
      setOutColor(outCol);
      setInColor(inCol);
    } else {
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
        // fill={(isSelect == 1) ? '#FFD64F' : '#455A64'}
        fill={outColor}
        // fillOpacity={0.15}
        fillOpacity={isSelect == 1 ? "1" : "1"}
      />
      <Path
        d="M26.861 10a4.14 4.14 0 0 0-4.135 4.136H24.7c0-1.192.97-2.16 2.16-2.16 1.191 0 2.16.968 2.16 2.16h1.976A4.14 4.14 0 0 0 26.86 10zM14.296 14.136h1.975A4.14 4.14 0 0 0 12.136 10 4.14 4.14 0 0 0 8 14.136h1.975c0-1.192.97-2.16 2.16-2.16 1.192 0 2.161.968 2.161 2.16zM19.498 28.832a7.325 7.325 0 0 0 7.325-7.325h-14.65a7.325 7.325 0 0 0 7.325 7.325z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 1 ? "1" : "1"}
      />
    </Svg>
  );
};
export default Happy;

import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Sad = ({
  isSelect,
  h = 11,
  w = 11,
  inCol = "#fff",
  outCol = "#0F435C",
}) => {
  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 3) {
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
        // fill="#455A64"
        fill={outColor}
        // fillOpacity={0.15}
        fillOpacity={isSelect == 3 ? "1" : "1"}
      />
      <Path
        d="M19.4734 23.3848C15.6741 23.3848 13.0518 25.6276 12.9473 25.7193L14.2354 27.1972C14.255 27.1775 16.4326 25.3465 19.4797 25.3465C22.5531 25.3465 24.698 27.1839 24.7239 27.1972L26.0121 25.7193C25.8948 25.6212 23.2724 23.3848 19.4732 23.3848H19.4734Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 3 ? "1" : "1"}
      />
      <Path
        d="M14.6053 13.0328C13.9776 13.4251 12.9836 13.9027 11.2964 13.9155C9.6159 13.8895 8.70682 13.3987 8.09201 13L7 14.5432C7.73256 15.0664 9.13834 15.8117 11.2895 15.8446C13.4804 15.8314 14.9451 15.0796 15.6968 14.5692L14.6053 13.0328Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 3 ? "1" : "1"}
      />
      <Path
        d="M30.908 13.0328C30.2803 13.4251 29.2864 13.9027 27.5991 13.9155C25.9186 13.8895 25.0096 13.3987 24.3948 13L23.3027 14.5432C24.0353 15.0664 25.4411 15.8117 27.5923 15.8446C29.7832 15.8314 31.2478 15.0796 31.9995 14.5692L30.908 13.0328Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={isSelect == 3 ? "1" : "1"}
      />
    </Svg>
  );
};
export default Sad;

import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Angry = ({
  isSelect,
  h = 11,
  w = 11,
  inCol = "#fff",
  outCol = "#BB6345",
}) => {
  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 6) {
      setOutColor("#e8b19e");
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
        // fill={(isSelect == 6) ? '#DF7550' : '#455A64'}
        fill={outColor}
        // fillOpacity={0.15}
        fillOpacity={isSelect == 6 ? "0.75" : "1"}
      />
      <Path
        d="M23.0554 15.3111L27.3265 11.04C27.4463 10.9203 27.4861 10.7605 27.4861 10.6009C27.4861 10.0819 26.8474 9.80269 26.4484 10.1618L21.1794 15.4706C20.8202 15.8298 21.0596 16.5083 21.6185 16.5083H26.9272C27.2466 16.5083 27.5258 16.2288 27.5258 15.9097C27.5258 15.5904 27.2463 15.3111 26.9272 15.3111L23.0554 15.3111Z"
        fill="#455A64"
        stroke={inColor}
        fillOpacity={isSelect == 6 ? "1" : "1"}
      />
      <Path
        d="M11.0405 10.6808C11.0405 10.8404 11.1204 11.0002 11.2001 11.1199L15.4712 15.391H11.5994C11.28 15.391 11.0007 15.6705 11.0007 15.9896C11.0007 16.309 11.2803 16.5882 11.5994 16.5882H16.9081C17.4271 16.5882 17.7063 15.9495 17.3472 15.5505L12.0384 10.2417C11.679 9.88257 11.0405 10.1618 11.0405 10.6808Z"
        fill="#455A64"
        stroke={inColor}
        fillOpacity={isSelect == 6 ? "1" : "1"}
      />
      <Path
        d="M12.3566 29.4015C12.3964 29.7607 12.6361 30.0001 12.9552 30.0001H25.2491H25.289H25.3288C25.6481 30.0001 25.9274 29.7206 25.9274 29.4015C25.9274 25.3701 22.6144 22.097 18.5829 22.4163C15.19 22.6958 12.4759 25.4898 12.3562 28.9226V29.0025V29.3617L12.3566 29.4015ZM18.8628 23.6138C21.8964 23.4543 24.4111 25.7691 24.6906 28.6832L13.5942 28.6829C13.9132 25.9688 16.1086 23.7335 18.8628 23.6138Z"
        fill="#455A64"
        fillOpacity={isSelect == 6 ? "1" : "1"}
        // stroke="#455A64"
        stroke={inColor}
      />
    </Svg>
  );
};
export default Angry;

import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Disgust = ({ isSelect, h = 11, w = 11, inCol = '#fff', outCol = '#723F2D'}) => {

  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 4) {
      setOutColor('#DF7550');
      setInColor("#455A64");
    } else if (isSelect == -1) {
    setOutColor(outCol);
    setInColor(inCol);
  }else if (isSelect != -1) {
      setOutColor("#dce3e6");
      setInColor("#98a5ab");
    }

  }, [isSelect])


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
        fillOpacity={(isSelect == 4) ? '0.45' : '1'}
      />
      <Path
        d="M9.68965 20.2669C9.36217 20.2669 9.04364 20.0811 8.89333 19.7669C8.68098 19.3243 8.86679 18.7977 9.30477 18.5854L13.1632 16.727L9.27387 14.6695C8.84021 14.4395 8.67663 13.904 8.90658 13.4747C9.13653 13.041 9.67204 12.8774 10.1014 13.1074L15.5395 15.9834C15.8361 16.1383 16.0173 16.4479 16.0087 16.7844C16.0044 17.1162 15.8096 17.4214 15.5087 17.5631L10.0705 20.1826C9.95075 20.2403 9.81805 20.2669 9.68965 20.2669Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={(isSelect == 4) ? '1' : '1'}
      />
      <Path
        d="M30.3169 20.2671C30.1885 20.2671 30.0558 20.2405 29.932 20.1785L24.4939 17.559C24.1929 17.413 23.9982 17.112 23.9939 16.7802C23.9895 16.4484 24.1707 16.1385 24.463 15.9792L29.9012 13.1032C30.3348 12.8733 30.8704 13.0412 31.096 13.4705C31.3259 13.9042 31.158 14.4397 30.7287 14.6653L26.8393 16.7228L30.6978 18.5813C31.1404 18.7936 31.3216 19.3202 31.1092 19.7628C30.9629 20.0859 30.6444 20.2671 30.3169 20.2671Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={(isSelect == 4) ? '1' : '1'} />
      <Path
        d="M31.1198 26.4885H8.88489C8.39814 26.4885 8 26.0904 8 25.6036C8 25.1169 8.39817 24.7188 8.88489 24.7188H31.1151C31.6019 24.7188 32 25.1169 32 25.6036C32 26.0904 31.6062 26.4885 31.1194 26.4885H31.1198Z"
        fill={inColor}
        // fillOpacity={0.45}
        fillOpacity={(isSelect == 4) ? '1' : '1'} />
    </Svg>

  )
};
export default Disgust;

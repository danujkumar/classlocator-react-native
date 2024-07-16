import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Fear = ({ isSelect, h = 11, w = 11, inCol = '#fff', outCol = '#01818c' }) => {

  const [inColor, setInColor] = React.useState(inCol);
  const [outColor, setOutColor] = React.useState(outCol);
  React.useEffect(() => {
    if (isSelect == 5) {
      setOutColor("#01818C");
      setInColor("#455A64");
    }else if (isSelect == -1) {
      setOutColor(outCol);
      setInColor(inCol);
    } else if (isSelect != -1) {
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
        fillOpacity={(isSelect == 5) ? '0.50' : '1'}
      />
      <Path
        d="M12.9881 11C11.8351 11 10.8767 11.9586 10.8767 13.1114C10.8767 14.2642 11.835 15.2229 12.9881 15.2229C14.1409 15.2229 15.0996 14.2645 15.0996 13.1114C15.0996 11.9587 14.1413 11 12.9881 11Z"
        fill={inColor}
        fillOpacity={(isSelect == 5) ? '1' : '1'}
      />
      <Path
        d="M26.0101 11C24.8573 11 23.8989 11.9586 23.8989 13.1114C23.8989 14.2642 24.8573 15.2229 26.0104 15.2229C27.1631 15.2229 28.1218 14.2645 28.1218 13.1114C28.1215 11.9587 27.1631 11 26.0101 11Z"
        fill={inColor}
        fillOpacity={(isSelect == 5) ? '1' : '1'}
      />
      <Path
        d="M18.5418 27.7289L16.0416 25.1313L13.5274 27.7425C13.2329 28.0485 12.9173 28.2007 12.5966 28.2007C12.2357 28.2007 11.909 28.0355 11.6798 27.798L8.26279 24.256C7.61045 23.5798 8.26775 22.3542 9.19358 22.4224C9.49464 22.4447 9.76841 22.5879 9.97149 22.7975L12.5826 25.4921L14.9994 22.9919C15.3662 22.6127 15.6663 22.4255 16.0691 22.4224C16.4657 22.4193 16.7726 22.6874 17.0554 22.978L19.5001 25.4921L21.9448 22.978C22.2273 22.6874 22.5342 22.4193 22.9311 22.4224C23.3335 22.4255 23.634 22.6124 24.0008 22.9919L26.4176 25.4921L29.0287 22.7975C29.2318 22.5883 29.5056 22.4447 29.8066 22.4224C30.7321 22.3542 31.3894 23.5798 30.7374 24.256L27.3204 27.798C27.0913 28.0355 26.7645 28.2007 26.4036 28.2007C26.0833 28.2007 25.7674 28.0482 25.4728 27.7425L22.9586 25.1313L20.4584 27.7289C20.1853 28.0126 19.9484 28.2014 19.5001 28.2014C19.0518 28.2014 18.8149 28.0129 18.5418 27.7292L18.5418 27.7289Z"
        fill={inColor}
        fillOpacity={(isSelect == 5) ? '1' : '1'}
      />
    </Svg>
  )
};
export default Fear;

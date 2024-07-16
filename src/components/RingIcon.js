import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function RingIcon({ active }) {
    return (
        <Svg
            width={wp(6)}
            height={wp(6)}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        // {...props}
        >
            <Circle
                id="Ellipse 175"
                cx={11}
                cy={11}
                r={10}
                stroke={active?'#455A64':'#01818C'}
                strokeWidth={2}
            />

            {(active) ? <Path d="M6.33398 11.666L9.00065 14.3327L15.6673 7.66602" stroke={active?'#455A64':'#01818C'} strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /> : <></>}

        </Svg>
    )
}
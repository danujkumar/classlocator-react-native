import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function ringTick(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={11} cy={11} r={10} stroke="#455A64" strokeWidth={2} />
            <Path
                d="M6.33398 11.666L9.00065 14.3327L15.6673 7.66602"
                stroke="#455A64"
                strokeWidth={1.33333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
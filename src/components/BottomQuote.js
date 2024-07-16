import { View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// import Bottom from "../../assets/images/BottomQuote.svg";
import Bottom from '../../assets/images/BottomQuote.svg';

const BottomQuote = () => {
    return (
        <View
            className="flex-row items-center"
            style={[
                {
                    height: hp(20), marginTop: hp(3), backgroundColor: "#EBEFF2CC", width: wp(100),
                    paddingHorizontal: wp(8),
                },
            ]}
        >
            <Bottom width={wp(71)} height={hp(15)} />
        </View>
    )
}

export default BottomQuote
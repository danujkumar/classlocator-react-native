import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Back from "../../assets/images/arrow.svg";


export default function CustomDrawer(props) {
    return (

        <View style={{ flex: 1 }} >
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#fff' }}
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        height: hp(6),
                        justifyContent: "center",
                        alignItems: "center",
                        top: hp(1),
                    }}
                >
                    <View style={{ position: "absolute", left: wp(8) }} >
                        <Back width={wp(8)} height={wp(8)} />
                    </View>
                    <Text style={{
                        color: "#043953",
                        fontSize: wp(5.5),
                        fontFamily: 'Roboto'
                    }}>Your Reminders</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back width={wp(8)} height={wp(8)} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back width={wp(8)} height={wp(8)} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({})
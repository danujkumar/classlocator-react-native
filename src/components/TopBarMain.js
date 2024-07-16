import { View, Text, Image, StyleSheet, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import TopBell from './TopBell';
import Dots from './dots';



import Animated from 'react-native-reanimated';



export default function TopBarMain() {

  const navigation = useNavigation();

  return (
    <View className="flex-row  justify-between items-center bg-red p-3" style={[styles.card, styles.elevation]}>
      {/* <StatusBar
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
        hidden={false}
      /> */}

      {/* <Animated.Image source={require('../../assets/logo.png')} style={{ width: wp(32), height: hp(16), marginLeft: wp(2) }} sharedTransitionTag="tag" /> */}

      <View className=" flex-row items-center justify-end " style={{ width: wp(20), marginBottom: wp(1) }}>
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}> */}
        <TouchableOpacity onPress={() => navigation.navigate('reminder')}>
          <TopBell active={true} />
        </TouchableOpacity>
        {/* <Dots /> */}
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: hp(10)
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
});
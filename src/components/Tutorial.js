import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PanResponder,
  Dimensions,
  Image,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return <View>{item.T}</View>;
};

const ScreenWidth = Dimensions.get("screen").width / 2;
const Tutorial = () => {
  let [current, setCurrent] = useState(1);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (current < 1) {
      setCurrent(1);
    } else if (current > 9) {
      setCurrent(9);
    }
  }, [current]);

  const increment = () => {
    if (current == 9) {
      setHide(true);
      setNames(true)
    }
    setCurrent((prevValue) => (prevValue < 9 ? prevValue + 1 : prevValue));
  };

  const decrement = () => {
    setCurrent((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const a = useRef(0);
  return (
    <>
      {hide ? (
        <></>
      ) : (
        <SafeAreaView
          style={{
            width: wp(100),
            height: hp(100),
            position: "absolute",
            zIndex: 150,
            // backgroundColor: "red",
            // backgroundColor: "rgba(256, 256, 256, 0.5)",
          }}
        >
          <View
            onTouchStart={(event) => {
              // if (event.nativeEvent.locationX < ScreenWidth) {
              //   decrement();
              // } else {
                increment();
              // }
            }}
          >
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),  display: current == 1? "flex" : "none" }}
              source={require("../../assets/images/tn1.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100), display: current == 2? "flex" : "none"}}
              source={require("../../assets/images/tn2.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100), display: current == 3? "flex" : "none" }}
              source={require("../../assets/images/tn3.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),display: current == 4? "flex" : "none" }}
              source={require("../../assets/images/tn4.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),display: current == 5? "flex" : "none" }}
              source={require("../../assets/images/tn5.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),display: current == 6? "flex" : "none" }}
              source={require("../../assets/images/tn6.png")}
              fadeDuration={0}
            />
            <Image
              
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),display: current == 7? "flex" : "none" }}
              source={require("../../assets/images/tn7.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100),display: current == 8? "flex" : "none" }}
              source={require("../../assets/images/tn8.png")}
              fadeDuration={0}
            />
            <Image
              resizeMode="stretch"
              style={{ height: hp(100), width: wp(100) ,display: current == 9? "flex" : "none"}}
              source={require("../../assets/images/tn9.png")}
              fadeDuration={0}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Tutorial;

const styles = StyleSheet.create({});

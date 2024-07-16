import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import P1 from "../../../../assets/images/page1.svg";
import P2 from "../../../../assets/images/page2.svg";
import P3 from "../../../../assets/images/page3.svg";
import P8 from "../../../../assets/images/google.svg";
import Next from "../../../../assets/images/nextIcon.svg";
import { theme } from "../../../theme";
// import C1 from "../../../../assets/images/c1.svg";
// import C2 from "../../../../assets/images/c2.svg";
// import C3 from "../../../../assets/images/c3.svg";
// import C4 from "../../../../assets/images/c4.svg";
// import C5 from "../../../../assets/images/c5.svg";
import SInfo from "react-native-encrypted-storage";
// import C6 from "../../../../assets/images/c6.svg";
import { useNavigation } from "@react-navigation/native";
const COLORS = { primary: "#282534", white: "#fff" };
const { width, height } = Dimensions.get("window");
import AutoScrollingList from "../../../components/AutoRotatedScrollview";

const C1 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn1.png')} />
  )
}
const C2 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn2.png')} />
  )
}
const C3 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn3.png')} />
  )
}
const C4 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn4.png')} />
  )
}
const C5 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn5.png')} />
  )
}
const C6 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn6.png')} />
  )
}
const C7 = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: wp(79), height: hp(42) }}
      source={require('../../../../assets/images/cn7.png')} />
  )
}

const P4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = new Animated.Value(-activeIndex * (Dimensions.get('window').width) / 1);
  const cardComponents = [
    <C1 key={1} />,
    <C2 key={2} />,
    <C3 key={3} />,
    <C4 key={4} />,
    <C5 key={5} />,
    <C6 key={6} />,
    <C7 key={7} />,
    // <C6 key={2} width={wp(79)} height={hp(40)} />,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardComponents.length);
    }, 4500);

    // Clean up the interval when component unmounts or re-renders
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -activeIndex * (Dimensions.get("window").width) / 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <>
      <View style={{ alignItems: 'center', overflow: 'hidden', height:wp(127)  }} >
        <P3 width={wp(100)} height={wp(120.53)} />
        <P8 width={wp(67)} height={wp(12)} style={{position:'absolute', zIndex:150, top:wp(110)}} />
        <Animated.View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            // width: Dimensions.get('window').width,
            transform: [{ translateX }],
            // backgroundColor:'red',
            width: wp(80),
            marginTop: hp(8),
            justifyContent: 'space-between',

          }}
        >
          {cardComponents.map((card, index) => (
            <View key={index} style={{ width: Dimensions.get('window').width }}>
              {card}
            </View>
          ))}
          {/* <C5 key={5} width={wp(79)} height={hp(40)} /> */}
        </Animated.View>
      </View>
    </>
  );
};

const Px = () => {
  return (
    <>
      <Image style={{ height: hp(7.8), width: wp(32.8), position: 'absolute', zIndex: 1, top: hp(6.8) }} source={require('../../../../assets/logo.png')} />
      <P1 width={wp(100)} height={wp(127)} />
    </>
  )
};

const slides = [
  {
    id: "1",
    P: <Px />,
    title: "Understanding Your Needs",
    subtitle:
      "Get clarity with scientifically backed tests covering Depression, Anxiety, Relationships, ADHD, and more!",
  },
  {
    id: "2",
    P: <P2 width={wp(100)} height={wp(122)} />,
    title: "Meet Your Perfect Match",
    subtitle:
      "Connect with a therapist that understands your unique needs and get your personalized care plan",
  },
  {
    id: "3",
    P: <P4 />,
    title: "Join Our Thriving Community",
    subtitle:
      "Join 3 lakh+ users that have benefitted with Heart It Out's expert care and wellbeing support.",
  },
  // {
  //     id: '4',
  //     P: <C1 />,
  //     title: 'Join Our Thriving Community',
  //     subtitle: 'Join 3L+ users that have benefitted and improved their mental health with our support from our team of experts',
  // },
];

const Slide = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: wp(100),
        justifyContent: "space-between",
      }}
    >
      {item.P}
      <View style={{ alignItems: "center",
      //  marginTop:hp(1.5)
      // justifyContent:'space-between'
       }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ route }) => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / wp(100));
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  React.useEffect(() => {
    const isLogin = async () => {
      try {
        const storedToken = await SInfo.getItem("token");
        if (storedToken == null || storedToken === undefined) {
        } else {
          const data = JSON.parse(storedToken);
          if (data.status !== "true") {
          } else {
            navigation.navigate("loader");
          }
        }
      } catch (error) {
        console.error("Error while fetching token:", error);
        // Handle error, you might want to set token to false or do something else
      } finally {
      }
    };

    if (route.params != null && route.params != undefined)
      Diversion(route.params.navigation);
    isLogin();
  });

  // const skip = () => {
  //     const lastSlideIndex = slides.length - 1;
  //     const offset = lastSlideIndex * width;
  //     ref?.current.scrollToOffset({ offset });
  //     setCurrentSlideIndex(lastSlideIndex);
  // };

  const Footer = () => {
    return (
      <View
        style={{
          height: hp(14),
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
          marginBottom: hp(6),
          // backgroundColor:'green',
          // position:'absolute',
          // bottom: hp(4)
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: theme.maincolor,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{  }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View
              style={{
                height: 50,
                // marginBottom: hp(0),
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                width: wp(85),
              }}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate("LoginPage");
                  trackM("Onboarding screen: ", {event: "Passed to Login"});
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
                >
                  Let's Go!
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                height: 50,
                marginBottom: hp(0),
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                width: wp(85),
              }}
            >
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#fff",
                    marginRight: wp(1),
                  }}
                >
                  NEXT
                </Text>
                <Next height={wp(5.6)} width={wp(5.6)} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", alignItems:'center' }}>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor="transparent"
      />
      <FlatList
        nestedScrollEnabled={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: hp(75), }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  subtitle: {
    color: theme.black,
    fontSize: wp(4),
    marginTop: hp(1),
    maxWidth: wp(92),
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: theme.maincolor,
    fontSize: wp(6),
    fontWeight: "bold",
    // marginTop: hp(8),
    textAlign: "center",
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: wp(2.5),
    width: wp(2.5),
    backgroundColor: "rgba(1, 129, 140, 0.2)",
    marginHorizontal: 3,
    borderRadius: wp(2),
  },
  btn: {
    height: hp(5.1),
    borderRadius: wp(5),
    width: wp(39),
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.maincolor,
    justifyContent: "center",
    alignItems: "center",
  },
});

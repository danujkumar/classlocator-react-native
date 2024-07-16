import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";



import TasksIcon from "../../../assets/images/TasksIcon.svg";
import NewIcon from "../../../assets/images/NewIcon.svg";
import BottomQuote from "../../../assets/images/BottomQuote.svg";
import Help from "../../../assets/images/Help.svg";




import { theme } from "../../theme";
import HomePageBanner from "../../components/HomePageBanner";

const Btn = () => {
  // console.log("It is from btn: ",props)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.BookBtn}
      onPress={() => {
        // navigation.navigate("webview", props.props);
      }}
    >
      <Text style={styles.btnText}>Welcome to Classlocator</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();

  const backHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  navigation.addListener("focus", () => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);
  });

  navigation.addListener("blur", () => {
    BackHandler.removeEventListener("hardwareBackPress", backHandler);
  });

  return (
    <GestureHandlerRootView>
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.maincolor}
        barStyle={"light-content"}
        hidden={false}
        translucent={false}
      />
      <View
        style={{
          backgroundColor: theme.maincolor,
          width: wp(100),
          height: hp(0.8),
          position: "absolute",
          top: 0,
          zIndex: 4,
        }}
      />

      <ScrollView
        scrollEventThrottle={1}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: "#fff", height: hp(100) }}
      >
        {/* Banner */}

        <View
          style={{ marginTop: hp(0) }}
        >
          <HomePageBanner />

          <View style={styles.banner}>
            <View
              className="flex-row justify-center items-center"
              style={{
                backgroundColor: theme.maincolor,
                width: wp(84),
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: wp(4),
                  fontFamily: "Roboto",
                  fontWeight: "400",
                }}
              >
                {`Welcome 👋`}{" "}
              </Text>
            </View>

            <View
              className="flex-row justify-between items-center"
              style={{ marginTop: hp(1) }}
            >
              <Image
                source={require("../../../assets/images/homePageGIF.gif")}
                style={{ height: wp(30), width: wp(30) }}
              />

            </View>
              <Btn/>
          </View>
        </View>

        {/* Content */}
        <View
          className="flex-row justify-between"
          style={[styles.cardContainer, { height: hp(15.8) }]}
        >
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("homework", data);
            }}
            style={[styles.card, { backgroundColor: "#FEF8C8" }]}
          >
            <Text style={styles.cardText}>My {"\n"}Tasks</Text>

            {/* <TasksIcon width={wp(11)} height={hp(6)} /> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("progress", data);
            }}
            style={[styles.card, { backgroundColor: "#EBF2F5" }]}
          >
            <Text style={styles.cardText}>My {"\n"}Progress</Text>
            {/* <Image
              source={require("../../../assets/images/ProgressIcon.gif")}
              style={{
                width: wp(20),
                height: hp(12),
                position: "absolute",
                zIndex: -1,
                left: wp(2),
                right: wp(2),
                bottom: hp(1.6),
              }}
            /> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#EAF7FC" }]}
            onPress={() => {
              // navigation.navigate("webview", whatsnew);
            }}
          >
            <Text style={styles.cardText}>What's {"\n"}New?</Text>
            {/* <NewIcon width={wp(20)} height={hp(5)} /> */}
          </TouchableOpacity>




        </View>

        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("webview", product);
          }}
          className="flex-col items-center"
          style={[styles.cardContainer, { height: hp(15.8), marginTop: hp(4) }]}
        >
          {/* <View style={[styles.packageCard, { backgroundColor: "#EAF7FC" }]}>
            <View
              className="flex-col justify-between items-start "
              style={{ height: hp(9) }}
            >
              <Text style={styles.cardText}>Self-care Tools for you</Text>
              <View style={styles.Btn}>
                <Text style={styles.btnText2}>Discover Now</Text>
              </View>
            </View>
            <Image
              source={require("../../../assets/images/SelfCareIcon2.png")}
              style={{ width: wp(18), height: hp(14) }}
            />
          </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
          }}
          className="flex-col items-center"
          style={[{ height: hp(15.8), marginTop: hp(3) }]}
        >
          {/* <Help width={wp(84)} height={wp(34.4)} /> */}
        </TouchableOpacity>

        <View
          className="flex-row items-center"
          style={[
            styles.cardContainer,
            { height: hp(20), marginTop: hp(5), backgroundColor: "#EBEFF2CC" },
          ]}
        >
          {/* <BottomQuote width={wp(71)} height={hp(15)} /> */}
        </View>

        <View style={{ width: wp(100), height: hp(6), marginTop: hp(3) }} />
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  banner: {
    // backgroundColor: 'black',
    width: wp(84),
    position: "absolute",
    left: wp(8),
    right: wp(8),
    top: hp(4),
    zIndex: 2,
  },

  BookBtn: {
    marginTop: hp(2),
    width: wp(84),
    height: hp(6),
    backgroundColor: "white",
    borderRadius: wp(8),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  btnText: {
    textAlign: "center",
    color: "#01818C",
    fontSize: wp(4),
    fontFamily: "Roboto",
    fontWeight: "600",
  },

  // Cards
  cardContainer: {
    width: wp(100),
    paddingHorizontal: wp(8),
    // height: hp(15.8),
    marginTop: hp(4),
    // backgroundColor: 'red'
  },

  card: {
    width: wp(24),
    height: "100%",
    borderRadius: wp(4),
    paddingTop: hp(1),
    paddingBottom: hp(1.5),
    display: "flex",
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardText: {
    textAlign: "center",
    color: "#455A64",
    fontSize: wp(4),
    fontFamily: "Roboto",
    fontWeight: "800",
  },

  test: {
    width: wp(40),
    height: hp(40),
    backgroundColor: "red",
  },

  // Feel Banner

  feelBanner: {
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },

  // Package

  packageCard: {
    width: wp(84),
    height: "100%",
    borderRadius: wp(4),
    backgroundColor: "#FEF8C8",
    paddingHorizontal: wp(4),
    paddingLeft: wp(6),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  feelBanner: {
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },

  Btn: {
    // marginTop: hp(2),
    width: wp(38),
    height: hp(4),
    backgroundColor: "#01818C",
    borderRadius: wp(8),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  btnText2: {
    textAlign: "center",
    color: "white",
    fontSize: wp(4),
    fontFamily: "Roboto",
    fontWeight: "600",
  },

  cardContainer2: {
    width: wp(100),
    paddingHorizontal: wp(8),
    // height: hp(15.8),
    // marginTop: hp(4),
    // backgroundColor: 'red'
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

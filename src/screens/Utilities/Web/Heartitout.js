import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import Back from "../../../components/Back";
import Cross from "../../../components/moods/Cross";
let canGoBack = false;
const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

function containsOrder(sentence) {
  return (
    sentence.includes("order-summary") || sentence.includes("order-received")
  );
}

export default function Heartitout(props) {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [timeout, setTime] = useState(null);

  const onNavigationStateChange = (navState) => {
    canGoBack = navState.canGoBack;
    if (containsOrder(navState.url) && loading == false) {
      showToast("Order Received");
      setCross(true);
      setTime(
        setTimeout(() => {
          setHomes("webview");
          pathing("webview");
          navigation.navigate("Home_Tab");
        }, 10000)
      );
    } else {
      console.log("Not hit yet");
    }
  };
  const webViewRef = useRef(null);
  const backHandler = () => {
    if (canGoBack) goBack();
    else navigation.goBack();
    return true;
  };

  navigation.addListener("focus", () => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);
  });

  navigation.addListener("blur", () => {
    BackHandler.removeEventListener("hardwareBackPress", backHandler);
  });

  const goBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  React.useEffect(() => {
    if(props.route.params == null || props.route.params == undefined)
      showToast("The link is broken, please reload the app.")
  }, [])
  

  const [cross, setCross] = useState(false);

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{
            height: hp(80),
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <ActivityIndicator
            color="#01818C"
            animating={loading}
            size={wp(14)}
          />
        </View>
      ) : (
        <></>
      )}
      <TouchableOpacity
        onPress={() => {
          if (cross) {
            clearInterval(timeout);
            pathing("webview");
            setHomes("webview");
            navigation.navigate("Home_Tab");
          } else {
            navigation.goBack();
          }
        }}
        activeOpacity={0.8}
        style={{
          width: wp(14),
          height: hp(6),
          backgroundColor: "#fff",
          position: "absolute",
          zIndex: 2,
          left: 0,
          top: 12,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: wp(10),
        }}
      >
        {cross ? <Cross simple={true} /> : <Back color={"#455A64"} />}
      </TouchableOpacity>
      <WebView
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
        onError={() => {
          setLoading(false);
        }}
        setSupportMultipleWindows={false}
        useWebView2={true}
        ref={webViewRef}
        source={{ uri: props.route.params }} // Change the URL to test
        style={styles.webview}
        onNavigationStateChange={onNavigationStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

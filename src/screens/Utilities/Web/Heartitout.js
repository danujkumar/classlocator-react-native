import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import { useAuth } from '../../../utils/auth';
import Back from '../../../components/Back';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export default function Heartitout(props) {
  const [loading, setLoading] = useState(true);
  const [backPressedOnce, setBackPressedOnce] = useState(false);
  const navigation = useNavigation();
  const {stopServer} = useAuth();
  let sharedLink = "https://nitrr-class-locator.netlify.app/"

  const webViewRef = useRef(null);

  const runJavaScript = () => {
    const getSessionStorage = `
      (function() {
        let sessionData = {};
        for (let i = 0; i < sessionStorage.length; i++) {
          let key = sessionStorage.key(i);
          sessionData[key] = sessionStorage.getItem(key);
        }
        window.ReactNativeWebView.postMessage(JSON.stringify(sessionData));
      })();
    `
    webViewRef.current.injectJavaScript(getSessionStorage);
  }

  const keyValuePairs = {
    map_no: props.route.params.map_no,
  };

  useEffect(() => {
    if (webViewRef.current) {
      const sessionStorageScript = `
        (function() {
          ${Object.entries(keyValuePairs)
            .map(
              ([key, value]) => `sessionStorage.setItem('${key}', '${value}');`,
            )
            .join('')}
        })();
      `;
      webViewRef.current.injectJavaScript(sessionStorageScript);
    }
  }, [keyValuePairs]);

  let sessionData;

  useEffect(() => {
    const backAction = () => {
      if (backPressedOnce) {
        navigation.goBack();
      } else {
        setBackPressedOnce(true);
        showToast('Press back again to close current session');
        setTimeout(() => {
          setBackPressedOnce(false);
        }, 2000);
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [backPressedOnce]);

  navigation.addListener('blur',()=>{
    stopServer();
  })

  useEffect(() => {
    if (props.route.params.link == null || props.route.params.link == undefined)
      showToast('The link is broken, please reload the app.');
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{
            height: hp(80),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 2,
          }}>
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
          runJavaScript();
          console.log(`${sharedLink}${JSON.stringify(sessionData)}`)
        }}
        activeOpacity={0.8}
        style={{
          width: wp(14),
          height: hp(4),
          backgroundColor: '#fff',
          // position: 'absolute',
          zIndex: 2,
          left: 0,
          top: 12,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(10),
        }}>
        <Back color={'#455A64'} />
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
        pullToRefreshEnabled={true}
        setSupportMultipleWindows={false}
        useWebView2={true}
        ref={webViewRef}
        source={{uri: props.route.params.link}} // Change the URL to test
        onMessage={(event) => {
          sessionData = JSON.parse(event.nativeEvent.data);
        }}
        style={styles.webview}
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

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  ToastAndroid,
  TouchableOpacity,
  Image,
  StatusBar,
  Text
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../../utils/auth';
import Back from '../../../components/Back';
import Share from 'react-native-share';
// import {Image} from 'react-native-svg';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

const ShareMessage = text => {
  const shareMessage = async text => {
    try {
      const options = {
        message: text,
      };
      await Share.open(options);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };
  shareMessage(text);
};

function jsonToUrlParams(json) {
  const params = new URLSearchParams();
  const baseURL = 'https://nitrr-class-locator.netlify.app/maps';
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      params.append(key, json[key]);
    }
  }
  return `${baseURL}?${params.toString()}`;
}

export default function Heartitout(props) {
  const [loading, setLoading] = useState(true);
  const [backPressedOnce, setBackPressedOnce] = useState(false);
  const navigation = useNavigation();
  const {stopServer} = useAuth();

  const keyValuePairs = {
    map_no: props.route.params.map_no,
  };

  const webViewRef = useRef(null);
  useEffect(() => {
    if (webViewRef.current && keyValuePairs.map_no != -1) {
      if (keyValuePairs.map_no == 3) {
        const data = JSON.stringify(props.route.params.parameters);
        webViewRef.current.postMessage(data);
      } else {
        const data = JSON.stringify(keyValuePairs);
        webViewRef.current.postMessage(data);
      }
    }
  }, [keyValuePairs]);

  let sessionData;

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
  `;

    webViewRef.current.injectJavaScript(getSessionStorage);
  };

  useEffect(() => {
    const backAction = () => {
      if (backPressedOnce) {
        navigation.navigate('main');
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

  navigation.addListener('blur', () => {
    stopServer();
  });

  useEffect(() => {
    if (props.route.params.link == null || props.route.params.link == undefined)
      showToast('The link is broken, please reload the app.');
  }, []);

  return (
    <View style={styles.container}>
              <StatusBar
          backgroundColor={'transparent'}
          // barStyle={"light-content"}
          // hidden={true}
          translucent={true}
        />
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
        }}
        activeOpacity={0.8}
        style={{
          width: wp(10),
          height: hp(8),
          backgroundColor: '#fff',
          borderWidth: 1,
          position: 'absolute',
          zIndex: 2,
          right: 20,
          bottom: 20,
          justifyContent: 'center',
          // display:'flex',
          // flexDirection:'row',
          alignItems: 'center',
          borderRadius: wp(6),
        }}>
        {/* <Back color={'#455A64'} /> */}
        <Image
          source={require('../../../../assets/images/sharelocation.png')}
          style={{
            width: wp(10),
            height: wp(10),
            // backgroundColor: 'red',
          }}
        />
        {/* <Text style={{textAlign:'center', fontSize:wp(2) }} >Share Location</Text> */}
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
        source={{uri: props.route.params.link}} // Change the URL to test
        onMessage={event => {
          sessionData = JSON.parse(event.nativeEvent.data);
          ShareMessage(
            `Please find my current location attached for your reference, ${jsonToUrlParams(
              sessionData,
            )}`,
          );
        }}
        style={styles.webview}
        ref={webViewRef}
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

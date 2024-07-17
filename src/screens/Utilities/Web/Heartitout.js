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
import Back from '../../../components/Back';
let canGoBack = false;
const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export default function Heartitout(props) {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const webViewRef = useRef(null);

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

  const backHandler = () => {
    if (canGoBack) goBack();
    else navigation.goBack();
    return true;
  };

  navigation.addListener('focus', () => {
    BackHandler.addEventListener('hardwareBackPress', backHandler);
  });

  navigation.addListener('blur', () => {
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
  });

  const goBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

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
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
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
      </TouchableOpacity> */}

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

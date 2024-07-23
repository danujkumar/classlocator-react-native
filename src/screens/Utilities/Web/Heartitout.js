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
import {useAuth} from '../../../utils/auth';
import Back from '../../../components/Back';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

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
    if(webViewRef.current && keyValuePairs.map_no != -1){
      const data = JSON.stringify(keyValuePairs);
      webViewRef.current.postMessage(data);
    }
  }, [keyValuePairs])

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

  navigation.addListener('blur', () => {
    stopServer();
  });

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
        source={{uri: props.route.params.link}} // Change the URL to test
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

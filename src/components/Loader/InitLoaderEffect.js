import {
  View,
  Text,
  Image,
  StyleSheet,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme';
import RNFS from 'react-native-fs';
import { useAuth } from '../../utils/auth';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export default function InitLoaderEffect() {
  const navigation = useNavigation();
  const backHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  navigation.addListener('focus', () => {
    BackHandler.addEventListener('hardwareBackPress', backHandler);
  });

  navigation.addListener('blur', () => {
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
  });

  const initializer = async () => {
    const ASSETS_FOLDER_NAME = 'build';
    const DOCUMENT_FOLDER_PATH = `${RNFS.CachesDirectoryPath}/${ASSETS_FOLDER_NAME}`;

    const copyAssetsFolderContents = async (sourcePath, targetPath) => {
      try {
        const items = await RNFS.readDirAssets(sourcePath);
        const targetExists = await RNFS.exists(targetPath);
        if (!targetExists) {
          await RNFS.mkdir(targetPath);
        }

        for (const item of items) {
          const sourceItemPath = `${sourcePath}/${item.name}`;
          const targetItemPath = `${targetPath}/${item.name}`;

          if (item.isDirectory()) {
            await copyAssetsFolderContents(sourceItemPath, targetItemPath);
          } else {
            await RNFS.copyFileAssets(sourceItemPath, targetItemPath);
          }
        }
      } catch (error) {
        console.error('Failed to copy assets folder contents:', error);
        throw error;
      }
    };

    copyAssetsFolderContents(ASSETS_FOLDER_NAME, DOCUMENT_FOLDER_PATH);
  };

  const {startServer} = useAuth();

  useEffect(() => {
    initializer().then(()=>{
      navigation.navigate("main")
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  
  return (
    <SafeAreaView className="bg-white" style={{height: hp(100)}}>
      {/* <TopBar /> */}
      {/* <LottieView
        source={require()}
        style={styles.animation}
        // autoPlay
      /> */}

      <View
        style={{
          width: wp(100),
          position: 'absolute',
          // backgroundColor: "#fff",
          zIndex: 2,
          marginTop: hp(20),
          height: hp(10),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: wp(5.2),
            width: wp(100),
            fontWeight: '500',
            textAlign: 'center',
            color: theme.black,
          }}>
          Loading Your Wellbeing Journey
        </Text>
      </View>
      <Image
        source={require('../../../assets/images/loader2.gif')}
        resizeMode="stretch"
        style={{
          height: wp(150),
          width: wp(100),
          // marginTop: hp(18),
          // backgroundColor:'red',
          position: 'absolute',
          bottom: 0,
        }}
      />
      {/* <View style={{backgroundColor:'#CAEBFF', height:hp(34)}}>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: '#043953',
    fontSize: hp(2),
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: hp(3),
    width: wp(80),
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  animation: {
    width: 100,
    height: 100,
  },
});

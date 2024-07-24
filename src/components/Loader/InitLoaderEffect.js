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
import engine from '../../../android/app/src/main/assets/engine/release.json'
import { compareVersions } from 'compare-versions';
import { useAuth } from '../../utils/auth';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export default function InitLoaderEffect({route}) {
  const ASSETS_FOLDER_NAME = 'engine';
  const DOCUMENT_FOLDER_PATH = `${RNFS.CachesDirectoryPath}/${ASSETS_FOLDER_NAME}`;
  const CURRENT_ENGINE_VERSION = engine.version;

  const navigation = useNavigation();
  const backHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  const {startServer, trackM} = useAuth();
  navigation.addListener('focus', () => {
    BackHandler.addEventListener('hardwareBackPress', backHandler);
  });

  navigation.addListener('blur', () => {
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
  });

  const replaceEngine = async () => {
    const targetExists = await RNFS.exists(DOCUMENT_FOLDER_PATH);
    if (targetExists) {
      await RNFS.unlink(DOCUMENT_FOLDER_PATH);
      console.log(targetExists)
    }
    initializer();
  };

  const readVer = async () => {
    try {
      const path = DOCUMENT_FOLDER_PATH + '/release.json';
      const fileExists = await RNFS.exists(path);
      if (fileExists) {
        const fileContent = await RNFS.readFile(path);
        const jsonData = JSON.parse(fileContent);
        
        const status = compareVersions(CURRENT_ENGINE_VERSION, jsonData.version);
        console.log(CURRENT_ENGINE_VERSION, jsonData.version, status, DOCUMENT_FOLDER_PATH);
        if(status == -1 || status == 1) replaceEngine(); 
      } else {
        await replaceEngine();
      }
    } catch (error) {
      console.log("from here: ",error)
      await replaceEngine();
    }
  };

  const initializer = async () => {
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

  useEffect(() => {
    initializer()
      .then(() => {
          navigation.navigate('main', route.params);
      })
      .catch(err => {
        navigation.navigate('main', route.params);
        console.log(err);
      });
  });

  return (
    <SafeAreaView
      className="bg-white"
      style={{height: hp(100), alignItems: 'center', justifyContent: 'center'}}>
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
          // marginTop: hp(20),
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
          }}></Text>
      </View>
      <Image
        source={require('../../../assets/images/favicon.png')}
        resizeMode="stretch"
        style={{
          height: wp(80),
          width: wp(80),
          // marginBottom: hp(18),
          // position: 'absolute',
          // bottom: 0,
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

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import { useAuth } from '../../utils/auth';

import TasksIcon from '../../../assets/images/TasksIcon.svg';
import NewIcon from '../../../assets/images/NewIcon.svg';
import BottomQuote from '../../../assets/images/BottomQuote.svg';
// import Help from "../../../assets/images/Help.svg";
import Help from '../../components/Help';

import {theme} from '../../theme';
import HomePageBanner from '../../components/HomePageBanner';

const Btn = () => {
  const {startServer} = useAuth();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.BookBtn}
      onPress={() => {
        startServer("main").then((res)=>{
          navigation.navigate('webview', res);
        })
      }}>
      <Text style={styles.btnText}>Welcome to Classlocator</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const {startServer} = useAuth();
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

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar
          backgroundColor={'transparent'}
          // barStyle={"light-content"}
          // hidden={true}
          translucent={true}
        />

        <ScrollView
          scrollEventThrottle={1}
          contentContainerStyle={{flexGrow: 1}}
          style={{backgroundColor: '#fff', height: hp(100)}}>
          {/* Banner */}
          <View style={{marginTop: hp(0)}}>
            <HomePageBanner />
            <View style={styles.banner}>
              <View
                className="flex-row justify-center items-center"
                style={{
                  backgroundColor: theme.maincolor,
                  width: wp(84),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}></View>

              <View
                className="flex-row justify-between items-center"
                style={{
                  marginTop: hp(4),
                  marginBottom: hp(2),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={{height: wp(27.5), width: wp(70)}}
                />
              </View>
              <Btn/>
            </View>
          </View>
          {/* Content */}
          <View
            style={[
              {
                width: wp(100),
                paddingHorizontal: wp(8),
                height: hp(15.8),
                marginTop: hp(4),
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <TouchableOpacity
              onPress={async () => {
                startServer("maps").then((res)=>{
                  navigation.navigate('webview', res);
                })
              }}

              style={[styles.card, {backgroundColor: '#FEF8C8'}]}>
              <Text style={styles.cardText}>Ground {'\n'}Floor</Text>
              <Image
                source={require('../../../assets/images/G.png')}
                style={{width: wp(18), height: wp(18), marginTop: hp(1.5)}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("progress", data);
              }}
              style={[styles.card, {backgroundColor: '#EBF2F5'}]}>
              <Text style={styles.cardText}>First {'\n'}Floor</Text>
              <Image
                source={require('../../../assets/images/S.png')}
                style={{width: wp(18), height: wp(18)}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, {backgroundColor: '#EAF7FC'}]}
              onPress={() => {
                // navigation.navigate("webview", whatsnew);
              }}>
              <Text style={styles.cardText}>Second {'\n'}Floor</Text>
              <Image
                source={require('../../../assets/images/F.png')}
                style={{width: wp(18), height: wp(18)}}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("webview", product);
            }}
            className="flex-col items-center"
            style={[
              styles.cardContainer,
              {height: hp(15.8), marginTop: hp(3)},
            ]}>
            <View style={[styles.packageCard, {backgroundColor: '#EAF7FC'}]}>
              <View
                className="flex-col justify-between items-start "
                style={{height: hp(9)}}>
                <Text style={styles.cardText}>Self-care Tools for you</Text>
                <View style={styles.Btn}>
                  <Text style={styles.btnText2}>Discover Now</Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/SelfCareIcon2.png')}
                style={{width: wp(18), height: hp(14)}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("webview", product);
            }}
            className="flex-col items-center"
            style={[
              styles.cardContainer,
              {height: hp(15.8), marginTop: hp(3)},
            ]}>
            <View style={[styles.packageCard, {backgroundColor: '#EAF7FC'}]}>
              <View
                className="flex-col justify-between items-start "
                style={{height: hp(9)}}>
                <Text style={styles.cardText}>Self-care Tools for you</Text>
                <View style={styles.Btn}>
                  <Text style={styles.btnText2}>Discover Now</Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/support.png')}
                style={{width: wp(18), height: hp(14)}}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  banner: {
    // backgroundColor: 'black',
    width: wp(84),
    position: 'absolute',
    left: wp(8),
    right: wp(8),
    top: hp(4),
    zIndex: 2,
  },

  BookBtn: {
    marginTop: hp(2),
    width: wp(84),
    height: hp(6),
    backgroundColor: 'white',
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText: {
    textAlign: 'center',
    color: '#01818C',
    fontSize: wp(4),
    fontFamily: 'Roboto',
    fontWeight: '600',
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
    height: '100%',
    borderRadius: wp(4),
    paddingTop: hp(1),
    paddingBottom: hp(1),
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardText: {
    textAlign: 'center',
    color: '#455A64',
    fontSize: wp(4),
    fontFamily: 'Roboto',
    fontWeight: '800',
  },

  test: {
    width: wp(40),
    height: hp(40),
    backgroundColor: 'red',
  },

  // Feel Banner

  feelBanner: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },

  // Package

  packageCard: {
    width: wp(84),
    height: '100%',
    borderRadius: wp(4),
    backgroundColor: '#FEF8C8',
    paddingHorizontal: wp(4),
    paddingLeft: wp(6),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  feelBanner: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },

  Btn: {
    // marginTop: hp(2),
    width: wp(38),
    height: hp(4),
    backgroundColor: '#01818C',
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText2: {
    textAlign: 'center',
    color: 'white',
    fontSize: wp(4),
    fontFamily: 'Roboto',
    fontWeight: '600',
  },

  cardContainer2: {
    width: wp(100),
    paddingHorizontal: wp(8),
    // height: hp(15.8),
    // marginTop: hp(4),
    // backgroundColor: 'red'
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

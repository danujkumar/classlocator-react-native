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
import {useAuth} from '../../utils/auth';
import {useState} from 'react';
import Share from 'react-native-share';

import {theme} from '../../theme';
import HomePageBanner from '../../components/HomePageBanner';
import PingCard from '../../components/PingCard';

const Btn = () => {
  const {startServer} = useAuth();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.BookBtn}
      onPress={() => {
        startServer('main').then(res => {
          navigation.navigate('webview', {link: res, map_no: 0});
        });
      }}>
      <Text style={styles.btnText}>Search & Go</Text>
    </TouchableOpacity>
  );
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

export default function HomeScreen() {
  const navigation = useNavigation();
  const {startServer, closeNow, openLinks} = useAuth();
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

  const sendEmail = () => {
    const email = 'elexcode404@gmail.com';
    const subject = 'Give us feedback or let us know if you find any bugs';
    const body = `To Elex-Code Team,

I am writing to give a feedback or report a bug. Below are the details:

Feedback/Bug Report: [Detailed description of the bug, or the feedback you want to give us.]

Please let me know if you need any further information or assistance.

Thank you for your attention to this matter.

Best regards,
[Your Full Name]
[Your Contact Information]
[Your Branch]`;

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    openLinks(mailtoURL);
  };

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
                  marginTop: hp(5),
                  marginBottom: hp(2),
                  justifyContent: 'center',
                  // backgroundColor:'red',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={{height: wp(23.5), width: wp(60), marginBottom: hp(2)}}
                />
                <Btn />
              </View>
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
                startServer('maps').then(res => {
                  navigation.navigate('webview', {link: res, map_no: 0});
                });
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
                startServer('maps').then(res => {
                  navigation.navigate('webview', {link: res, map_no: 1});
                });
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
                startServer('maps').then(res => {
                  navigation.navigate('webview', {link: res, map_no: 2});
                });
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
              ShareMessage(
                `Hey! 🚀 Check out the new and improved ClassLocator app! Find emergency services instantly, even offline. Download now from the Play Store and share with your friends and family, https://nitrr-class-locator.netlify.app/`,
              );
            }}
            className="flex-col items-center"
            style={[
              styles.cardContainer,
              {height: hp(15.8), marginTop: hp(3)},
            ]}>
            <View style={[styles.packageCard, {backgroundColor: '#EAF7FC'}]}>
              <View
                style={{
                  height: hp(8),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.cardText}>Share with your friends</Text>
                <View style={styles.Btn}>
                  <Text style={styles.btnText2}>Instantly</Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/share.png')}
                style={{width: wp(18), height: wp(18)}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col items-center"
            onPress={() => {
              closeNow(true);
            }}
            style={[
              styles.cardContainer,
              {height: hp(15.8), marginTop: hp(3)},
            ]}>
            <View style={[styles.packageCard, {backgroundColor: '#EBF2F5'}]}>
              <View
                // className="flex-col justify-between items-start "
                style={{
                  height: hp(8),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.cardText}>What's New</Text>
                <View style={styles.Btn}>
                  <Text style={styles.btnText2}>Find it out</Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/neww.png')}
                style={{width: wp(18), height: wp(18)}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("webview", product);
              sendEmail();
            }}
            className="flex-col items-center"
            style={[
              styles.cardContainer,
              {height: hp(15.8), marginTop: hp(3)},
            ]}>
            <View style={[styles.packageCard, {backgroundColor: '#EAF7FC'}]}>
              <View
                style={{
                  height: hp(8),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.cardText}>Contact Us</Text>
                <View style={styles.Btn}>
                  <Text style={styles.btnText2}>Reach out here</Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/support.png')}
                style={{width: wp(18), height: wp(18)}}
              />
            </View>
          </TouchableOpacity>

          <View style={{height: hp(7)}}></View>
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
    width: wp(75),
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
    fontSize: wp(5),
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

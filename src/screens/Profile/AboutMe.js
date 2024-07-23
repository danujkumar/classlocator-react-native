import {
  SafeAreaView,
  StyleSheet,
  BackHandler,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme';
import Coffee from '../../components/Coffee';
import {useAuth} from '../../utils/auth';
import version from '../../utils/version.json'

export default function AboutMe() {
  const navigation = useNavigation();
  const backHandler = () => {
    navigation.goBack();
    return true;
  };

  const {openLinks, closeNow2, trackM} = useAuth();

  navigation.addListener('focus', () => {
    BackHandler.addEventListener('hardwareBackPress', backHandler);
  });

  navigation.addListener('blur', () => {
    BackHandler.removeEventListener('hardwareBackPress', backHandler);
  });

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            display: 'flex-1',
            flexDirection: 'col',
            alignItems: 'center',
          }}
          keyboardShouldPersistTaps="always"
          style={{backgroundColor: '#fff', height: hp(100)}}>
          <View
            style={{
              height: hp(21),
              width: wp(100),
              backgroundColor: '#1DE099',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: wp(8.5), marginTop: hp(4), color:'white'}}>
              Who We Are
            </Text>

            <TouchableOpacity
              onPress={() => {
                trackM('Github')
                openLinks(
                  'https://github.com/danujkumar/classlocator-react-native.git',
                );
              }}
              style={{
                width: wp(40),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp(1.5),
              }}>
              <Text style={{textAlign: 'center', fontSize: wp(5), color:'white'}}>
                Contribute{'\n'}
                on
              </Text>
              <Image
                source={require('../../../assets/images/Vector.png')}
                style={{
                  height: wp(11),
                  width: wp(11),
                }}
              />
            </TouchableOpacity>
          </View>

          <Text style={{fontSize: wp(6.4), color: '#595959', marginTop: hp(2)}}>
            Meet the Team
          </Text>

          <View
            style={{
              backgroundColor: 'transparent',
              height: hp(32),
              width: wp(92),
              marginTop: hp(1.5),
              display: 'flex',
              // justifyContent:'center',
              paddingVertical: hp(1),
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* Anuj sections starts here */}
            <View
              style={{
                width: wp(86),
                height: hp(6),
                borderWidth: wp(0.3),
                borderColor: '#A3A3A3',
                borderRadius: wp(2),
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingHorizontal: wp(3.2),
                flexDirection: 'row',
                backgroundColor: 'rgba(217,217,217,0.2)',
              }}>
              <Text style={{color: '#595959', fontSize: wp(4.5)}}>
                D Anuj Kumar
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPressIn={() => {
                    trackM('Github-Anuj')
                    openLinks('https://github.com/danujkumar');
                  }}
                  style={{marginLeft: wp(2)}}>
                  <Image
                    source={require('../../../assets/images/github.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: wp(3)}}
                  onPress={() => {
                    trackM('Mail-Anuj')
                    openLinks('mailto:anuj.as828@gmail.com');
                  }}>
                  <Image
                    source={require('../../../assets/images/mail.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: wp(3)}}
                  onPress={() => {
                    trackM('Insta-Anuj')
                    openLinks('https://www.instagram.com/anuj_singh828/');
                  }}>
                  <Image
                    source={require('../../../assets/images/insta.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: wp(3)}}
                  onPress={() => {
                    trackM('LinkedIN-Anuj')
                    openLinks('https://www.linkedin.com/in/d-anuj-kumar/');
                  }}>
                  <Image
                    source={require('../../../assets/images/linkedin.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Harsh section start here */}
            <View
              style={{
                width: wp(86),
                height: hp(6),
                borderWidth: wp(0.3),
                borderColor: '#A3A3A3',
                borderRadius: wp(2),
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingHorizontal: wp(3.2),
                flexDirection: 'row',
                backgroundColor: 'rgba(217,217,217,0.2)',
              }}>
              <Text style={{color: '#595959', fontSize: wp(4.5)}}>
                Harsh Dewangan
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    trackM('G-Harsh')
                    openLinks('https://github.com/harshdew02');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/github.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('M-Harsh')
                    openLinks('mailto:harshdewangan032@gmail.com');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/mail.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('I-Harsh')
                    openLinks('https://www.instagram.com/harshdew16/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/insta.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('L-Harsh')
                    openLinks('https://www.linkedin.com/in/harshdew16/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/linkedin.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Aniket sections start here */}
            <View
              style={{
                width: wp(86),
                height: hp(6),
                borderWidth: wp(0.3),
                borderColor: '#A3A3A3',
                borderRadius: wp(2),
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingHorizontal: wp(3.2),
                flexDirection: 'row',
                backgroundColor: 'rgba(217,217,217,0.2)',
              }}>
              <Text style={{color: '#595959', fontSize: wp(4.5)}}>
                Aniket Kumar
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    trackM('G-Aniket')
                    openLinks('https://github.com/Kraniket901');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/github.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('M-Aniket')
                    openLinks('mailto:kraniket123654@gmail.com');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/mail.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('I-Aniket')
                    openLinks('https://www.instagram.com/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/insta.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('L-Aniket')
                    openLinks('https://www.linkedin.com/in/kraniket901/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/linkedin.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Mohit section start here */}
            <View
              style={{
                width: wp(86),
                height: hp(6),
                borderWidth: wp(0.3),
                borderColor: '#A3A3A3',
                borderRadius: wp(2),
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingHorizontal: wp(3.2),
                flexDirection: 'row',
                backgroundColor: 'rgba(217,217,217,0.2)',
              }}>
              <Text style={{color: '#595959', fontSize: wp(4.5)}}>
                Mohit Doraiburu
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    trackM('G-Mohit')
                    openLinks('https://github.com/moh1t-do');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/github.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('M-Mohit')
                    openLinks('mailto:mohitd2288@gmail.com');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/mail.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('I-Mohit')
                    openLinks('https://www.instagram.com/_moh1t.do_/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/insta.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    trackM('L-Mohit')
                    openLinks('https://www.linkedin.com/in/mohitd137/');
                  }}
                  style={{marginLeft: wp(3)}}>
                  <Image
                    source={require('../../../assets/images/linkedin.png')}
                    style={{
                      height: wp(6),
                      width: wp(6),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              height: hp(17),
              width: wp(90),
              marginTop: hp(3),
              // backgroundColor: 'red',
              borderRadius: wp(4),
              backgroundColor: 'rgba(99, 230, 190, 0.2)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#595959',
                width: wp(76),
                textAlign: 'center',
                fontSize: wp(3.8),
                marginBottom: wp(3),
                fontStyle:'italic',
                lineHeight:wp(5)
              }}>
              Class Locator Gives You The Most Simplest & Quickest Way to Find
              the Pathway to Your ClassRoom
            </Text>

            <Text
              style={{
                color: 'black',
                width: wp(76),
                textAlign: 'center',
                fontSize: wp(4.0),
                fontWeight: '500',
              }}>
              Application Version : {version.app}
            </Text>

            <Text
              style={{
                color: 'black',
                width: wp(76),
                textAlign: 'center',
                fontSize: wp(4.0),
                fontWeight: '500',
              }}>
              Engine Version : {version.engine}
            </Text>
          </View>

          <TouchableOpacity onPress={()=>{trackM('Coffee');closeNow2(true)}}>
            <View style={{justifyContent: 'center', marginTop: hp(3)}}>
              <Coffee />
              <Image
                source={require('../../../assets/images/cof.png')}
                style={{
                  height: wp(14),
                  width: wp(13),
                  position: 'absolute',
                  right: wp(9),
                }}
              />
            </View>
          </TouchableOpacity>

          <Text style={{marginTop:hp(2), color:'grey'}} >
            Ⓒ 2024 ElexCode. All rights reserved.
          </Text>

          <View style={{height:hp(6)}}>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: hp(5.7),
    width: wp(87),
    backgroundColor: 'white',
    borderRadius: wp(6),
    borderWidth: wp(0.3),
    borderColor: theme.black,
    borderStyle: 'solid',
    color: '#455A64',
    fontWeight: '500',
    paddingHorizontal: wp(4),
    fontSize: wp(4),
  },

  // ***
  banner: {
    // backgroundColor: 'black',
    width: wp(92),
    position: 'absolute',
    left: wp(8),
    right: 0,
    top: hp(2.6),
    zIndex: 2,
  },

  // *****
  // Cards*******
  cardContainer: {
    width: wp(100),
    paddingHorizontal: wp(8),
  },

  sessions: {
    width: '100%',
    backgroundColor: '#f8f7fc',
    borderRadius: wp(2.5),
    height: '100%',
  },

  scrollContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: wp(2.5),
    borderBottomRightRadius: wp(2.5),
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(69, 90, 100, 0.2)',
  },

  BookBtn2: {
    width: wp(84),
    height: hp(6),
    backgroundColor: '#01818c',
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText2: {
    textAlign: 'center',
    color: '#01818C',
    fontSize: wp(4),
    fontFamily: 'Roboto',
    fontWeight: '600',
  },

  container3: {
    width: wp(30),
    height: hp(0),
    borderBottomWidth: wp(0.4),
    borderColor: 'rgba(69, 90, 100, 0.30)',
  },

  BookBtn3: {
    width: wp(42),
    height: hp(5),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.maincolor,
  },

  btnText3: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp(4),
    fontFamily: 'Roboto',
    fontWeight: '700',
  },

  card: {
    width: wp(24),
    height: '100%',
    borderRadius: wp(4),
    paddingTop: hp(1),
    paddingBottom: hp(1.5),
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
    width: '100%',
    // height: '100%',
    backgroundColor: 'red',
    // maxHeight: hp(46), // Set your specific maximum height here
    borderWidth: 1, // Just for visualization purposes
    borderColor: 'black', // Just for visualization purposes
    // padding: 10,
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

  cardContiner2: {
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

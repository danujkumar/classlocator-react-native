import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../theme';
import {useAuth} from '../utils/auth';

const B = props => <Text style={{fontWeight: '500'}}>{props.children}</Text>;

const PingCard = () => {
  const {closeNow, close} = useAuth();
  return (
    <View
      style={{
        width: wp(100),
        height: hp(104.2),
        position: 'absolute',
        zIndex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(256, 256, 256, 0.5)',
        display: close ? 'flex' : 'none',
      }}>
      <View
        style={{
          paddingVertical: hp(3.5),
          height: hp(60),
          width: wp(95),
          backgroundColor: '#fff',
          marginTop: hp(0),
          borderRadius: wp(8),
          paddingHorizontal: wp(4),
          alignItems: 'center',
          borderWidth: hp(0.1),
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: wp(5.4),
            fontWeight: '500',
            textAlign: 'center',
            color: '#455A64',
          }}>
          What's New in Classlocator 2.0!
        </Text>
        {/* <HomePing width={wp(22.66)} height={wp(20.32)} /> */}
        <View
          style={{
            height: hp(38),
            width: wp(85),
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: wp(4.2), color: 'black'}}>
            <B>1. Offline Mode:</B> Full functionality without an internet
            connection.
          </Text>
          <Text style={{fontSize: wp(4.2), color: 'black'}}>
            <B>2. Share Location:</B> Easily share your current location with
            others with just a tap!
          </Text>
          <Text style={{fontSize: wp(4.2), color: 'black'}}>
            <B>3. Quick Actions:</B> Locate emergency services instantly on
            maps.
          </Text>
          <Text style={{fontSize: wp(4.2), color: 'black'}}>
            <B>4. Open Source:</B> Contribute to ClassLocator's development.
          </Text>
          <Text style={{fontSize: wp(4.2), color: 'black'}}>
            <B>5. Enhanced Contact Us:</B> Seamlessly connect and register
            concerns.
          </Text>

          <Text
            style={{
              fontSize: wp(4.2),
              // width: wp(86),
              marginTop: hp(1),
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            Discover the new ClassLocator today and share it with your friends
            and family!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            {
              backgroundColor: theme.maincolor,
              width: wp(34),
              height: hp(6),
              borderRadius: wp(4),
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            },
          ]}
          onPress={() => {
            closeNow(false);
          }}>
          <Text style={[{color: '#fff', fontSize: wp(5)}]}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PingCard;

const styles = StyleSheet.create({});

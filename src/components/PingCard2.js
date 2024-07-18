import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomePing from '../../assets/images/homePing.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../theme';
import {useAuth} from '../utils/auth';

const B = props => <Text style={{fontWeight: '500'}}>{props.children}</Text>;

const PingCard2 = () => {
  const {closeNow2, close2} = useAuth();
  return (
    <View
      style={{
        width: wp(100),
        height: hp(104.2),
        position: 'absolute',
        zIndex: 5,
        backgroundColor: 'rgba(256, 256, 256, 0.5)',
        display: close2 ? 'flex' : 'none',
      }}>
      <View
        style={{
          paddingVertical: hp(3.5),
          height: hp(60),
          width: wp(100),
          backgroundColor: '#fff',
          marginTop: hp(16),
          borderRadius: wp(8),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: '500',
            textAlign: 'center',
            color: '#455A64',
            marginTop: hp(2)
          }}>
          Please Donate Us
        </Text>

        <Image
          source={require('../../assets/images/qr.png')}
          style={{width: wp(60), height: wp(60)}}
        />

        <TouchableOpacity style={{display:'flex', flexDirection:'row', padding:wp(1)}} >
          <Text style={{fontSize:wp(4), color:'black'}} >UPI ID: anuj.as828@oksbi</Text>
          <Image
          source={require('../../assets/images/copy.png')}
          style={{width: wp(5), height: wp(5), marginLeft:wp(2)}}
        />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            {
              backgroundColor: theme.maincolor,
              width: wp(30),
              height: hp(4),
              borderRadius: wp(4),
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            },
          ]}
          onPress={() => {
            closeNow2(false);
          }}>
          <Text style={[{color: '#fff', fontSize: wp(4)}]}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PingCard2;

const styles = StyleSheet.create({});

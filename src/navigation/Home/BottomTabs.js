import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeScreen from '../../screens/Home/Home_Old.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../components/HomeIcon.js';
import ProfileIcon from '../../components/Profile.js';
import AboutMe from '../../screens/Profile/AboutMe.js';
import PingCard from '../../components/PingCard.js';
import { useAuth } from '../../utils/auth.js';
import PingCard2 from '../../components/PingCard2.js';

const screenOptions = {
  contentStyle: {
    backgroundColor: 'red',
    // backgroundColor: "#FF0000",
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    // elevation: 4,
    height: hp(8),
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 4,
    // borderTopLeftRadius: 21,
    // borderTopRightRadius: 21,
    shadowColor: '#52006A',

    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
};

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const {close} = useAuth();
  const {close2} = useAuth();
  return (
    <View
      style={{
        width: wp(100),
        height: hp(104.1),
      }}>
      {close ? <PingCard /> : <></>}
      {close2 ? <PingCard2/> : <></>}
      <Tab.Navigator
        initialRouteName="Discover_Tab"
        screenOptions={screenOptions}>
        <Tab.Screen
          name="Home_Tab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                // <TouchableOpacity>
                <View
                  style={{
                    width: wp(16),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <HomeIcon color={focused ? '#01818C' : '#455A64'} />
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: '700',
                      fontSize: wp(3),
                      color: focused ? '#01818C' : '#455A64',
                    }}>
                    Home
                  </Text>
                </View>
                //  </TouchableOpacity>
              );
            },

            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
            // animation: 'flip'
            // animation: 'none'
            // animation: 'slide_from_right'
          }}
        />

        <Tab.Screen
          name="Profile_Tab"
          component={AboutMe}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                // <TouchableOpacity>
                <View
                  style={{
                    width: wp(16),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ProfileIcon color={focused ? '#01818C' : '#455A64'} />
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: '700',
                      fontSize: wp(3),
                      color: focused ? '#01818C' : '#455A64',
                    }}>
                    About Us
                  </Text>
                </View>
                //  </TouchableOpacity>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});

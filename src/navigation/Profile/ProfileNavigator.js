import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AboutMe from '../../screens/Profile/AboutMe';

const ProfileStack = createStackNavigator();

export default function ProfileNavigator(props) {
    const data = props.route.params.data.route.params;
    // console.log("It is from profile navigator: ",data)
    return (
        <ProfileStack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: '#FFF'
                },
                headerShown: false
            }}
            initialRouteName={'profile'}
        >
            <ProfileStack.Screen name="aboutMe" component={AboutMe} />
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})
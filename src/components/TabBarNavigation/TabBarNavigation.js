import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screen/App/HomeScreen'
import PostScreen from '../../screen/App/PostScreen'
import ProfileScreen from '../../screen/App/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator()

const TabBarNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color="black" size={size} />
                        ),
                        tabBarOptions: { showLabel: false }
                    }
                }
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ size }) => (
                            <Icon name="add-circle" color="black" size={50} />
                        ),
                        tabBarOptions: { showLabel: false }
                    }
                }
                name="Post"
                component={PostScreen}
            />
            <Tab.Screen
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="person" color="black" size={size} />
                        ),
                        tabBarOptions: { showLabel: false }
                    }
                }
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default TabBarNavigation

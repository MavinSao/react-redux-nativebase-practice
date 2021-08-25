import React, { useState, useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screen/LoginScreen/LoginScreen'
import RegisterScreen from '../../screen/RegisterScreen/RegisterScreen'
import TabBarNavigation from '../TabBarNavigation/TabBarNavigation'
import AuthProvider, { AuthContext } from '../../provider/AuthProvider'

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="AppScreen" component={TabBarNavigation} />
        </Stack.Navigator>
    )
}

const StackNavigation = () => {

    let { auth } = useContext(AuthContext)

    useEffect(() => {
        console.log(auth);
    }, [])

    // return auth.isAuth ? <AppStack /> : <AuthStack />
    return <AppStack />
}

export default StackNavigation

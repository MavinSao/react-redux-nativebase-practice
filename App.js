import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import StackNavigation from './src/components/StackNavigation/StackNavigation'
import AuthProvider from './src/provider/AuthProvider'

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigation />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App

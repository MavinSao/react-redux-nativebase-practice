import React from 'react'
import { Center, Factory } from 'native-base'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const FactoryView = () => {

    const FactoryView = Factory(View)

    return (
        <FactoryView bg="emerald.400" borderRadius={4} size={16}>
            <Center flex={1}>
                <Icon name='alarm-outline' size={32} />
            </Center>
        </FactoryView>
    )
}

export default FactoryView

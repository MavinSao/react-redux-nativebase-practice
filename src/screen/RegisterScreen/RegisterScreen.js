import { Box, HStack, FormControl, Input, Button, Heading, VStack } from 'native-base'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Circle } from 'react-native-svg'
import Icon from 'react-native-vector-icons/Ionicons'
import { register } from '../../service/authService'
const RegisterScreen = ({ navigation }) => {

    const [fullname, setFullname] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    onSignUp = () => {
        register(fullname, username, password).then((response) => {
            console.log(response);
        })
    }


    return (
        <Box
            safeArea
            flex={1}
            p={2}
            w="100%"
            mx="auto"
            backgroundColor="white"
        >
            <TouchableOpacity
                onPress={() => navigation.pop()}
            >
                <Icon name="chevron-back-outline" color="black" size={35} />
            </TouchableOpacity>

            <VStack
                flex={1}
                px={5}
            >
                <VStack top={10} width="100%">
                    <Heading fontSize={40}>
                        Register
                    </Heading>
                    <Heading my={2} color="muted.400" size="lg">
                        Signup to login
                    </Heading>
                    <VStack my={5}>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'md', fontWeight: 600 }}>
                                Full Name
                            </FormControl.Label>
                            <Input _focus={{ borderColor: 'black' }} />
                        </FormControl>
                        <FormControl my={5}>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'md', fontWeight: 600 }}>
                                Username
                            </FormControl.Label>
                            <Input _focus={{ borderColor: 'black' }} />
                        </FormControl>
                        <FormControl >
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'md', fontWeight: 600 }}>
                                Password
                            </FormControl.Label>
                            <Input type="password" _focus={{ borderColor: 'black' }} />
                        </FormControl>
                        <Button mt={4} backgroundColor="black" p={4}
                            onPress={() => navigation.pop()}
                        >
                            Register
                        </Button>

                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}

export default RegisterScreen

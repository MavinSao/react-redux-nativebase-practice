import { Box, Heading, HStack, Input, VStack, FormControl, Button, IconButton, Center } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { login } from '../../service/authService'
import { Alert } from 'react-native'

const messageShow = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            { text: "OK" },
            { text: "Cancel", style: "cancel" }
        ]
    )
}

const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const { auth, setAuth } = useContext(AuthContext)

    useEffect(() => {

    }, [])

    const onLogin = () => {
        login(username, password)
            .then((response) => {

                console.log(response);

                let { payload, success } = response
                if (success) {
                    setAuth({
                        isAuth: true,
                        payload: payload
                    })
                } else {

                }
            })
            .catch(error => {
                messageShow("Error Message", "Please check your username and password again!")
                console.log("==>", error)
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
            <VStack
                flex={1}
                p={5}
            >
                <VStack top={10} width="100%">
                    <Heading fontSize={40}>
                        Welcome
                    </Heading>
                    <Heading my={2} color="muted.400" size="lg">
                        Sigin to continue
                    </Heading>
                    <VStack my={5}>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'md', fontWeight: 600 }}>
                                Username
                            </FormControl.Label>
                            <Input
                                _focus={{ borderColor: 'black' }}
                                onChangeText={setUsername} />
                        </FormControl>
                        <FormControl my={5}>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'md', fontWeight: 600 }}>
                                Password
                            </FormControl.Label>
                            <Input type="password"
                                _focus={{ borderColor: 'black' }}
                                onChangeText={setPassword}
                            />
                        </FormControl>
                        <Button backgroundColor="black" p={4}
                            onPress={onLogin}
                        >
                            Login
                        </Button>
                        <Button mt={4} backgroundColor="dark.500" p={4}
                            onPress={() => navigation.push('Register')}
                        >
                            Register
                        </Button>
                        <Center p={5}>
                            <HStack>
                                <IconButton
                                    variant="unstyled"
                                    startIcon={
                                        <Icon
                                            name="logo-github"
                                            size={35}
                                        />
                                    }
                                />
                                <IconButton
                                    variant="unstyled"
                                    startIcon={
                                        <Icon
                                            name="logo-google"
                                            size={35}
                                        />
                                    }
                                />
                                <IconButton
                                    variant="unstyled"
                                    startIcon={
                                        <Icon
                                            name="logo-facebook"
                                            size={35}
                                        />
                                    }
                                />
                            </HStack>
                        </Center>
                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}

export default LoginScreen

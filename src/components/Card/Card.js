import { Box, Text, Image, Button, VStack, HStack } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Card = () => {
    return (
        <Box bg="white" rounded="xl">
            <HStack alignItems="center" space={2} my={3}>
                <Image source={{ uri: "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Screen-Shot-2020-10-06-at-11.46.24-AM.jpeg?quality=82&strip=all" }} alt="image base" resizeMode="cover" height={35} width={35} border={2} borderColor="dark.500" borderRadius={100} />
                <Text fontSize="md">Username</Text>
            </HStack>
            <Image source={{ uri: "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Screen-Shot-2020-10-06-at-11.46.24-AM.jpeg?quality=82&strip=all" }} alt="image base" resizeMode="cover" height={150} roundedTop="xl" />
            <Text fontSize="lg" my={4}>Lorem300000</Text>
            <HStack space={2}>
                <Button size="sm" backgroundColor="dark.400" variant={"solid"}>
                    <Icon name="thumbs-up" color="white" size={18} />
                </Button>
                <Button size="sm" backgroundColor="dark.400" variant={"solid"}>
                    <Icon name="chatbox" color="white" size={18} />
                </Button>
                <Button size="sm" backgroundColor="dark.400" variant={"solid"}>
                    <Icon name="arrow-redo" color="white" size={18} />
                </Button>
            </HStack>
        </Box>
    )
}

export default Card

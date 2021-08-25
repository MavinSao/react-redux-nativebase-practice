import { Box, FlatList, Heading, VStack } from 'native-base'
import React, { useState } from 'react'
import Card from '../../components/Card/Card'

const HomeScreen = () => {

    const [data, setData] = useState([
        {
            id: 1,
            caption: 'test1',
            image: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg",
            userId: '1',
            username: 'Maivn',
            owner: false
        },
        {
            id: 2,
            caption: 'test2',
            image: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg",
            userId: '1',
            username: 'Maivn',
            owner: false
        },
        {
            id: 3,
            caption: 'test3',
            image: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg",
            userId: '1',
            username: 'Maivn',
            owner: false
        }
    ])


    return (
        <Box top={5} safeArea flex={1} backgroundColor="#fff">
            <VStack px={4}>
                <Heading>
                    EYEBook
                </Heading>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <Card />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </VStack>

        </Box>
    )
}

export default HomeScreen

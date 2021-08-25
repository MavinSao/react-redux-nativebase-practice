// import api from "../api/API"

import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

const header = {
    'Content-type': 'Application/json',
    Accept: 'Application/json',
}

const baseUrl = 'http://110.74.194.124:9999/api/auth/'

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@token_key', value)
    } catch (e) {
        // saving error
    }
}

export const login = async (username, password) => {
    let data = { username, password }
    const response = await axios.post(`${baseUrl}login`, data, { headers: header })

    await storeData(response.data.payload.token)

    return response.data

}

export const register = async (fullname, username, password) => {
    let data = { fullname, username, password }
    const response = await axios.post(`${baseUrl}register`, data, { headers: header })
    console.log("response", response.data);
    return response.data
}
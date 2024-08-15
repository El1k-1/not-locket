import AsyncStorage from "@react-native-async-storage/async-storage"

export const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key)
        if (!!data){
            return false
        }
        return data;
    } catch (e) {

    }
}

export const setData = async (key, value) => {
    try {
        const data = await AsyncStorage.setItem(key, value)
        if (!!data){
            return false
        }
        return true;
    } catch (e) {

    }
}
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
    const getItems = async ( key ) => {
        try {
            const items = await AsyncStorage.getItem(key);
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error('Error to get items', error);
            return [];
        }  
    }

    const saveItem = async (key, value) => {
        try{
            const passwords = await getItems(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        }catch(error){
            console.error('Error to save item', error);
        }

    }

    const deleteItem = async (key, item) => {
        try {
            const passwords = await getItems(key);
            let myPasswords = passwords.filter((password) => password !== item);
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
            
        }catch(error){
            console.error('Error to delete item', error);
        }
    }

    return { getItems, saveItem, deleteItem }
}
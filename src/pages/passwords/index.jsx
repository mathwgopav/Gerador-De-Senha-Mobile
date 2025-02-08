import {View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useStorage } from '../../hooks/useStorage';
import { PassItem } from './components/passItem';

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([]);
    const isFocused = useIsFocused();
    const { getItems, deleteItem } = useStorage();


    useEffect(() => {
        const getPasswords = async () => {
            const passwords = await getItems('@pass');
            setListPasswords(passwords);
        }

        getPasswords();
     }, [isFocused]);

    const handleRemovePass = async(item) => {
        const passwords = await deleteItem('@pass', item);
        setListPasswords(passwords);
    }



    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View >
               
            <View style={styles.content}>
                <FlatList
                    style={{flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <PassItem 
                            data={item} 
                            removePass={()=> handleRemovePass(item)}
                            />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingHorizontal: 14,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    },
});

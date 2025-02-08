import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import * as Clipboard from "expo-clipboard"
import { useState } from 'react';
import { useStorage } from '../../hooks/useStorage';

export function ModalPassword ({password, handleClose}) {

    const { saveItem } = useStorage();

    const [pass, setPass] = useState(password);

    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password);
        setPass('Copiado!');

        handleClose();
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>{pass}</Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonTextSave}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 14,
        color: '#392de9',
        marginBottom: 20,
    },

    innerPassword: {
        width: '90%',
        height: 50,
        backgroundColor: '#0e0e0e',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    btnArea: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginTop: 8,
        alignItems: 'center',
    },

    button: {
        flex: 1,
        marginTop: 14,
        marginBottom: 14,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
    },
    buttonSave: {
        backgroundColor: '#392de9',
    },
    buttonText: {
        color: '#392de9',
        fontWeight: 'bold',
    },
    buttonTextSave: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
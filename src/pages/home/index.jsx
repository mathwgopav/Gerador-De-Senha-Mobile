import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import {useState} from 'react';
import { ModalPassword } from '../../components/modal';

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export function Home() {

  const [passwordSize, setPasswordSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleGeneretePassword = () => {

    let password = '';

    for (let i = 0, n = charset.length ; i < passwordSize; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>{passwordSize} caracteres</Text>
      
      <View style={styles.area}>
        <Slider 
          style={{height: 40}}
          minimumValue={6}
          maximumValue={20}
          value={passwordSize}
          onValueChange={(value) => setPasswordSize(parseInt(value))}
        />

      </View>
 
      <TouchableOpacity style={styles.button} onPress={handleGeneretePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={()=> setModalVisible(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60,
  },

  area: {
    marguinTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
  },

  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import LOGO from '../../../assets/LOGO.png';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {

    const [userName, setUsername] = useState('');
    const [Password, setPassword] = useState('');
  return (
    <View>
        <View style={styles.root} >
            <Image source={LOGO} style={styles.logo}/>

            <CustomInput 
            placeholder="User Name"
            value={userName}
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={true}
            />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '100%',
        height: 250,

        resizeMode: 'contain'
    }


})

export default SignInScreen;
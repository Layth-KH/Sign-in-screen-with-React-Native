import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import LOGO from '../../../assets/LOGO.png';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  return (
    <View>
        <View style={styles.root} >
            <Image source={LOGO} style={styles.logo}/>
        </View>

        <View>
            <CustomInput/>
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
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CutomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

const ConfirmScreen = () => {

    const [EMail, setEMail] = useState('');
    const [code, setcode] = useState('');

    const navigation = useNavigation();




    const onConfirmPressed = () =>{
        console.warn("Pressed on Confirm");
        navigation.navigate('Home');
    }

    const onBacktoSigninPressed = () =>{
        console.warn("Pressed on Backe to Sign in");
        navigation.navigate('SignIn');
    }
    
    const onResendPressed = () =>{
        console.warn("Pressed on resend");
    }

    
  return (
    <View>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Sign Up</Text>

            <CustomInput 
            placeholder="Enter your E-Mail"
            value={EMail}
            setValue={setEMail}
            />

            <CustomInput 
            placeholder="Enter the Code"
            value={code}
            setValue={setcode}
            />
            <CutomButton
            text="Confirm"
            onPress={onConfirmPressed}
            type="PRIMARY"
            />
            <CutomButton
            text="Resend"
            onPress={onResendPressed}
            type="SECONDARY"
            fontcolor= "#6C6C6C"
            bgcolor="#CECCCC"
            />
            <CutomButton
            text="Back to Sign In"
            onPress={onBacktoSigninPressed}
            type="TERTIARY"
            fontcolor= "#6C6C6C"
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 20,
        marginTop:50
    },
    text:{
        width: '90%',
        marginVertical: 10,
        color: 'gray'

    },
    link: {
        color: '#A0AF24'
    },
    linksignin: {
        fontWeight: 'bold',
        color: '#0C1CE2'
    },
    Signintext: {
        color:'#929292',
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems: 'center',
        marginVertical: 30
    }

})

export default ConfirmScreen;
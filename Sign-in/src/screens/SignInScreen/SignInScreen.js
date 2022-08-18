import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import LOGO from '../../../assets/LOGO.png';
import CustomInput from '../../components/CustomInput';
import CutomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [userName, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const navigation = useNavigation();


    const onSigninPressed = () =>{
        console.warn("Pressed on SignIn");

        navigation.navigate('Home');
    }

    const onForgetPasswordPressed = () =>{
        console.warn("Pressed on Forget Password");

        navigation.navigate('ForgetPassword');
    }

    const onGooglePressed = () =>{
        console.warn("Pressed on Google");
    }

    const onFacebookPressed = () =>{
        console.warn("Pressed on Facebook");
    }

    const onApplePressed = () =>{
        console.warn("Pressed on Apple");
    }
    const onCreateOnePressed = () =>{
        console.warn("Pressed on Create One");
        navigation.navigate('SignUp');
    }
    
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
            <CutomButton
            text="Sign In"
            onPress={onSigninPressed}
            type="PRIMARY"
            />
            <CutomButton
            text="Forget Password ?"
            onPress={onForgetPasswordPressed}
            type="TERTIARY"
            />
            <CutomButton
            text="Sign In with Google"
            onPress={onGooglePressed}
            fontcolor= '#DD4D44'
            bgcolor= '#FAE9EA'
            />
            <CutomButton
            text="Sign In with Facebook"
            onPress={onFacebookPressed}
            fontcolor= '#4765A9'
            bgcolor= '#E7EAF4'
            />
            <CutomButton
            text="Sign In with Apple"
            onPress={onApplePressed}
            fontcolor= '#363636'
            bgcolor= '#e3e3e3'
            />
            <CutomButton
            text="don't you have an account? create one"
            onPress={onCreateOnePressed}
            type="TERTIARY"
            fontcolor='#929292'
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
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CutomButton from '../../components/CustomButton';

const SignUpScreen = () => {

    const [userName, setUsername] = useState('');
    const [EMail, setEMail] = useState('');
    const [RepeatPassword, setRepeatPassword] = useState('');
    const [Password, setPassword] = useState('');



    const onRegisterPressed = () =>{
        console.warn("Pressed on Register")
    }

    const onGooglePressed = () =>{
        console.warn("Pressed on Google")
    }

    const onFacebookPressed = () =>{
        console.warn("Pressed on Facebook")
    }

    const onApplePressed = () =>{
        console.warn("Pressed on Apple")
    }

    const onTermsPressed = () =>{
        console.warn("Pressed on Terms")
    }

    const onPrivacyPressed = () =>{
        console.warn("Pressed on Privacy")
    }

    const onSignInPressed = () =>{
        console.warn("Pressed on Sign in")
    }
    
  return (
    <View>
        <View style={styles.root} >
            <Text style={styles.title}> Create an account </Text>

            <CustomInput 
            placeholder="User Name"
            value={userName}
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="E-Mail"
            value={EMail}
            setValue={setEMail}
            />
            <CustomInput 
            placeholder="Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={true}
            />
            <CustomInput 
            placeholder="Repeat Password"
            value={RepeatPassword}
            setValue={setRepeatPassword}
            secureTextEntry={true}
            />
            <CutomButton
            text="Register"
            onPress={onRegisterPressed}
            type="PRIMARY"
            />

            <Text style= {styles.text}>
                By registering, you confirm that you accept our
                <Text style= {styles.link} onPress={onTermsPressed}> Terms of Use </Text>
                and
                <Text style= {styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
            </Text>

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
            
            <Text style= {styles.Signintext}>
                Have an account ?
                <Text style= {styles.linksignin} onPress={onSignInPressed}> Sign In</Text>
            </Text>
            



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

export default SignUpScreen;
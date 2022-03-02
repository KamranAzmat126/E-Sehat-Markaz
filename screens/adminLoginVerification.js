import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import BackButton from "../components/BackButton";
import Resend from "../components/Resend";
import CustomButton from './../components/Button';
import { auth } from '../services/firebase' 

export default function adminLoginVerification({route}){

    const navigation = useNavigation();
    const { otherParam } = route.params;

    const checkUserStatus = () => {
        navigation.navigate(otherParam);
    }

    const isEmailVerified = () => {
        if(auth.currentUser.emailVerified === true){
            alert('email verified');
            navigation.navigate(otherParam)
        }
        else{
            alert('Email is not verified')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>
                Enter Verification Code
            </Text>
            
            <Text style={styles.midText}>
                A verification code has been sent to your email address.
            </Text>
            
            <TextInput style={styles.codeInput}>
            </TextInput>

            <Resend />            

            <CustomButton text={'Submit'} onPress={() => isEmailVerified()}/>

            <BackButton 
                text={"Back to Login"} 
                onPress={() => navigation.navigate('AdminLogin')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        backgroundColor: '#EEEAE2'
    },
    mainText:{
        marginTop: '15%',
        fontSize: 20,
        fontWeight : 'bold',
        color: 'black'
    },
    midText : {
        marginTop: '5%',
       // marginEnd: '10%',
    },
    codeInput : {
        marginTop : '10%',
        borderBottomWidth : 2,
        fontSize : 18,
        fontWeight : 'bold',
        color : 'black'
    },
    submit : {
        padding: 20,
        margin: 30,
        borderRadius: 2e5,
        borderWidth: 2,
        borderColor: 'darkgray',
        backgroundColor: '#EEEAE2'
    }
})
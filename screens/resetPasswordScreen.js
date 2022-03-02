import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomInput from "../components/customTextInput";
import CustomButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import adminCredentials from './../adminCredentials.json';

export default function ResetPassword(){

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const validate = (newPassword, confirmPassword) => {
        if(newPassword != confirmPassword){
            setNewPassword('');
            setConfirmPassword('');
            return alert('Password does not match');
        }
        else{
            adminCredentials.password = newPassword;
            navigation.navigate('AdminLogin')
        }

    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Reset Password
            </Text>

            <CustomInput 
                value={newPassword} 
                setValue = {setNewPassword} 
                placeholder="Enter New Password"
                secureTextEntry
            />

            <CustomInput 
                value={confirmPassword}
                setValue={setConfirmPassword}
                placeholder="Confirm new Password"
                secureTextEntry
            />

            <CustomButton text={"Submit"} onPress={() => validate(newPassword, confirmPassword)}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        backgroundColor: '#EEEAE2'
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '20%'
    }

})
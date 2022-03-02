import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import transparentlogo from './../assets/transparentlogo.png';
import CustomInput from '../components/customTextInput';
import CustomButton from '../components/Button';
import ForgotPassword from '../components/forgotPassword';
import adminCredentials from '../adminCredentials.json';
import adminLoginVerification from './adminLoginVerification';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase'

const AdminLogin = () => {

  const navigation = useNavigation();

  const {height,width} = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(!user){
        navigation.navigate("AdminLogin");
      }
    })

    return unsubscribe;
  })

  const onPressLogin = (email,password, {navigation}) => {
    if(email !== '' || password !== ''){
        auth.
      signInWithEmailAndPassword(email, password).
      then(userCredentials => {
        const user = userCredentials.user;
        setEmail('');
        setPassword('');
        navigation.navigate( 'DrawerNavigator');

        user.sendEmailVerification()

      }).catch(error => alert("Email or Password is not correct!"))

    }
    else{
      alert('Email and Password cannot be Empty!')
    }
    
    
    // if(email === adminCredentials.email && password === adminCredentials.password){
    //   navigation.navigate('adminLoginVerification', {otherParam : 'DrawerNavigator'});
    // }
    // else{
    //   return alert('Email or Password is not correct!')
    // }
  }
  
  const onPressForgotPassword = () => {
    navigation.navigate('forgotPassword')
  }
  

  return(
    <View style={[styles.root, {width: width,height: height*0.3}]}>
     <Image 
      source={transparentlogo} 
      style={styles.logo} 
      resize="contain"
    />
      
      <CustomInput 
        placeholder="Enter email" 
        value={email} 
        setValue={setEmail}
        
      />
      
      <CustomInput
        placeholder = "Enter Password"
        value = {password}
        setValue = {setPassword}
        secureTextEntry 
      />

      <ForgotPassword onPress={onPressForgotPassword}/>
    
      <CustomButton text={"Login"} onPress={() => onPressLogin(email, password,{navigation})}/>
      
  </View>
  )
  
 
}

export default AdminLogin;

const styles = StyleSheet.create({
  root:{
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding : 8,
    backgroundColor : 'lightblue'//'#EEEAE2'
  },
  logo:{
    width : 250,
    height : 250,
    alignItems : 'center'
  }
})
import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

const CustomeInput = ({value, setValue, placeholder, secureTextEntry}) => {
  
  return(
     <View style={styles.container}>
      <TextInput 
        value= {value}
        onChangeText={setValue}
        placeholder= {placeholder}
        secureTextEntry = {secureTextEntry} 
        style={styles.input} />
    </View>
  )
  
}

export default CustomeInput;

const styles = StyleSheet.create({
  container:{
    width: "80%",
    backgroundColor: '#f4f5eb',
    borderRadius : 30,
    // borderWidth : 0.,
    marginTop: '10%',
    paddingHorizontal: 10,
  },
  input : {
    fontSize: 18,
    padding: 10,

  }
})
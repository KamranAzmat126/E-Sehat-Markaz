import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function CustomButton({ onPress ,text }) {

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    marginVertical: '10%',
    padding: 10,
    borderRadius: 10,
    alignItems : 'center',
    backgroundColor: 'dodgerblue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
})

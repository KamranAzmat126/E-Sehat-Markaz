import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const BackButton = ({text, onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
    },
    text:{
        color: '#686868',
        fontSize: 16
    }
})

export default BackButton;
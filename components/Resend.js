import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Resend(){
    return(
        <View style={StyleSheet.container}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Resend Code
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: {
        marginTop: '35%',
        marginBottom: '-35%',
        fontSize: 16
    }
})
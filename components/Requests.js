import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Requests ({text}){

    const id = 1;
    const navigation = useNavigation();

    return(
        <View style={styles.viewRequests}>
            <TouchableOpacity onPress={() => navigation.navigate("RequestDetails", {paramId : id})}>
                <Text style={styles.requestText}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewRequests : {
        marginTop:'5%',
        marginLeft: '10%',
        width: '80%',
        borderWidth: 1,
        borderColor: 'dodgerblue',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'dodgerblue'
    },
    requestText : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#070707'
    }
})
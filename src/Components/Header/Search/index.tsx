
import { StyleSheet, TextInput, View, Keyboard, TouchableOpacity } from "react-native";
import { Feather } from 'react-native';
import React, {useState} from 'react';




export default function SearchBar() {
    return(
        <View style={styles.container}>
            <TextInput
        style={{height: 40}}
        placeholder="Inicie sua busca"
        />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        borderRadius: 15,
        padding: 6,
        backgroundColor: '#a2a29d',
        marginEnd: 25
    },


})
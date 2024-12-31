import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Feather from '@react-native-vector-icons/feather';


export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Inicie sua busca"
        placeholderTextColor="#555"
      />
       <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.icon}>Icone</Text>
        </TouchableOpacity>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight: 20,
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: 25,
    padding: 6,
    backgroundColor: "white",
    marginEnd: 50,
    

    // Sombra para iOS
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 2, height: 4 }, // Posição
    shadowOpacity: 1, // Opacidade
    shadowRadius: 4, // Raio de difusão 
    

    // Sombra para Android
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content:{
    
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
  
});

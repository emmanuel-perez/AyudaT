import { View, Text, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'



const SignUpScreen = () => {
  return (
    <SafeAreaView style = {{flex: 1, color: 'white'}}>
        <ScrollView style = {styles.container}>
            <View style = {{backgroundColor: '#374152'}}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.title}>Registro</Text>
                </View>
            </View>
            <View style = {styles.formContainer}>
                <TextInput
                    style = {styles.input}
                    placeholder='Nombre'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <TextInput
                    style = {styles.input}
                    placeholder='Teléfono'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <TextInput
                    style = {styles.input}
                    placeholder='Descripción de situación'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <TextInput
                    style = {styles.input}
                    placeholder='Correo electrónico'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <View style = {styles.policiesContainer}>    
                    <AntDesign name="checksquareo" size={24} color="white" />
                    <Text style = {styles.policiesText}>
                        El manejo de informacion será de manera confidencial
                    </Text>
                </View>
                <View style = {styles.policiesContainer}>
                    <Ionicons name="md-square-outline" size={24} color="white" />
                    <Text style = {styles.policiesText}>
                        Acepto
                    </Text>
                </View>
                <TouchableOpacity 
                    style = {styles.button}
                    // onPress = {}
                >
                    <Text>Registrarme</Text>
                </TouchableOpacity>
                <Text style = {styles.whiteText}>¿Ya te registraste?</Text>
                <TouchableOpacity>
                    <Text 
                        style = {[styles.whiteText, {textDecorationLine: 'underline', fontWeight: 'bold'}]}
                    >
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#374152'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        paddingVertical: 20,
        marginHorizontal: 30,
        marginVertical: 15,
    },
    headerContainer: {
        backgroundColor: 'white',
        borderBottomRightRadius: 80,
    },
    input: {
        color: 'white',
        height: 40,
        marginVertical: 20,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        borderRadius: 10,
        padding: 10,
      },
    formContainer: {
        alignContent: 'center',
        backgroundColor: '#374152',
        flex:  1,
    },
    title: {
        color: '#374152',
        fontSize: 35,
        fontWeight: '500',
        marginVertical: 30,
        marginLeft: 10,
        borderRadius:100,
    },
    policiesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 80
    },
    policiesText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '500',
        marginVertical: 15,
        textAlign: 'center',
        width: 200,
    },
    whiteText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 5,
    }
})

export default SignUpScreen
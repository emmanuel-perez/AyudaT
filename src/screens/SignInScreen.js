import { View, Text, Image, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const SignInScreen = () => {
    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image 
                    style = {styles.image}
                    source = {{
                        uri: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
                    }}
                    />
            </View>
            <Text style = {styles.title}>Bienvenido/a</Text>
            <View style = {styles.formContainer}>
                <TextInput
                    style = {styles.input}
                    placeholder='Correo Electrónico'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <TextInput
                    style = {styles.input}
                    placeholder='Contraseña'
                    placeholderTextColor={'white'}
                    // value = {value}
                />
                <TouchableOpacity 
                    style = {styles.button}
                    // onPress = {}
                >
                    <Text>Registrarme</Text>
                </TouchableOpacity>
                <Text style = {styles.whiteText}>¿No tienes una cuenta?</Text>
                <TouchableOpacity>
                    <Text 
                        style = {[styles.whiteText, {textDecorationLine: 'underline', fontWeight: 'bold'}]}
                    >
                        Registrate
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
  )
}

export default SignInScreen

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
    image: {
        height: '100%',
        width: '100%',
    },  
    imageContainer: {
        backgroundColor: 'red',
        height: 350,
    },  
    formContainer: {
        alignContent: 'center',
        backgroundColor: '#374152',
        flex:  1,
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: '500',
        marginVertical: 30,
        marginLeft: 10,
        borderRadius:100,
        textAlign: 'center',
    },
    whiteText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 5,
    }
})
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

const DoctorProfileScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <TouchableOpacity style = {styles.imageContainer}>
            <Image 
                style = {styles.image}
                source = {{
                    uri: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                }}
            /> 
        </TouchableOpacity>
        <View style = {{alignItems: 'center'}}>
            <Text style = {styles.title}>Doctora Sanders</Text>
            <Text style = {styles.description}>Degree Neurosurgeon</Text>
            <Text style = {[styles.description, {fontWeight: '600'}]}>Horario de Atención:</Text>
            <Text style = {styles.description}>8:00 am - 9:00 pm</Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30,}}>
            <TouchableOpacity>
                <MaterialIcons name="message" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="phone-call" size={40} color="white" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default DoctorProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#374152',
        flex: 1,
    },
    imageContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        height: 250,
        width: 250,
    },
    image: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    title: {
        color:'white',
        fontSize: 30,
        marginBottom: 35,
    },
    description: {
        color: 'white',
        fontSize: 20,
        marginBottom: 25,
    }
})
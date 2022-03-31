import { View, Text, Image, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SignInScreen = () => {
    return (
      <SafeAreaView style = {{flex: 1, color: 'white'}}>
          <ScrollView style = {styles.container}>
              <View style = {{backgroundColor: '#374152'}}>
                  <View style = {styles.headerContainer}>
                      <Text style = {styles.title}>Bienvenido $user</Text>
                  </View>
              </View>
              <View>
                  <TouchableOpacity style = {styles.cardContainer}>
                    <Image 
                        style = {styles.image}
                        source = {{
                            uri: 'https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png'
                        }}
                    />
                  </TouchableOpacity>
                  <Text style = {styles.whiteText}>Lorem ipsum</Text>
                  <TouchableOpacity 
                    style = {[styles.cardContainer, {backgroundColor: 'black', justifyContent: 'center'}]}>
                        <Text style = {styles.cardText}>
                            Doctores
                            Disponibles
                        </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style = {[styles.cardContainer, {backgroundColor: 'white', justifyContent: 'center'}]}>
                        <Text style = {[styles.cardText, {color: 'black'}]}>
                            Chat
                        </Text>
                        <Text style = {{textAlign: 'center', fontSize: 20,}}>Activo: 0</Text>
                  </TouchableOpacity>
              </View>
          </ScrollView>
          
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        paddingVertical: 20,
        marginHorizontal: 30,
        marginVertical: 15,
      },
      container: {
        flex: 1,
        backgroundColor: '#374152'
      },
      cardContainer: {
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 15,
        height: 200,
      },
      cardText: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
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
      image: {
          borderRadius: 15,
          width: '100%',
          height: '100%',
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
  
  export default SignInScreen
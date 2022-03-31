import { View, Text, Image, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const DoctorsScreen = () => {
    return (
      <SafeAreaView style = {{flex: 1, color: 'white'}}>
          <ScrollView style = {styles.container}>
              <View style = {{backgroundColor: '#374152'}}>
                  <View style = {styles.headerContainer}>
                      <Text style = {styles.title}>Doctores</Text>
                  </View>
              </View>
              <View>
                  <TouchableOpacity style = {styles.cardContainer}>
                    <Image 
                        style = {styles.image}
                        source = {{
                            uri: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
                        }}
                    />
                    <View>
                        <Text style = {styles.cardTitle}>Doctora Lorem ipsum</Text>
                        <Text style = {styles.cardSubtitle}>Lorem ipsum lorem ipsum</Text>
                    </View>
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
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 15,
        paddingLeft: 5,
        paddingRight: 20,
        height: 200,
      },
      cardText: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
      },
      cardSubtitle: {
        fontSize: 14,
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
          height: 125,
          marginLeft: 15,
          width: 125,
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
  
  export default DoctorsScreen
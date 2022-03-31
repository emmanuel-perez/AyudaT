import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';


const Chat = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={35} color="white" />
            </TouchableOpacity>
            <Text style = {styles.title}>Chat with doctor</Text>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={35} color="white"/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#374152',
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25,
        color: 'white'
    },
})
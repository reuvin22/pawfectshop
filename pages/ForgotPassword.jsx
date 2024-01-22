import React from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native'

export default function ForgotPassword({navigation}) {
    const navigateLogin = () => {
        navigation.navigate('Login');
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Your Email Address</Text>
        <TextInput style={styles.input}/>
        <Button title="Reset Password"/>
        <TouchableOpacity onPress={navigateLogin}>
            <Text style={styles.textBack}>Back to Login</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CBE4F9'
      },
    text: {
        fontSize: 15,
        fontWeight: '500'
    },
    input: {
        height: 32,
        borderColor: 'black',
        width: 221,
        borderWidth: 1,
        marginTop: '2%',
        marginBottom: '2%',
        paddingLeft: 10
    },
    textBack: {
        font: 10,
        marginTop: '2%'
    }
})

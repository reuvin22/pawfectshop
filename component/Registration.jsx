import CheckBox from 'expo-checkbox'
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native'

export default function Registration({navigation}) {
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  }
  const navigateLogin = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput 
          style={styles.inputs}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput 
          style={styles.inputs}
        />
        <Text style={styles.label}>Email Address</Text>
        <TextInput 
          style={styles.inputs}
        />
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput 
          style={styles.inputs}
        />
        <Text style={styles.label}>Gender</Text>
        <TextInput 
          style={styles.inputs}
        />
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            backgroundColor={checkBox ? 'green' : 'FFFFFF'}
            onValueChange={handleCheckBox}
          />
        <Text style={styles.tac}>I agree to the <Text style={styles.terms}>terms and conditions.</Text></Text>
        </View>
        <Button title="Submit Registration"/>
        <TouchableOpacity onPress={navigateLogin}>
          <Text style={styles.text}>Already have an account?</Text>
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
    header: {
        fontSize: 27,
        marginBottom: 20
    },
    inputs: {
      height: 35,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
      width: 269,
      borderRadius: 5,
      paddingLeft: 15,
      backgroundColor: 'white'
    },
    label: {
      fontSize: 12,
      alignSelf: 'flex-start',
      marginLeft: 48,
      marginBottom: '1%'
    },
    terms: {
      color: '#596FB7',
    },
    tac: {
      marginBottom: 20,
      marginLeft: '2%',
      fontSize: 12
    },
    text: {
      marginTop: 40,
      color: '#596FB7',
      fontSize: 10
    }
})

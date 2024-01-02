import CheckBox from 'expo-checkbox'
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export default function Registration() {
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
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
            disabled='false'
            color={checkBox ? 'green' : 'FFFFFF'}
            onValueChange={handleCheckBox}
          />
        <Text style={styles.tac}>I agree to the <Text style={styles.terms}>terms and conditions.</Text></Text>
        </View>
        <Button title="Submit Registration"/>
        <Text style={styles.text}>Already have an account?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        marginBottom: 20
    },
    inputs: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
      width: '65%',
      borderRadius: 5,
      paddingLeft: 15,
      backgroundColor: 'white'
    },
    label: {
      fontSize: 20,
      alignSelf: 'flex-start',
      marginLeft: 65,
      marginBottom: '1%'
    },
    terms: {
      color: '#596FB7',
    },
    tac: {
      marginBottom: 20,
      marginLeft: '2%',
      fontSize: 12.9
    },
    text: {
      marginTop: 40,
      color: '#596FB7'
    }
})

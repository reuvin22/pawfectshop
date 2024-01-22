import axios from 'axios'
import CheckBox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Form } from 'react-native'

export default function Registration({navigation}) {
  const [checkBox, setCheckBox] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
    birthDay: '',
    gender: '',
    termsAndCondition: false
  });
  const [message, setMessage] = useState('');
  const [messColor, setMessColor] = useState(true);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  }
  const navigateLogin = () => {
    navigation.navigate('Login');
  }

  const postData = async () => {
    try {
      const response = await axios.post('https://atsdevs.org/pawfect/public/api/v1/register', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
      setMessage(response.data.message);
      console.log(response.data)

      if(response.data.message === 200){
        setMessColor(true);
      }else {
        setMessColor(false);
      }
    }catch(e) {
      console.error(e.response.data.errors);
    }
  }

  const handleInput = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>
          <Text style={messColor ? {color:'red', fontSize:20} : {color:'green', fontSize:20}}>{message}</Text>
          <Text style={styles.label}>First Name</Text>
          <TextInput 
            style={styles.inputs}
            value={user.firstName}
            onChangeText={(value) => handleInput('firstName', value)}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput 
            style={styles.inputs}
            value={user.lastName}
            onChangeText={(value) => handleInput('lastName', value)}
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput 
            style={styles.inputs}
            value={user.email}
            onChangeText={(value) => handleInput('email', value)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.inputs}
            value={user.password}
            secureTextEntry = {true}
            onChangeText={(value) => handleInput('password', value)}
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput 
            style={styles.inputs}
            value={user.password_confirmation}
            secureTextEntry = {true}
            onChangeText={(value) => handleInput('password_confirmation', value)}
          />
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput 
            style={styles.inputs}
            value={user.birthDay}
            onChangeText={(value) => handleInput('birthDay', value)}
            placeholder='YYYY-MM-DD'
          />
          <Text style={styles.label}>Gender</Text>
          <TextInput 
            style={styles.inputs}
            value={user.gender}
            onChangeText={(value) => handleInput('gender', value)}
          />
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              name="termsAndCondition"
              backgroundColor={checkBox ? 'green' : 'FFFFFF'}
              value={user.termsAndCondition}
              onValueChange={handleCheckBox}
            />
          <Text style={styles.tac}>I agree to the <Text style={styles.terms}>terms and conditions.</Text></Text>
          </View>
          <Button title="Submit" onPress={postData}/>
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
        fontSize: 27
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

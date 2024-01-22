import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, Container, TouchableOpacity } from 'react-native';
import Paw from '../img/paw.png'
import FB from '../img/fb.png'
import Google from '../img/google.png'
import Lock from '../img/lock.png'
import User from '../img/user.png'
import ShowPass from '../img/showpass.png'
import HidePass from '../img/eyesclose.png'

export default function Login({navigation}) {
  const [show, setShow] = useState(false);

  const ShowPassword = () => {
    setShow(!show);
  }

  const navigateRegister = () => {
    navigation.navigate('Registration');
  }
  const navigateForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  }
  const navigateHomepage = () => {
    navigation.navigate('HomePage');
  }
  return (
    <View style={styles.container}>
       <Image
        source={Paw}
        style={{ width: 166, height: 153 }}
      />
      <Text style={styles.headers}>Login</Text>
      <Text style={styles.label}>Username</Text>
      <View style={styles.loginInput}>
      <Image
          source={User}
          style={{ width: 25, height: 29, marginTop: 1, marginRight: '2%' }}
        />
      <TextInput style={styles.input}/>
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.loginInput}>
      <Image
          source={Lock}
          style={{ width: 22, height: 25, marginTop: 2, marginRight: '2%' }}
        />
      <TextInput style={styles.input} secureTextEntry={show ? false : true}/>
      <TouchableOpacity onPress={ShowPassword}>
        <Image
            source={show ? ShowPass : HidePass}
            style={{ width: 20, height: 18, marginRight: 35, marginTop: 7 , position: 'absolute', right: 0}}
        />
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigateForgotPassword}>
        <Text style={styles.forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <Button title='Login' onPress={navigateHomepage}/>
      <Text style={styles.signup}>Or Sign Up Using</Text>
      <View style={styles.socialite}>
        <Image
          source={FB}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={Google}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <TouchableOpacity onPress={navigateRegister}>
        <Text style={styles.signup}>Create an account</Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBE4F9'
  },
  headers: {
    fontSize: 27,
    fontWeight: '700'
  },
  label: {
    alignSelf: 'baseline',
    marginLeft: '18%',
    fontSize: 12,
    marginBottom: '1%'
  },
  forgot: {
    fontSize: 8,
    alignSelf: 'flex-end',
    marginLeft: 180,
    marginTop: '-1.5%',
    marginBottom: '5%'
  },
  input: {
    marginRight: 25,
    height: 32,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: 240,
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: 'white'
  },
  loginInput: {
    flexDirection: 'row'
  },
  registration: {
    flexDirection: 'row',
  },
  socialite: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
    marginBottom: 30
  },
  signup: {
    marginTop: 20,
    fontSize: 12
  }
});

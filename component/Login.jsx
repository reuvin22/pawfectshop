import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, Container, TouchableOpacity } from 'react-native';
import Paw from '../img/paw.png'
import FB from '../img/fb.png'
import Google from '../img/google.png'
import Lock from '../img/lock.png'
import User from '../img/user.png'
import ShowPass from '../img/showpass.png'
import HidePass from '../img/eyesclose.png'

export default function Login() {
  const [show, setShow] = useState(false);

  const ShowPassword = () => {
    setShow(!show);
  }
  return (
    <View style={styles.container}>
       <Image
        source={Paw}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.label}>Username</Text>
      <View style={styles.loginInput}>
      <Image
          source={User}
          style={{ width: 50, height: 50, marginTop: '-2%', marginRight: '2%' }}
        />
      <TextInput style={styles.input}/>
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.loginInput}>
      <Image
          source={Lock}
          style={{ width: 50, height: 50, marginTop: '-2%', marginRight: '2%' }}
        />
      <TextInput style={styles.input} secureTextEntry={show ? true : false}/>
      <TouchableOpacity onPress={ShowPassword}>
        <Image
            source={show ? ShowPass : HidePass}
            style={{ width: 33, height: 33,marginRight: 8, marginTop: 4 , position: 'absolute', right: 0}}
        />
      </TouchableOpacity>
      </View>
      <Text style={styles.forgot}>Forgot Password</Text>
      <Button title='Login'/>
      <Text style={styles.signup}>Sign Up Using</Text>
      <View style={styles.socialite}>
        <Image
          source={FB}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={Google}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <Text style={styles.signup}>Create an account</Text>
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
  label: {
    alignSelf: 'baseline',
    marginLeft: '24.5%',
    fontSize: 20,
  },
  forgot: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: '-2%',
    marginBottom: '5%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '65%',
    borderRadius: 5,
    paddingLeft: 15
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
    fontSize: 16
  }
});

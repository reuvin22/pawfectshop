import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import Name from '../img/LogoBusiness.png'
import Burger from '../img/Burger.png'

export default function LandingPage({navigation}) {
  const navigateLogin = () => {
    navigation.navigate('Login');
  }

  const imgSet1 = [

  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navBar}>
          <Image source={Burger} style={styles.burger}/>
          <Image source={Name} style={styles.img}/>
          <TouchableOpacity onPress={navigateLogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcome}>Welcome to Pawfect Shop & Services</Text>
        <TouchableOpacity style={styles.btnLP}>
          <Text style={styles.btnText}>Shop Now</Text>
        </TouchableOpacity>
        <View>
          <ScrollView horizontal>
              {imgSet1.map((key, value) => 
                <View key={key}>
                  <Image source={value}/>
                </View>  
              )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBE4F9',
        flex: 1,
        flexDirection: 'column'
    },
    navBar: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
      marginTop: 28
    },
    img: {
      width: '50%',
      height: 100,
    },
    burger: {
      width: 30,
      height: 30,
    },
    login: {
      fontWeight: 'bold',
      fontSize: 16
    },
    welcome: {
      fontSize:25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 28,
    },
    btnLP: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 44,
      height: 44
    },
    btnText: {
      backgroundColor: '#7FC7D9',
      height: 70,
      width: '70%',
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
      paddingVertical: 2,
      borderRadius: 5,
      paddingVertical: 10
    }
});
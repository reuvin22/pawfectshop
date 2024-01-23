import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Name from '../../img/LogoBusiness.png'
import Burger from '../../img/Burger.png'
import DogFood from '../../img/gallery/dogfood1.png'
import Can from '../../img/gallery/dogfoodCan.png'
import Belt from '../../img/gallery/belt.png'
import Circle from '../../img/gallery/circle.png'
import Button from '../../components/Button'
import X from '../../img/xWhite.png'

export default function LandingPageShop({navigation}) {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close)
    console.log(close)
  }
  const navigateLogin = () => {
    navigation.navigate('Login');
  }
  const navigateHome = () => {
    navigation.navigate('LandingPage')
  }
  const imgSet1 = [
    DogFood, Can, Belt
  ];
  const CircleMenu = [
    Circle, Circle, Circle
  ];

  return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={handleClose}>
              <Image source={Burger} style={styles.burger}/>
            </TouchableOpacity>
            <Image source={Name} style={styles.img}/>
            <TouchableOpacity onPress={navigateLogin}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={close ? styles.burgerMenu : styles.closeMenu}>
              <View style={styles.burgerHeader}>
                  <Text style={styles.burgerText}>Menu</Text>
                  <TouchableOpacity onPress={handleClose}>
                    <Image source={X} style={styles.closeBtn}/>
                  </TouchableOpacity>
              </View>
              <View style={styles.burgerLinks}>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>Adopt</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>Veterinary</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>Groom</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>My Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.links}>Need Help?</Text>
                </TouchableOpacity>
              </View>
          </View>
          <Text style={styles.welcome}>Welcome to Pawfect Shop & Services</Text>
          <Button btnName="Shop Now"/>
          <View style={styles.galleryContainer}>
            <View style={styles.photoGallery}>
              <ScrollView horizontal style={styles.gallery}>
                {imgSet1.map((source, index) => 
                  <Image source={source} key={index} style={styles.imgSet}/>
                )}
              </ScrollView>
            </View>
            <View style={styles.circleContainer}>
              {CircleMenu.map((source, index) =>
                  <Image source={source} key={index} style={styles.circle}/>
                )}
            </View>
          </View>
          <Text style={styles.AccessText}>Pet Supplies & Accessories Available Here</Text>
        </ScrollView>
        <View style={styles.try}>

        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBE4F9',
        flex: 1,
        flexDirection: 'column',
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
    burgerMenu: {
      width: 253,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 1,
      display: 'block'
    },
    closeMenu: {
      display: 'none'
    },
    burgerText: {
      fontWeight:'bold',
      backgroundColor: '#124672',
      color: 'white',
      fontSize: 25,
      paddingVertical: 8,
      paddingHorizontal: 94,
    },
    burgerLinks: {
      backgroundColor: 'white',
      height: 380,
      gap: 20,
      marginTop: 20
    },
    links: {
      backgroundColor: '#CBE4F9',
      fontSize: 20,
      paddingVertical: 7,
      paddingHorizontal: 40,
      textAlign: 'center'
    },
    closeBtn: {
      width: 30,
      height: 30,
      position: 'absolute',
      marginTop: '-15%',
      marginLeft: 205,
    },
    login: {
      fontWeight: 'bold',
      fontSize: 16
    },
    welcome: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 28,
    },
    galleryContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 40,
      maxHeight: 120
    },
    imgSet: {
      width: 110,
      height: 110,
      borderRadius: 10,
      marginLeft: 5
    },
    circleContainer: {
      flex:1,
      flexDirection: 'row',
      gap: 20,
      marginTop: 2,
    },
    circle: {
      width: 12,
      height: 12,
      marginTop: 7
    },
    AccessText: {
      fontSize: 25  ,
      textAlign: 'center'
    },
});
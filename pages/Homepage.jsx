import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native'
import Cat from '../img/cat.png'
import BN from '../img/businessName.png'
import Burger from '../img/Burger.png'
import Pawfect from '../img/pawfectShop.png'
import Logout1 from '../img/logout.png'
import Logout2 from '../img/logout2.png'
import X from '../img/x.png'

export default function Homepage({navigation}) {
    const [toggleMenu, setToggleMenu] = useState(true);

    const handleToggleMenu = () => {
        console.log(toggleMenu);
        setToggleMenu(!toggleMenu);
    }
    const closeToggleMenu = () => {
        console.log(toggleMenu)
        setToggleMenu(!toggleMenu);
      };
    const navigateLogout = () => {
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
        <View style={styles.nav}>
            <Image 
                source = {Cat}
                style = {{ width: 60, height: 60, marginTop: '-1.5%', marginLeft: 40 }}
            />
            <Image 
                source = {BN}
                style = {{ width: 280, height: 180, marginLeft: 11, marginTop: -60 }}
            />
            <TouchableOpacity onPress = {handleToggleMenu}>
                <Image 
                    source = {Burger}
                    style = {{ width: 30, height: 30, marginTop: 10, marginRight: 65 }}
                />
            </TouchableOpacity>
            <View style={toggleMenu ? styles.menuClose : styles.menu}>
                <TouchableOpacity onPress={closeToggleMenu}>
                    <Image 
                        source={X}
                        style={{ width: 30, height: 30, zIndex: 2, marginLeft: '65%' }}
                    />
                </TouchableOpacity>
                    <Text style={styles.menuText}>Menu</Text>
                <Image 
                    source={Pawfect}
                    style = {{ width: 228, height: 130, zIndex: -1, marginTop: -50}}
                />
                <Text style={styles.menuLink}>Pawfect Adopt</Text>
                <Text style={styles.menuLink}>Pawfect Groom</Text>
                <Text style={styles.menuLink}>Pawfect Cure</Text>
                <View style={styles.logout}>
                    <Image 
                        source={Logout1}
                        style={{ width: 60, height: 60 }}
                    />
                    <TouchableOpacity onPress={navigateLogout}>
                        <Text style={styles.menuLinkLogout}>Logout</Text>
                    </TouchableOpacity>
                    <Image 
                        source={Logout2}
                        style={{ width: 60, height: 60 }}
                    />
                </View>
            </View>
        </View>
        <ScrollView>
        </ScrollView>
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
    nav: {
        width: '100%',
        height: 50,
        marginTop: 50,
        backgroundColor: '#F9D8D6',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    menuClose: {
        display: 'none'
    },
    menu: {
        width: 389,
        marginLeft: 20,
        position: 'absolute',
        height: 400,
        borderColor: 'black',
        backgroundColor: '#D94CF5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    menuText: {
        fontSize: 30,
        marginTop: -30,
        color: 'white'
    },
    menuLink: {
        fontSize: 25,
        marginTop: '4%',
        color: 'white',
        marginBottom: 6
    },
    logout: {
        flexDirection: 'row',
        gap: 25
    },
    menuLinkLogout: {
        fontSize: 25,
        marginTop: '20%',
        color: 'white',
        marginBottom: 6
    },
})

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Contact from './contactUs/Contact'
import Img1 from '../../img/Contacts/location.png'
import Img2 from '../../img/Contacts/call.png'
import Img3 from '../../img/Contacts/gmail.png'

export default function LandingPageContact() {
  return (
    <View style={styles.container}>
        <View style={styles.contacts}>
            <Text style={styles.contactText}>Contact Us</Text>
            <Contact 
                img={Img1}
                text="Dyan lang po"
            />
            <Contact 
                img={Img2}
                text="+63912345678"
            />
            <Contact 
                img={Img3}
                text="reuvin@gmail.com"
            />
            <View styles={styles.map}>

            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: '#CBE4F9',
        flex: 1,
        flexDirection: 'row',
    },
    contacts: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        width: '50%',
    },
    contactText: {
        fontSize: 20
    },

})
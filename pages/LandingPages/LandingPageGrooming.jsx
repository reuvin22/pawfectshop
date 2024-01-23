import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import Button from '../../components/Button'
import Groom1 from '../../img/gallery/Groom1.png'
import Groom2 from '../../img/gallery/Groom2.png'
export default function LandingPageGrooming() {
  return (
    <View style={styles.container}>
        <Button btnName="GROOMING SERVICES"/>
        <View style={styles.gallery}>
            <Image source={Groom1} style={styles.img}/>
            <Image source={Groom2} style={styles.img}/>
        </View>
        <Text style={styles.AccessText}>Get the best quality time by pampering your fur friends</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBE4F9',
      },
    gallery: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    img: {
        marginTop: 30,
        width: 150,
        height: 120,
        borderRadius: 5
    },
    AccessText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20
    }
})
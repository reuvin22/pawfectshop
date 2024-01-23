import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Button from '../../components/Button'
import Vet from '../../img/gallery/VetPic.png'

export default function LandingPageVet() {
  return (
    <View style={styles.container}>
        <Button btnName="PET HEALTHCARE"/>
        <View style={styles.vetContainer}>
            <Image source={Vet} style={styles.vetPic}/>
            <Text style={styles.AccessText}>Your Pet is sick? Get an efficient treatment and cure</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBE4F9',
    },
    vetContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vetPic: {
        marginTop: 40,
        width: 324,
        height: 161
    },
    AccessText: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20
      },
})

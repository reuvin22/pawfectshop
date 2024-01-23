import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function Contact({img, text}) {
  return (
    <View style={styles.container}>
        <Image source={img} style={styles.contactImg}/>
        <Text style={styles.contactText}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 20
    },
    contactImg: {
        width: 35,
        height: 35
    },
    contactText: {
        fontSize: 12
    }
})
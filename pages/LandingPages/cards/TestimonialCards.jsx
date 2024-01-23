import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function TestimonialCards({img, name, text}) {
  return (
    <View style={styles.container}>
        <Image source={img} style={styles.imgTest}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 151,
        marginLeft: 12,
        backgroundColor: '#A89B9B',
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    imgTest: {
        height: 40,
        width: 50
    },
    name: {
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        maxHeight: 200,
        maxWidth: 180,
        fontSize: 12,
        textAlign: 'center'
    }
})

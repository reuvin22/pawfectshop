import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function Button({btnName}) {
  return (
    <View>
        <TouchableOpacity style={styles.btnLP}>
            <Text style={styles.btnText}>{btnName}</Text>
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btnLP: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 44,
        height: 30
      },
      btnText: {
        backgroundColor: '#7FC7D9',
        height: 57,
        width: '70%',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 5,
        paddingVertical: 10
      },
});

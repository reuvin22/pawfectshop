import React from 'react'
import { StyleSheet, View, Text, Image, ViewBase } from 'react-native'
import Button from '../../components/Button'
import Dog1 from '../../img/gallery/Dog1.png'
import Dog2 from '../../img/gallery/Dog2.png'
import Dog3 from '../../img/gallery/Dog3.png'
import Cat1 from '../../img/gallery/Cat1.png'
import ArrowL from '../../img/gallery/Arrow2.png'
import ArrowR from '../../img/gallery/Arrow1.png'

export default function LandingPageAdoption({navigation}) {
  const pets = [
    Dog2, Dog3, Cat1
  ];
  return (
    <View style={styles.container}>
        <Button btnName="Adoption" />
      <View style={styles.adoptGallery}>
        <Image source={Dog1} style={styles.indexImg}/>
        <View style={styles.gallery}>
        <Image source={ArrowL} />
          {pets.map((source, index) => 
            <Image source={source} key={index} style={styles.pets}/>
          )}
          <Image source={ArrowR} />
        </View>
        <Text style={styles.AccessText}>Pet Supplies & Accessories Available Here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CBE4F9',

  },
  indexImg: {
    width: 324,
    height: 161
  },
  adoptGallery: {
    flex:1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  gallery: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    maxHeight: 70
  },
  pets:{
    width: 70,
    height: 70,
  },
  AccessText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20
  },
});

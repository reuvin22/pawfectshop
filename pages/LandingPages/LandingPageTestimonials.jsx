import React from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import Cards from './cards/TestimonialCards'
import Img from '../../img/gallery/TestPic.png'
import Img1 from '../../img/gallery/TestPic1.png'
import Circle from '../../img/gallery/circle2.png'

export default function LandingPageTestimonials() {
    const CircleMenu = [
        Circle, Circle, Circle
    ];
  return (
    <View style={styles.container}>
        <Button btnName="TESTIMONIALS"/>
        <ScrollView horizontal style={styles.gallery}>
            <Cards img={Img} name="Kurt Anderson" text="I'm a repeat customer of Pawfect Shop. Their prompt service and top-notch products have made them my go-to for all things pet-related!"/>
            <Cards img={Img1} name="Anne Smith" text="I'm a repeat customer of Pawfect Shop. Their prompt service and top-notch products have made them my go-to for all things pet-related!"/>
        </ScrollView>
            <TouchableOpacity style={styles.circle}>
                {CircleMenu.map((source, index) =>
                    <Image source={source} key={index} style={styles.circles}/>
                )}
            </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBE4F9',
        flex: 1,
        flexDirection: 'column',
    },
    circle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 10
    },
    circles: {
        height: 10,
        width: 10,
    }
})
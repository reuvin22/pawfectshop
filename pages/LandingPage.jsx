import React from 'react'
import { ScrollView } from 'react-native'
import LandingPageShop from './LandingPages/LandingPageShop'
import LandingPageAdoption from './LandingPages/LandingPageAdoption'
import LandingPageVet from './LandingPages/LandingPageVet'
import LandingPageGrooming from './LandingPages/LandingPageGrooming'
import LandingPageTestimonials from './LandingPages/LandingPageTestimonials'
import LandingPageContact from './LandingPages/LandingPageContact'
export default function LandingPage({navigation}) {
  return (
    <>
        <ScrollView>
            <LandingPageShop navigation={navigation}/>
            <LandingPageAdoption navigation={navigation} />
            <LandingPageVet navigation={navigation} />
            <LandingPageGrooming navigation={navigation} />
            <LandingPageTestimonials navigation={navigation} />
            <LandingPageContact navigation={navigation} />
        </ScrollView>
    </>
  )
}

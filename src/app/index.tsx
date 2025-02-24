import { View, Text, StyleSheet, Image } from 'react-native';
import React, {useState,useEffect, FC} from 'react'
import { useFonts } from 'expo-font';

import { screenHeight, screenWidth } from '../utils/Contants'
import { resetAndNavigate } from '../utils/Helpers'

const Main:FC = () => {

    const [loaded] = useFonts({
        SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf')
    })

    const [hasNavigated, setHasNavigated] = useState(false)

    useEffect(() => {
        if(loaded && !hasNavigated) {
              const timeoutId   =   setTimeout(() => {
                resetAndNavigate("home")
            }, 2000);

            return () => clearTimeout(timeoutId)
        }
    },[loaded,hasNavigated])

    return (
        <View style={styles.container}>
            <Image style={styles.logostyle}  source={require('../assets/logo/logo.jpeg')}/>
            <Text style={styles.text}>Binny's Jewellery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black'
    },
    logostyle: {
         width: '25%', height: '25%'
    },
    text:{
           marginTop:20, fontFamily:'SpaceMono', fontSize: 28, color: "#fff"
    }
})

export default Main;
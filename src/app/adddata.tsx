import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'

const adddata = () => {
  return (
    <View style={styles.container}>
       <CustomHeader title='Jewellery' />
      <Text>adddata</Text>
    </View>
  )
}

export default adddata;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
})
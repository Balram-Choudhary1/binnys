import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React ,{FC}from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const AddButton: FC = () => {
  return (
    <TouchableOpacity
     style={styles.container} 
      onPress={() => router.navigate('/addata')}
    >
      <AntDesign name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
        container:{
          position:'absolute',
          bottom:25,
          right:25,
          backgroundColor:'black',
          padding:15,
          alignItems:'center',
          shadowColor: "#000",
          elevation:10,
          shadowOffset: {
              width: 1,
              height: 1,
          },
          shadowRadius:2,
          shadowOpacity:0.7,
          borderRadius:24,
          
        }
     
})
export default AddButton
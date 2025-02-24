import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducer/todoSlice';
import CustomDatePicker from '../components/CustomDatePicker';
import { router } from 'expo-router';

const Addata = () => {

  const [value,setValue] = useState('');
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(new Date());

  const dispatch = useDispatch();

  const submit = async()=>{
     if (value.trim()== "" || description.trim() == ""){
       Alert.alert("Please Enter Something!");
       return;
     }
 await  dispatch(addTodo({
       title: value, desc: description,
       dueDate: dueDate.toISOString(),
     }));
   router.back()
  }

  return (
    <View style={styles.container}>
       <CustomHeader title='Jewellery' isBackButton={true} />
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder='Title'
      />

    <TextInput 
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.minHeight]}
        placeholder='Add a Description'
        numberOfLines={4}
        multiline
        maxLength={120}
      />
      <CustomDatePicker date={dueDate} onChange={setDueDate} />
      <CustomButton title='Add' onPress={submit}  />
    </View>
  )
}

export default Addata;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  input:{
    borderWidth:1,
    padding:10,
    borderColor:'#000301',
    margin:15,
    borderRadius:10,
    fontSize:18
 },
 minHeight:{
  minHeight:90
}
})
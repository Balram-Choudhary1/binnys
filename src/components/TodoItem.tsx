

import { View, Text, StyleSheet, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/reducer/todoSlice';
import CustomDatePicker from './CustomDatePicker';
import CustomButton from './CustomButton';


interface TodoItemProps {
  item: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [visible, setVisible] = useState(false)

  const [value,setValue] = useState(item?.title);
  const [description, setDescription] = useState(item?.desc)
  const [dueDate, setDueDate] = useState(new Date());

  const dispatch = useDispatch()

  const deleteHandler = async () => {
    dispatch(deleteTodo({ id: item?.id }))
  }

  const update = async() =>{
       dispatch(updateTodo({id:item?.id, title:value, desc:description, dueDate:dueDate.toISOString()}))
       setVisible(false)
  }

  return (
    <>
    <View>

      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text>{item?.title}</Text>
          <Text>{item?.desc}</Text>
          <Text>{new Date(item.dueDate).toLocaleDateString("en-GB")}</Text>
        </View>

        <View style={styles.iconContainer}>
          <FontAwesome onPress={()=> setVisible(true)} name="pencil-square-o" size={28} color="black" />
          <FontAwesome onPress={deleteHandler} name="trash" size={32} color="black" />
        </View>
      </View>
      

      <Modal visible={visible} onRequestClose={()=> setVisible(false)} >
        <View style={styles.model}>
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
      <CustomButton title='Update' onPress={update}  />
        </View>
      </Modal>
      
      </View>  

    </>

  )
}

export default TodoItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
    backgroundColor: '#f2f2f2',
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  infoContainer: {
    width: '70%'
  },
  iconContainer: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222'
  },
  desc: {
    fontSize: 14,
    color: '#888',
    textAlign: 'left'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#000301',
    margin: 15,
    borderRadius: 10,
    fontSize: 18
  },
  model:{
     flex:1,
     backgroundColor:'rgba(0,0,0,0.6)',
     marginTop:40
    },
    minHeight:{
      minHeight:90
    }
})

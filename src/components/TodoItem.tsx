import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TodoItemProps {
  item: any; 
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
       <View style={styles.infoContainer}>
         <Text>{item?.title}</Text>
         <Text>{item?.desc}</Text>
         <Text>{new Date(item.dueDate).toLocaleDateString("en-GB")}</Text>
       </View>

       <View style={styles.iconContainer}>
       <FontAwesome name="pencil-square-o" size={28} color="black" />
       <FontAwesome name="trash" size={32} color="black" />
       </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:'#000',
        elevation:10,
        shadowOffset:{ width:1,height:1},
        shadowRadius:2,
        shadowOpacity:0.7,
        backgroundColor:'#f2f2f2',
        margin:10,
        borderRadius:10,
        padding:10
    },
    infoContainer:{
        width:'70%'
    },
    iconContainer:{
          width:'25%',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          gap:15
    },
    title:{
      fontSize:16,
      fontWeight:'500',
      color:'#222'
    },
    desc:{
        fontSize:14,
        color:'#888',
        textAlign:'left'
    }
})
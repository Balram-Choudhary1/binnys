import { View, Text ,StyleSheet, SafeAreaView, FlatList,Image} from 'react-native'
import { useSelector } from 'react-redux'
import React, { FC } from 'react'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import { screenHeight} from '../utils/Contants'
import { RootState } from '../redux/Store'
import TodoItem from '../components/TodoItem'



const Home:FC = () => {
  const data = useSelector((state: RootState) => state.todo.data );
  console.log(data);
 const renderTodoItem = ({item}: {item: {id: string, title: string}}) =>{
      return <TodoItem item={item} />
    
 }

  return (
    <View style={styles.container}>
      <CustomHeader title="Binny's Jewellery "/>
      <View><Text>Serch data</Text></View>
      <FlatList 
       data={data}
       renderItem={renderTodoItem}
       ListEmptyComponent={<View style={styles.emptycontainer}>
         
         <Text style={styles.emptytext}>Click on plus button to add data</Text>
       </View>}
       initialNumToRender={10}
       windowSize={10}
       keyExtractor={(item: {id: string}) => item?.id}
       showsVerticalScrollIndicator={false}
      /> 

      <AddButton />
    </View>
   
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  emptycontainer:{
     justifyContent:'center',
     alignItems:'center',
     height:screenHeight * 0.8
  },
  logo:{
      width:200,
      height:200,
      resizeMode:'contain'
  },
  emptytext:{
    fontSize:20,
    fontWeight:500,
    color:'#888',
    width:'80%',
    textAlign:'center'
  }
})

export default Home
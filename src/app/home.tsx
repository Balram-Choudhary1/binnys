import { View, Text ,StyleSheet, SafeAreaView, FlatList,Image} from 'react-native'
import React, { FC } from 'react'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import { screenHeight} from '../utils/Contants'



const Home:FC = () => {
//const  data = useSelector(state => state.zoo.data)
//console.log(data);
 const renderTodoItem = () =>{
      return(
        //<Zooitem item={item} />
        // <View>
        //    <Text>{item?.title}</Text>
        //     {item?.image ? (
        //       <Image 
        //          source={{ uri: item.image }} 
        //         style={{ width: 150, height: 150, borderRadius: 10 }} 
        //         />
        //         ) : (
        //        <Text>No Image Available</Text>
        //      )}
        // </View>
        <View></View>
      )
 }

  return (
    <View style={styles.container}>
      <CustomHeader title="Binny's Jewellery "/>

      {/* <FlatList 
         data={data}
         renderItem={renderTodoItem}
         ListEmptyComponent={<View style={styles.emptycontainer}>
             <Image source={require('../assets/image/proud.png')} style={styles.logo}/>
             <Text style={styles.emptytext}>Click on plus button to add Animals</Text>
         </View>}
         initialNumToRender={10}
         windowSize={10}
         key={item => item?.id}
         keyExtractor={item=> item?.id}
         showsVerticalScrollIndicator={false}
      /> */}

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
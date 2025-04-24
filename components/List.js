import React from "react";
import { StyleSheet, Dimensions , Button , View , FlatList, Text} from "react-native";

export default ({puntos , closeModal })   => {
    return (
     <>
      <View style={styles.list}>
        <FlatList
         data={puntos.map(x => x.name)}
         renderItem={({item}) => <Text  style={style.item} >{item}</Text>}
         keyExtractor={item => item}
       />
      </View>  

      <View style={style.Button}>
        < Button tittle='cerrar' onpress={closeModal}/>
      </View>
      </>
    )
 
 }

 const styles = StyleSheet.create({
    item: {
        borderBottomWidth:1,
        borderColor:'#ccc',
        height: 50,
        padding:15,
        justifyContent:'center',
    },
    button: {
        padding:15,
    },
    list: {
        height:Dimensions.get('window').height  - 50 ,
    },

});
import React from "react";
import { StyleSheet, Dimensions , Button , View } from "react-native";

export default ({onpressleft , textletf , togglepointsfilter  }) => {
    return (
      <View style={styles.panel}>
        <Button onpress={onpressleft} title={textletf} />
        <Button tittle='mostrar/ocultar' onpress={togglepointsfilter} />
      </View>  
    )
 
 }

 const styles = StyleSheet.create({
    panel: {
        flex:1  ,
        flexDirection:'row',
        backgroundColor:'#eee',
        justifyContent:'space-between',
        alignItems:'center',
    }

});
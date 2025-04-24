import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView , {Marker,} from "react-native-maps";

export default ({onlongpress , puntos , pointsfilter }) => {
   return (
    <MapView 
    style={styles.map}
    onLongPress={onlongpress}
    >
       {pointsfilter && puntos.map(x =>
       <Marker
       key={x.coordinate}
       coordinate={x.coordinate}
       title={x.name}
       />
       )}
    </MapView>    
   )

}

const styles = StyleSheet.create({
   map:{
   width:  Dimensions.get('window').width - 150,
   height: Dimensions.get('window').height,
   },
});





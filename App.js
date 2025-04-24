
import React, { useState } from 'react';
import { StyleSheet, View , Dimensions, Button  } from 'react-native';
import { Map } from './components/Map';
import { Panel } from './components/Panel';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import { List } from './components/List';

export default function App() {
  const [puntos , setpuntos] = useState([])
  const [puntotemp , setpuntotemp] = useState({})
  const [nombre , setnombre] = useState('')
  const [visibilityfilter , setvisibilityfilter] = useState('new_puntos')
  const [visibility , setvisibility] = useState(false)
  const [pointsfilter , setpointsfilter] = useState(false)


  const  togglepointsfilter = () => setpointsfilter(!pointsfilter)
  
  const handlelongpress  = ({nativeEvent})=> {
    setvisibilityfilter('new_puntos')
    setpuntotemp(nativeEvent.coordinate)
    setvisibility(true)
  }
  const handlechangetext = Text =>{
    setnombre(Text)
  }
  
  const handlesubmit = () =>{
    const newpunto = {coordinate: puntotemp , name: nombre};
    setpuntos([puntos.concat(newpunto)])
    setvisibility(false)
    setnombre('')
  }

  const handlelista = () => {
    setvisibilityfilter('all_puntos')
    setvisibility(true)
  }
  
  console.log(puntos);
  return (
    <View style={styles.container}>
       <Map onlongpress={handlelongpress} puntos={puntos} pointsfilter={pointsfilter} />
       <Panel onpressleft={handlelista}  textletf='lista' togglepointsfilter={togglepointsfilter} />
       <Modal visibility={visibility}>
                {visibilityfilter === 'new_puntos'}
                ?
                <View style={styles.form}>
                  <Input title='Nombre' placeholders='Nombre del puntinho' onchangetext={handlechangetext} />
                  <Button title='aceptar' onpress={handlesubmit} />
                </View>
                 :<List puntos={puntos} closeModal={() => setvisibility(false)} />
       </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
 form :
 {
  padding :15,

 },

 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'flex-start',
 },


});

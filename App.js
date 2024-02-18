import {  StyleSheet, Text,  View } from 'react-native';
import { Calculadora } from './Componentes/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Calculadora/>
    </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.encabezado}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  cuerpo:{
    flex:4,
    backgroundColor: '#626567'
  },
  encabezado:{
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  
});
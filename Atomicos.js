import { Pressable, Text, View } from 'react-native';
import { estilos } from './Estilos';

export const Boton = ({ texto, onPress, color }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#D1C4E9' : color,
          margin: 5
        },
        estilos.boton
      ]}
      onPress={onPress} 
    >
      <Text style={estilos.textoB}>{texto}</Text>
    </Pressable>
  );
};

export const Caja = ({ valor }) => {
  return (
    <View style={estilos.boxContainer}>
      <Text style={estilos.TextBox}>{valor}</Text>
    </View>
  );
};


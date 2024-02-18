import {View, Text, TextInput} from 'react-native'
import Reac from 'react'

const imc = ()=>{
    return(
        <View>
            <Text>
                Calculadora IMC
            </Text>
            <Text>
                Captura el peso
            </Text>
            <TextInput placeholder='Peso en kg'/>
            <Text>
                Captura la estatura
            </Text>
            <TextInput placeholder='Captura la estatura en m'/>
            <Boton texto='Calcular'/>          
        </View>
    )
}

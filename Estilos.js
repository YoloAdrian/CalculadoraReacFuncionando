import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    //Estilos del boton
    boton:{
        //backgroundColor:'#EDE7F6',
        padding:5,
        borderRadius:5,
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 15,
        paddingVertical: 8.5,
        paddingHorizontal: 28,
      },
      textoB:{
        color:'black',
        fontSize:20
      },
      logoB:{
        height:35,
        width:35,
        marginRight:7
      },
    //Estilos de la caja
    boxContainer:{
        borderColor:'#000',
        backgroundColor:'#EDE7F6',
        borderWidth:2,
        borderRadius:10,
        height:70,
        margin:15,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:5
    },
    TextBox:{
        fontSize:30
    },
    //estilo de contenedor de los botones
    botonescontainer:{
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})
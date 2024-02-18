import React, { useState } from 'react';
import { View } from 'react-native'
import { Boton, Caja } from './Atomicos.js' 
import { estilos } from './Estilos'

export const Calculadora = () => {
  const [valorVisualizado, setValorVisualizado] = useState('0');

  const agregarDigitos = (texto) => {
    switch (texto) {
      case '=':
        calcularResultado();
        break;
      case 'C':
        limpiarDisplay();
        break;
      case '<-':
        borrarUltimo();
        break;
      case '.':
        ingresarDecimal();
        break;
      case '%':
          calcularPorcentaje();
          break;
      case '1/x':
        calcularInverso();
        break;
      case 'x²':
        calcularCuadrado();
        break;
      case 'R':
        calcularRaizCuadrada();
        break;
      case '+/-':
        cambiarSigno();
        break;
      default:
        ingresarDigito(texto);
        break;
    }

  }

  const ingresarDigito = (digito) => {
    if (valorVisualizado == '0' || valorVisualizado == '+' || valorVisualizado == '-' || valorVisualizado == '*' || valorVisualizado == '/') {
      setValorVisualizado(String(digito));
    } else {
      setValorVisualizado((valorAnterior) => valorAnterior + digito);
    }
  };

  const ingresarDecimal = () => {
    if (!valorVisualizado.includes('.')) {
      setValorVisualizado((valorAnterior) => valorAnterior + '.');
    }
  };

  const limpiarDisplay = () => {
    setValorVisualizado('0');
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(valorVisualizado);
      setValorVisualizado(String(resultado));
    } catch (error) {
      setValorVisualizado('Error');
    }
  };

  const borrarUltimo = () => {
    if (valorVisualizado.length === 1) {
      setValorVisualizado('0');
    } else {
      setValorVisualizado((valorAnterior) => valorAnterior.slice(0, -1));
    }
  };

  const calcularInverso = () => {
    const resultado = 1 / parseFloat(valorVisualizado);
    setValorVisualizado(String(resultado));
  };

  const calcularCuadrado = () => {
    const resultado = parseFloat(valorVisualizado) ** 2;
    setValorVisualizado(String(resultado));
  };

  const calcularPorcentaje = () => {
    const resultado = parseFloat(valorVisualizado) / 100;
    setValorVisualizado(String(resultado));
  };

  const calcularRaizCuadrada = () => {
    const resultado = Math.sqrt(parseFloat(valorVisualizado));
    setValorVisualizado(String(resultado));
  };

  const cambiarSigno = () => {
    const resultado = -parseFloat(valorVisualizado);
    setValorVisualizado(String(resultado));
  };

  return (
    <View>
      <View>
        <Caja valor={valorVisualizado} />
      </View>
      <View style={estilos.botonescontainer}>
        <Boton texto={' %  '} color={'#424242'} onPress={() => agregarDigitos('%')} />
        <Boton texto={'ce'} color={'#424242'} onPress={() => agregarDigitos('C')} />
        <Boton texto={' c '} color={'#424242'} onPress={() => agregarDigitos('C')} />
        <Boton texto={'<- '} color={'#424242'} onPress={() => agregarDigitos('<-')} />
        <Boton texto={'1/x'} color={'#424242'} onPress={() => agregarDigitos('1/x')} />
        <Boton texto={'x² '} color={'#424242'} onPress={() => agregarDigitos('x²')} />
        <Boton texto={' R '} color={'#424242'} onPress={() => agregarDigitos('R')} />
        <Boton texto={' / '} color={'#424242'} onPress={() => agregarDigitos('/')} />
        <Boton texto={' 7  '} color={'#424242'} onPress={() => agregarDigitos('7')} />
        <Boton texto={' 8 '} color={'#424242'} onPress={() => agregarDigitos('8')} />
        <Boton texto={' 9 '} color={'#424242'} onPress={() => agregarDigitos('9')} />
        <Boton texto={' * '} color={'#424242'} onPress={() => agregarDigitos('*')} />
        <Boton texto={' 4  '} color={'#424242'} onPress={() => agregarDigitos('4')} />
        <Boton texto={' 5 '} color={'#424242'} onPress={() => agregarDigitos('5')} />
        <Boton texto={' 6 '} color={'#424242'} onPress={() => agregarDigitos('6')} />
        <Boton texto={' -  '} color={'#424242'} onPress={() => agregarDigitos('-')} />
        <Boton texto={' 1  '} color={'#424242'} onPress={() => agregarDigitos('1')} />
        <Boton texto={' 2 '} color={'#424242'} onPress={() => agregarDigitos('2')} />
        <Boton texto={' 3 '} color={'#424242'} onPress={() => agregarDigitos('3')} />
        <Boton texto={' +'} color={'#424242'} onPress={() => agregarDigitos('+')} />
        <Boton texto={'+/-'} color={'#424242'} onPress={() => agregarDigitos('+/-')} />
        <Boton texto={' 0 '} color={'#424242'} onPress={() => agregarDigitos('0')} />
        <Boton texto={' .  '} color={'#424242'} onPress={() => agregarDigitos('.')} />
        <Boton texto={' = '} color={'#424242'} onPress={() => agregarDigitos('=')} />
      </View>
    </View>
  );
};

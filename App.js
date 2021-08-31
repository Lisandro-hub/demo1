import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import Imageb from './components/Imageb';

const App=() => { //funcion flecha =>
  return (
    <View style={styles.container}>
      <Banner saludo="Bienvenido: " titulo = "Sistema de Taxi Personalizado"/>
      <Imageb />
      <View style={{flex:1,backgroundColor:'pink'}}>
      <Text style={styles.texto}>Hola mundo desde react native!</Text>
      <Text style={styles.texto}>{"\n"}Bienbenido al sistema de demostracion de React Native</Text>
      <StatusBar style="auto" />
      </View>

      <View style={{flex:1,backgroundColor:'gray',alignItems: 'center',justifyContent: 'center'}}>
        <Text>Maquetando mi aplicacion</Text>
      </View>

      <View style={{flex:1,backgroundColor:'red',alignItems: 'center',justifyContent: 'center'}}>
        <Text>Maquetando mi aplicacion</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'whife',
    backgroundColor:'green',
    borderRadius:10}
});

export default App

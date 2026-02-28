import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function AboutME({navigation}) {
  return (
    <LinearGradient
      colors={['rgb(25, 195, 127)', 'rgb(113, 9, 211)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} // horizontal
      style={styles.container}
    >
      <Text style={styles.titulo}>Acerca de mi</Text>

      <Text style={styles.info}>
        Mi nombre es Jesus Sebastian, tengo 17 años y soy estudiante de TI, me gustan los videojuegos, la musica, leer, las peliculas y las series, me gusta mucho la tecnologia y la programacion,
      </Text>

      <TouchableOpacity
        style={styles.btn_food}
        onPress={() => navigation.navigate('Foodfav')}
      >
        <Text style={styles.boton}>Comidas favoritas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn_movie}
        onPress={() => navigation.navigate('Moviefav')}
      >
        <Text style={styles.boton}>peliculas favoritas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn_volver}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.boton}>volver a home</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    borderBottomWidth: 6,
    borderBottomColor: '#000',
    position: 'relative',
    bottom: 40,
    
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontFamily: 'comic-sans-ms',
    color: '#fff',
    position: 'relative',
    bottom: 30,
    padding: 2,
  
  
  },
  btn_food: {
    backgroundColor: '#5eff00',
    borderRadius: 12,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  btn_movie: {
    backgroundColor: '#0088ff',
    borderRadius: 12,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  boton:{
    fontWeight: 'bold',
    fontFamily: 'comic-sans-ms',
    color: '#000',  
  },
  btn_volver: {
    backgroundColor: '#b2b2b2',
    borderRadius: 12,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
});
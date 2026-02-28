import React, {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, StyleSheet, Text, Image, ScrollView  } from "react-native";

export default function Moviefav({navigation}) {
    return (
        <LinearGradient
        colors={['rgb(100, 0, 194)', 'rgb(253, 253, 253)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
        >
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.encabezado}>Mis comidas favoritas</Text>
            
            <View style={styles.cont1}>
                <Image source={require('../assets/ch.jpg')} style={styles.img}/>
                <Text style={styles.text}>chilaquiles de chipotle</Text>
            </View>

            <View style={styles.cont2}>
                <Image source={require('../assets/pollo.jpg')} style={styles.img}/>
                <Text style={styles.text}>pollo rostizado</Text>
            </View>

            <View style={styles.cont3}>
                <Image source={require('../assets/gajo.jpg')} style={styles.img}/>
                <Text style={styles.text}>papas en gajo</Text>
            </View>

            <View style={styles.cont4}>
                <Image source={require('../assets/chicago.jpg')} style={styles.img}/>
                <Text style={styles.text}>pizza estilo chicago</Text>
            </View>

            <TouchableOpacity
                style={styles.btn_volver}
                onPress={() => navigation.navigate('AboutME')}
            >
                <Text style={styles.boton}>volver a Acerca de mi</Text>
            </TouchableOpacity>

        </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    cont1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    cont2: {
        marginTop: 20,   
        marginBottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont2: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont3: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont4: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 230,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        // Agregar sombra
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:1,
        shadowRadius:20,
        elevation: 30,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    encabezado: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 70,
    },
    btn_volver: {
        backgroundColor: '#b2b2b2',
        borderRadius: 12,
        width: 200,
        paddingVertical: 12,
        marginLeft: 105,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 70,
        position: 'relative',
        bottom: 20,
        
    },
    boton:{
        fontWeight: 'bold',
        fontFamily: 'comic-sans-ms',
        color: '#000',  
      },
    });
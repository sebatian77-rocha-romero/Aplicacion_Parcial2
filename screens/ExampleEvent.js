import React from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function EventsExample({navigation, route}) {
    const nombre = route?.params?.nombre ?? 'Invitado';
    const total = route?.params?.total ?? 0;
    const handlePress = () => { 
        Alert.alert("boton presionado");
    }
    const handleShowData = () => {
        Alert.alert(`Datos recibidos \nContador: ${total}`);
    };
    return (
        <View style={styles.container}>
    
            
            <Text style={styles.titulo1}>Ejemplo Eventos</Text>
            <Text style={styles.titulo2}>hola, {nombre}</Text>

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.boton}>boton de alerta</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={handleShowData}>
                <Text style={styles.boton1}>mostrar datos en alerta</Text>    
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buthome}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buthomeText}>Volver a Home</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#000000',
        
    },
    titulo1: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginRight: 80,
        borderBottomColor: '#25d545',
        borderBottomWidth: 7, 
        marginLeft: 80,
        textAlign: 'center',
    },
    titulo2: {
        color: '#ffffff',
        fontSize: 20,
        marginBottom: 24,
        textAlign: 'center',

    },
    button: {
        width: 200,
        marginLeft: 90,
        color: 'white',
        padding: 12,
        borderRadius: 8,
        position: 'relative',
        marginBottom: 16,
    },
    boton: {
        backgroundColor: '#007AFF',
        color: 'white',
        padding: 12,
        borderRadius: 8,
        textAlign: 'center',
        marginTop: 16,
        fontSize: 16
    },
    boton1: {
        backgroundColor: '#00ff8c',
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
        width: 250,
        marginLeft: -40,
        textAlign: 'center',
        fontSize: 16,
        alignItems: 'center',
    },
    buthome: {
        backgroundColor: '#b2b2b2',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        marginTop: 20,
    },

    buthomeText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
});
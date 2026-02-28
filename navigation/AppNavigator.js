import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ExampleScreen from '../screens/ExampleEvent';   
import Counter from '../screens/counter';
import AboutMEScreen from '../screens/AboutMEScreen';
import Foodfav from '../screens/foodfavScreen';
import Moviefav from '../screens/moviefavScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
            name='Home' 
            component={HomeScreen}
            options={{ title: 'Pantalla de Inicio' }} 
        />
        <Stack.Screen 
            name='EXAMPLE' 
            component={ExampleScreen} 
            options={{ title: 'Eventos' }} 
        />
        <Stack.Screen 
            name='COUNTER' 
            component={Counter} 
            options={{ title: 'Contador' }} 
        />
        <Stack.Screen
            name='AboutME'
            component={AboutMEScreen}
            options={{ title: 'Acerca de mi' }}
        />
        <Stack.Screen
            name='Foodfav'
            component={Foodfav}
            options={{ title: 'comida favorita' }}
        />
        <Stack.Screen
            name='Moviefav'
            component={Moviefav}
            options={{ title: 'Películas favoritas' }}
        />
    </Stack.Navigator>
  );
}
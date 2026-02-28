import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter({navigation}) {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement2 = () => { 
    setCount(count - 1);
  }
  const handleDecrement3 = () => { 
    setCount(0);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.value1}>{count}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleIncrement}
      >
        <Text style={styles.buttonText}>sumar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button2} 
        onPress={handleDecrement2}
      >
        <Text style={styles.buttonText}>restar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button4}
        onPress={() => navigation.navigate("EXAMPLE", {total: count})}
      >
        <Text style={styles.buttonText}>enviar contador a eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button3} 
        onPress={handleDecrement3}
      >
        <Text style={styles.buttonText}>resetear</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.buttonSecondary} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>volver a home</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>Aqui veremos estado (useState)...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginLeft: 100,
    marginTop: 46,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  button2: {
    width: 200,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  button3: {
    width: 200,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#0bf22e',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  button4: {
    width: 250,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#6f00ff',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonSecondary: {
    width: 200,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#8E8E93',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  value1: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 170,
    marginLeft: 190,
  },
  hint: {
    color: '#02caf7',
    fontSize: 14,
    marginTop: 20,
    fontFamily: 'comicsansms',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation }) { 
  return (
    <>
      <TouchableOpacity
        style={styles.buttoneventos} 
        onPress={() => navigation.navigate('EXAMPLE', {nombre: 'sebastian'})}
      >
        <Text style={styles.eventos}>Ir a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttoncontador} 
        onPress={() => navigation.navigate('COUNTER')}
      >
        <Text style={styles.contador}>Ir a Contador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutme} 
        onPress={() => navigation.navigate('AboutME')}
      >
        <Text style={styles.aboutmet}>Ir a Acerca de mi</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.nombre_1}>ROCHA ROMERO JESUS SEBASTIAN</Text>
        <Text style={styles.info}>TI, 5-A</Text>
      </View>
    </>
    //<View style={styles.container}>
      //<Text style={styles.text}>HomeScreen</Text>
      //<Text style={styles.welcomeText}>VIENVENIDOS A LA TIENDA!</Text>
    //</View>
  );
}

const styles = StyleSheet.create({
   //container: {
    //flex: 1,
    //justifyContent: 'center',
    //padding: 24,
    //backgroundColor: '#000000'
    
  //},
  //text: {
    //textAlign: 'center',
    //fontSize: 20,
    //fontWeight: 'bold',
    //color: '#1BB385',
    //borderBottomColor: '#6d0dbb',
    //borderBottomWidth: 7, 
  //},
  //welcomeText: {
    //textAlign: 'center',
    //fontSize: 24,
    //fontWeight: 'bold',
    //color: '#FFFFFF',
  //}
  buttoneventos: {
    width: 200,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#0def82',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttoncontador: {
    width: 200,
    marginTop: 16,
    marginLeft: 100,
    backgroundColor: '#0707de',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  aboutme: {
    width: 200,
    marginTop: 16,
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    position: 'relative',
    marginLeft: 100,
  },
  aboutmet: {
    color: 'white',
    fontFamily: 'comic sans ms',
  },
  eventos: {
    color: 'white',
    fontFamily: 'comic sans ms',
    fontSize: 16,
    fontWeight: '700',
  },
  contador: {
    color: 'white',
    fontFamily: 'comic sans ms',
    fontSize: 16,
    fontWeight: '700',
  },
  nombre_1: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    position: 'absolute',
    top: 130,
    left: 20,
    fontSize: 20,
    color: '#0973a9',
  },
});
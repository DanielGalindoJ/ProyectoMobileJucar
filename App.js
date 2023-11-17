import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <Image source={require('./assets/zyro-image.jpg')} style={styles.logo} />
      <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
    </View>
    <View style={styles.card}>
        <View style={styles.form}>
          <Image source={{ uri: 'https://us.123rf.com/450wm/rigsby8131/rigsby81311704/rigsby8131170400147/75488593-tuercas-pernos-y-arandelas-en-un-fondo-de-acero.jpg?ver=6' }} style={styles.image} />
          <Text style={styles.titleIni}>Iniciar sesión </Text>
          <TextInput style={styles.input} placeholder="Usuario" />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
          <Button title="INGRESAR" style={styles.button} />
          <Text style={styles.link}>Olvidaste la Contraseña?</Text>
          <Text style={styles.link}>Aun no tienes perfil?</Text>
        </View>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  navbar: {
    backgroundColor: '#f80759',
    color: '#fff',
    borderColor: '#03a9f4',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 30,
    fontWeight:500,
    
    marginTop:1
  },
  logo: {
    width: 107,
    height: 57,
    resizeMode: 'contain',
    marginLeft:50
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 128,
    marginRight: -21,
    marginBottom: -19,
    width: 269.906,
    height: 68,
  },


  container: {
    marginTop: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  card: {
    borderRadius: 30,
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:35
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 10,
  },
  form: {
    marginTop: 1,
    padding: 2,
    
  },
  titleIni: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#333',
    marginBottom: 20,
    textTransform:'uppercase'
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    color: 'red',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#9E9E9E',
    marginTop: 15,
  },
});

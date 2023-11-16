import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <Image source={require('./assets/zyro-image.jpg')} style={styles.logo} />
      <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
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
    padding: 10,
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
});

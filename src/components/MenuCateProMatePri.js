import { StyleSheet, Text, View, Image,TextInput, Button,Pressable,Alert,StatusBar, Table } from 'react-native';


const MenuCateProMatePri =()=>{
    return (
        <View style={styles.container}>
             <View style={styles.navbar}>
            <Image
             source={require('../../assets/jucar.jpg')}
             style={styles.logo}
            />
            <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
         </View>

            <View style={styles.header}>
                <Text style={styles.headerText}>AGREGAR NUEVO PRODUCTO</Text>
            </View>

            <View style={styles.card}>
        {/* <Image style={styles.img} source={require('./PEDI.png')} /> */}
        <Text style={styles.text}>CATEGORIAS</Text>
      </View>
      <View style={styles.card}>
        {/* <Image style={styles.img} source={require('./VENTAS.png')} /> */}
        <Text style={styles.text}>AUTOPARTES</Text>
      </View>
      <View style={styles.card}>
        {/* //<Image style={styles.img} source={require('./png-clipart-referral-marketing-organization-management-employee-referral-business-face-people-removebg-preview.png')} /> */}
        <Text style={styles.text}>MATERIAS PRIMAS</Text>
      </View>
        </View>

        
    )
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
    header: {
        backgroundColor: '#f2f2f2',
        padding: 20,
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      card: {
        width: 200,
        height: 250,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 10,
        padding: 10,
      },
      img: {
        width: '100%',
        height: '100%',
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})
export default MenuCateProMatePri;
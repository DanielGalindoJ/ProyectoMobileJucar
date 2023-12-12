import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native-web";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../navigation/TabNavigation/TabNavigation.styles";
import { AuthContext } from '../context/AuthContext';
import Navigation from '../../components/Navigation';
import Spinner from "react-native-loading-spinner-overlay";

const RegisterScreen = () =>{
    const [Usuario, setUsuario] = useState(null)
    const [Contraseña, setContraseña] = useState(null)
    const [nombre, setNombre] = useState(null)
    const {isLoading,register} = useContext(AuthContext)

     

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            //encabezado logo 
                    <View style={styles.navbar}>
                    <Image
                          source={require('../../assets/jucar.jpg')}
                          style={styles.logo}
                        />
                        <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
                    </View>
            <View style={styles.wrapper}>
                <Text>{val}</Text>

                <TextInput
                    style={styles.input}
                    value={nombre}
                    placeholder = "Enter name "
                    onChangeText= {text => setNombre(text)}
                />

                <TextInput
                    style={styles.input}
                    value={Usuario}
                    placeholder = "Enter usuario "
                    onChangeText= {text => setUsuario(text)}
                />
                <TextInput
                    style={styles.input}
                    value={Contraseña}
                    placeholder = "Enter contraseña "
                    secureTextEntry
                    onChangeText= {text => setContraseña(text)}
                />
                <Button title="Register" onPress={() => {
                    register(Usuario, Contraseña)
                }} />

                <View>
                    <Text>Tiens una cuenta?</Text>
                    <TouchableOpacity onPress={()=> navigation.Navigate('login')}>
                        <Text style={styles.link}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
      },
      wrapper:{
        width: '80%'
      },   
      input:{
        marginBottom:12,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 14,
      } ,
      link: {
        fontSize: 16,
        color: '#9E9E9E',
        marginTop: 15,
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
})

export default RegisterScreen
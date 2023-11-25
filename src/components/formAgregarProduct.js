import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable, ScrollView, Modal, Alert } from 'react-native';
import { useState } from 'react';

const FormAgregarProduct = () => {
const [categoría, setCategoria] = useState('');
const [nombre, setNombre] = useState('');
const [zonaVehiculo, setZonaVehiculo] = useState('');
const [estado, setEstado] = useState ('');
const [peso, setPeso ] = useState ('');
const [ alto, setAlto] = useState('');
const [largo, setLargo] = useState('');
const [precio, setPrecio] = useState ('');
      //validacion campos
  const validacionCampos =()=>{
    if ([categoría,
        nombre,
        zonaVehiculo,
        estado,
        peso,
        alto,
        largo,
        precio
        ].includes('')){
      Alert.alert(
        'Error', //Tittulo alerta
        'Todos los campos son obligatorios'//descripocion 
      )
      return
    }
    const formuProducts ={
        categoría,
        nombre,
        zonaVehiculo,
        estado,
        peso,
        alto,
        largo,
        precio
    }
    console.log(formuProducts)
  }    

    return (
     <View style={Style.contenido}>
        <ScrollView>
        //encabezado logo 
        <View style={styles.navbar}>
            <Image
             source={require('../../assets/jucar.jpg')}
             style={styles.logo}
            />
            <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
         </View>
         //section 
         <View style={styles.header}>
        <Text style={styles.headerText}>AGREGAR NUEVO PRODUCTO</Text>
      </View>
         // div form
      <View style={styles.formContainer}>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>CATEGORÍA</Text>
          <TextInput style={styles.formInput} placeholder="Digite la categoría del producto" 
          value={categoría}
          onChange={setCategoria}
          onPress={validacionCampos}

          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>NOMBRES</Text>
          <TextInput style={styles.formInput} placeholder="Digite el nombre del producto"
          value={nombre}
          onChange={setNombre}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ZONA VEHÍCULO</Text>
          <TextInput style={styles.formInput} placeholder="Digite el precio unitario del producto"
          value={zonaVehiculo}
          onChange={setZonaVehiculo}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ESTADO</Text>
          <TextInput style={styles.formInput} placeholder="Digite las existencias iniciales del producto" 
          value={estado}
          onChange={setEstado}
         // onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>PESO KG</Text>
          <TextInput style={styles.formInput} placeholder="Digite el peso del producto" 
          value={peso}
          onChange={setPeso}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ALTO CM</Text>
          <TextInput style={styles.formInput} placeholder="Digite el alto del producto"
          value={alto}
          onChange={setAlto}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>LARGO CM</Text>
          <TextInput style={styles.formInput} placeholder="Digite el largo del producto" 
          value={largo}
          onChange={setLargo}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>PRECIO</Text>
          <TextInput style={styles.formInput} placeholder="Digite el precio del producto"
          value={precio}
          onChange={setPrecio}
          onPress={validacionCampos}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Image source={require('../../assets/flechatras.png')} style={styles.backButtonImage} />
            <Text style={styles.backButtonText}>VOLVER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <Image source={require('../../assets/btnGuardar.png')} style={styles.saveButtonImage} />
            <Text style={styles.saveButtonText}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </View>

        </ScrollView>
    </View>
    );
};
const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#6D28D9',
        flex: 1
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
      formContainer: {
        flex: 1,
        padding: 20,
      },
      formSection: {
        marginBottom: 10,
      },
      formLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      formInput: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        fontSize: 14,
        borderRadius: 5,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
    
})
export default FormAgregarProduct
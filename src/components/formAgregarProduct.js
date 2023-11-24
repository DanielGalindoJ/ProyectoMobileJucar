import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable, ScrollView, Modal } from 'react-native';
import { useState } from 'react';

const FormAgregarProduct = () => {
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
          <TextInput style={styles.formInput} placeholder="Digite la categoría del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>NOMBRES</Text>
          <TextInput style={styles.formInput} placeholder="Digite el nombre del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>FUNCIÓN</Text>
          <TextInput style={styles.formInput} placeholder="Digite la medida del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ZONA VEHÍCULO</Text>
          <TextInput style={styles.formInput} placeholder="Digite el precio unitario del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ESTADO</Text>
          <TextInput style={styles.formInput} placeholder="Digite las existencias iniciales del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>PESO KG</Text>
          <TextInput style={styles.formInput} placeholder="Digite el peso del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>ALTO CM</Text>
          <TextInput style={styles.formInput} placeholder="Digite el alto del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>LARGO CM</Text>
          <TextInput style={styles.formInput} placeholder="Digite el largo del producto" />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>PRECIO</Text>
          <TextInput style={styles.formInput} placeholder="Digite el precio del producto" />
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
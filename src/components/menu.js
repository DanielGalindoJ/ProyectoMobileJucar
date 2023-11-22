import { StyleSheet, Text, View, Image,TextInput, Button,Pressable, ScrollView,Modal  } from 'react-native';
import { useState } from 'react';


const menu =(modalVisible, setModalVisible) =>{
  
    return(
        <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.contenido}>
                <ScrollView>
                    <View style={styles.navbar}>
                    <Image
                          source={require('../../assets/jucar.jpg')}
                          style={styles.logo}
                        />
                        <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
                    </View>

                    //section
                    <View style={styles.section}>
                        <View style={styles.container}>
                            <View style={styles.row}>
                            <View style={styles.col}>
                                <Text style={styles.title}>MENU</Text>
                            </View>
                            </View>
                        </View>
                    </View>;
                    <View style={{ flexDirection: 'row' }}>
                        
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Menu 1</Text>
                        </View>
                        <Pressable>
                        
                        </Pressable>
                      </View>

                      //div menu
                      <View style={styles.container}>
                        <View style={styles.section}>
                          <View style={styles.cardContainer}>
                            <View style={styles.card}>
                              <Image source={require('../../assets/cli.png')} style={styles.image} />
                              <Text style={styles.cardText}>CLIENTES</Text>
                            </View>

                            <View style={styles.card}>
                              <Image source={require('../../assets/produ.png')} style={styles.image} />
                              <Text style={styles.cardText}>PRODUCTOS</Text>
                            </View>

                            <View style={styles.card}>
                              <Image source={require('../../assets/pro.png')} style={styles.image} />
                              <Text style={styles.cardText}>PROVEEDORES</Text>
                            </View>

                            <View style={styles.card}>
                              <Image source={require('../../assets/PEDI.png')} style={styles.image} />
                              <Text style={styles.cardText}>PEDIDOS</Text>
                            </View>

                            <View style={styles.card}>
                              <Image source={require('../../assets/VENTAS.png')} style={styles.image} />
                              <Text style={styles.cardText}>FACTURAS</Text>
                            </View>

                            <View style={styles.card}>
                              <Image source={require('../../assets/png-clipart-referral-marketing-organization-management-employee-referral-business-face-people-removebg-preview.png')} style={styles.image} />
                              <Text style={styles.cardText}>EMPLEADOS</Text>
                            </View>

                          </View>
                        </View>
                      </View>
                </ScrollView>
            </View>
        </Modal>
    );
};  
const styles = StyleSheet.create({
    contenido: {
      backgroundColor: '#6D28D9',
      flex: 1,
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
        width: 60,
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

      //section

      section: {
        marginTop: 2,
        marginBottom: -28,
      },
      container: {
        padding: 0,
        margin: 0,
      },
      row: {
        paddingTop: 0,
        marginTop: -40,
      },
      col: {
        textAlign: 'center',
      },
     
      navTabs: {
        paddingTop: 0,
        marginTop: -54,
      },
      navTab: {
        padding: 0,
        margin: 0,
      },
      navLink: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      navLinkImage: {
        height: 54,
        width: 54,
        marginRight: 10,
      },
      navLinkText: {
        fontSize: 18,
        color: '#333',
      },
      //div menu
      container: {
        marginLeft: -20,
        padding: 0,
        backgroundColor: '#f8f9fa',
      },
      section: {
        backgroundColor: '#f8f9fa',
        padding: 0,
        height: 300,
        width: 10,
      },
      cardContainer: {
        flexDirection: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0,
      },
      card: {
        width: 21,
        padding: 3,
        height: 28,
        margin: 27,
        backgroundColor: '#ffffff',
      },
      image: {
        width: 26,
        height: 27,
        margin: 29,
        padding: 6,
      },
      cardText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#198754',
        padding: 10,
      },

});

export default menu
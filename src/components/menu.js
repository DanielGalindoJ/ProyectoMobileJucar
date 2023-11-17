import { StyleSheet, Text, View, Image,TextInput, Button,Pressable  } from 'react-native';
import { useState } from 'react';


const menu =(modalVisible, setModalVisible) =>{
  
    return(
        <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.contenido}>
                <ScrollView>
                    <View style={styles.navbar}>
                    <Image
                          source={require('./assets/jucar2.jpg')}
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
      title: {
        fontFamily: 'Aclonica, sans-serif',
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
        fontFamily: 'Acme, sans-serif',
        color: '#333',
      },
});

export default menu
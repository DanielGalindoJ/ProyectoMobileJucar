
import { StyleSheet, Text, View, Image,TextInput, Button,Pressable,Alert,StatusBar, Table } from 'react-native';
import { useState } from "react";
import { ScrollView } from 'react-native-web';


const listProducts = (autopat) => {
    const [categoría, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [zonaVehiculo, setZonaVehiculo] = useState('');
    const [estado, setEstado] = useState ('');
    const [peso, setPeso ] = useState ('');
    const [ alto, setAlto] = useState('');
    const [largo, setLargo] = useState('');
    const [precio, setPrecio] = useState ('');

    const [autoparts,setAutoparts] = useState([])
    const url = 'https://localhost:7028/api/autoparts/'; // https://localhost:7028/api/autoparts 

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.navbar}>
                    <Image
                        source={require('../../assets/jucar.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>AUTOPARTES JUCAR SAS</Text>
                </View>

                //table
                <View>
                    <Table style={styles.table}>
                        <Table.Header>
                        <Table.Row>
                            <Table.Cell>
                            <Text style={styles.headerText}>#</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>SubCategoria</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Nombre</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Ancho</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Largo</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Peso</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Zona del Vehiculo</Text>
                            </Table.Cell>

                            <Table.Cell>
                            <Text style={styles.headerText}>Estado</Text>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {autoparts.map((autopart, i) => (
                            <Table.Row key={autopart.autopartID}>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{i + 1}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{categoría.nombre}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.nombre}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.ancho}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.largo}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.peso}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.vehicleZone}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.state}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Button
                                title="Editar"
                                onPress={() =>
                                    openModal(2, autopart.nombre, autopart.ancho, autopart.largo, autopart.peso, autopart.vehicleZone, autopart.state, )
                                }
                                />
                                <Button title="Eliminar" onPress={() => deleteAutopart(autopart.autopartID, autopart.nombre)} />
                            </Table.Cell>
                            </Table.Row>
                        ))}
                        </Table.Body>
                    </Table>
                </View>
            </ScrollView>
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
      table: {
        width: '100%',
        marginTop: 20,
      },
      
})
export default listProducts
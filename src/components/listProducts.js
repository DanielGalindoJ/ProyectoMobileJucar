
import { StyleSheet, Text, View, Image,TextInput, Button,Pressable,Alert,StatusBar, Table, Select } from 'react-native';
import { useState } from "react";
import { ScrollView } from 'react-native-web';
import axios from 'axios';
import { Modal } from 'react-native-paper';

//falta
const listProducts = ( isVisible) => {
    const [categoría, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [zonaVehiculo, setZonaVehiculo] = useState('');
    const [estado, setEstado] = useState ('');
    const [peso, setPeso ] = useState ('');
    const [ alto, setAlto] = useState('');
    const [largo, setLargo] = useState('');
    const [precio, setPrecio] = useState ('');

    const [operation,setOpertaion]=useState([1])
  const [idToEdit, SetidToEdit] = useState(null);

    const [autoparts,setAutoparts] = useState([])
    const url = 'https://localhost:7028/api/autoparts/'; // https://localhost:7028/api/autoparts   const URL = `${url}/${autopartID}`; // Autoparte Por Id:
    const URL = `${url}/${autopartID}`; // Autoparte Por Id:


    useEffect(() => {
        getAutoparts();
        
      }, );

      const getAutoparts = async () => {
        const respuesta = await axios.get(url);
        setAutoparts(respuesta.data);
        const openModal = (op,nombre, alto,estado, peso, largo,zonaVehiculo,precio,autopartID,   subCategoryId) => {
            setAutopartId('')
            setNombre('')
            setAlto('')
            setEstado('')
            setPeso('')
            setLargo('')
            setZonaVehiculo('')
            setPrecio('')
            setOpertaion(op);
        
        
            if (op === 1) {
              setTitle('Registrar Autoparte');
              setNombre('')
              setPrecio('')

              setSubCategoryId('')
            } else if (op === 2) {
              setTitle('Editar Autoparte');
              setAutopartId(autopartID)
              setNombre(nombre);
              setLargo(largo)
              setPrecio(precio)
              setPeso(peso)
              setEstado(estado)
              setAlto(alto)
              setZonaVehiculo(zonaVehiculo)
              setSubCategoryId(subCategoryId)
              SetidToEdit(autopartID);
        
            }
            window.setTimeout(function () {
              document.getElementById('name').focus();
            }, 500);
          };
      };
      if (operation === 1) {
        parametros = {
          nombre: nombre,
          alto:alto,
          largo: largo,
          peso:peso,
          precio: precio,
          zonaVehiculo: zonaVehiculo,
          estado: estado,
          subCategoryId: subCategoryId
        };
        metodo = 'POST';
      } else {
        parametros = {
            nombre: nombre,
            alto:alto,
            largo: largo,
            peso:peso,
            precio: precio,
            zonaVehiculo: zonaVehiculo,
            estado: estado,
            subCategoryId: subCategoryId
        };
        metodo = 'PUT';
      }
      enviarSolicitud(metodo, parametros,autopartID);
      const enviarSolicitud = async (metodo,parametros, autopartID) => {
        if (metodo === "POST") {
          axios
            .post(`${URL}`, parametros)
            .then(function (respuesta) {
              show_alerta("success", "Autoparte creado");
              document.getElementById("btnCerrar").click();
              getAutoparts();
            })
            .catch(function (error) {
              show_alerta("error", "Error de solucitud");
              console.log(error);
            });
        } else if (metodo === "PUT") {
          axios
            .put(`${URL}${autopartID}`, parametros)
            .then(function (respuesta) {
              console.log("Solicitud PUT exitosa:", respuesta.data);
              // var tipo = respuesta.data[0];
              // var msj = respuesta.data[1];
              show_alerta("success", "autoparte editado con exito");
              document.getElementById("btnCerrar").click();
              getAutoparts();
            })
            .catch(function (error) {
              show_alerta("error", "El autoparte no se edito");
              console.log(error);
            });
        }
      };
    
      const deleteAutopart = (autopartID, nombre) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: "¿Seguro quieres eliminar el autoparte " + nombre + "?",
          icon: "question",
          text: "No se podra dar marcha atras",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          console.log(autopartID);
          if (result.isConfirmed) {
            try {
              console.log(`${URL}/${autopartID}`);
              await axios.delete(`${URL}${autopartID}`);
              show_alerta("success", "Usuario eliminado exitosamente");
              getAutoparts();
            } catch (error) {
              console.log(`${URL}/${autopartID}`);
              show_alerta("error", "Error al eliminar el producto");
              console.error(error);
            }
          } else {
            show_alerta("info", "El producto no fue eliminado");
          }
        }
        )};

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
                                <Text style={styles.bodyText}>{autopart.zonaVehiculo}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Text style={styles.bodyText}>{autopart.state}</Text>
                            </Table.Cell>

                            <Table.Cell>
                                <Button
                                    title='Añadir'
                                    onPress={()=>
                                        openModal(1)
                                    }
                                />

                                <Button
                                title="Editar"
                                onPress={() =>
                                    openModal(2, nombre.autopart, autopart.ancho, autopart.largo, autopart.peso, autopart.vehicleZone, autopart.state, )
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
            <Modal visible={isVisible} animationType="slide">
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#fff', padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="Nombre Autoparte"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="alto"
                        keyboardType="numeric"
                        value={alto}
                        onChangeText={setAlto}
                    />
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="peso"
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="largo"
                        keyboardType="numeric"
                        value={localHeightCm}
                        onChangeText={setHeightCm}
                    />
                    
                   
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="Zona del Vehiculo"
                        value={zonaVehiculo}
                        onChangeText={setZonaVehiculo}
                    />
                    <Input
                        style={{ marginVertical: 10 }}
                        placeholder="Precio"
                        keyboardType="numeric"
                        value={precio}
                        onChangeText={setPrecio}
                    />
                    <Select
                        style={{ marginVertical: 10 }}
                        placeholder="Selecciona una subcategoría"
                        onValueChange={setSubCategoryId}
                    >
                        <option value="">Selecciona una subcategoría</option>
                        {subCategories.map((category) => (
                        <option key={category.autopartID} value={category.subCategoryId}>
                            {category.nombre}
                        </option>
                        ))}
                    </Select>
                    <Button
                        style={{ marginVertical: 10 }}
                        title="Guardar"
                        onPress={validate}
                    />
                    </View>
                    <Button title="Cerrar" onPress={onClose} style={{ marginVertical: 10 }} />
                </View>
                </Modal>
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
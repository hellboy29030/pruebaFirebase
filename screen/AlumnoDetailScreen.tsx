import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet, Button, Modal } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeGlobal } from '../theme/Theme';
import { ButtonPro } from '../components/ButtonPro';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





export const AlumnoDetailScreen = ({route, navigation}:any) => {
    const {top} = useSafeAreaInsets();

    const { item } = route.params;
    const photoAlumno = `https://facmks.com/colegioApp/admin/Modulos/alumno/img/alumno_${ item.imagen === '0' ? item.imagen : item.ide }.jpg`;
    
    const [IsVisible, setIsVisible] = useState(false)
    
    
    return (
        <View style={{ flex: 1 }}>
    
            <View
                style={{
                    backgroundColor: '#fd7504',
                    height: windowHeight * 0.3,
                    width: windowWidth,
                }}
            >

            <View style={{ 
                    top: windowHeight * 0.17,                 
                    alignItems: 'center',
                }} 
            >
                <Image source={{ uri: photoAlumno }} style={{ ...Styles.imagen }} />

                <Text style={{ ...Styles.labelApellido, ...ThemeGlobal.Color, }} >
                    { item.apellido }
                </Text>

                <Text style={{ ...Styles.labelNombre, ...ThemeGlobal.Color }} >
                    { item.nombre }
                </Text>    

                <ButtonPro 
                    title="Generar Token"
                    onPress={ () => setIsVisible(true) }
                    style={{
                        ...Styles.boton
                    }}
                />

            </View>


            <TouchableOpacity
                onPress={ () => navigation.pop() }
                style={{ position: 'absolute', top }}
            >
                <Ionicons name="arrow-back-sharp" size={40} color="white" style={{ top, marginLeft: 10 }}  />
            </TouchableOpacity>

            </View>


            <Modal
                animationType='fade'
                visible={ IsVisible }
                transparent={ true }
            >

                {/* Background negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <View style={{                        
                        width: windowWidth-40,
                        height: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Token generado</Text>
                        <Text style={{ fontSize: 50, marginBottom: 20 }}>
                            6988526
                        </Text>

                        

                        <ButtonPro 
                            title='Cerrar' 
                            onPress={ () => setIsVisible(false) }
                        />
                    </View>

                </View>

            </Modal>

        </View>

        
    )
}

export const Styles = StyleSheet.create({
    boton:{
        backgroundColor: '#fd7504',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 20,
    },
    labelNombre:{
        fontSize: 25
    },
    labelApellido:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    imagen:{
        marginBottom: 15,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#fd7504',
    }
})
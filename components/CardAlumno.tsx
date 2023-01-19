import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ListadoAlumnos } from '../interfaces/AppInterfaces'
import { ButtonPro } from './ButtonPro'

export const CardAlumno = ({infoData, onPress} : any) => {
    
    return (
        <View>
            <View style={ Styles.container }>
                <Image 
                    style={ Styles.imagen }
                    source={{ 
                        uri:`https://facmks.com/colegioApp/admin/Modulos/alumno/img/alumno_${ infoData.imagen === '0' ? infoData.imagen : infoData.ide }.jpg` 
                    }}  
                />
            
                <Text style={ Styles.labelNombre }>{ infoData.nombre } { infoData.apellido }</Text>

                <ButtonPro title='Ver mas' onPress={ onPress } />
            </View>
        </View>
    )
}

export const Styles = StyleSheet.create({
    container: {
        width: 180,
        height: 292,
        borderColor: '#fd7504',
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 8,
    }, 
    imagen: {
        width: 100,
        height: 100,
    },

    labelNombre: {
        fontSize: 16, 
        textAlign: 'center', 
        marginTop: 10, 
        color: '#fd7504', 
        fontWeight: 'bold'
    }
});
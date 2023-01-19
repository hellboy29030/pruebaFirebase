import React, { useEffect, useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeGlobal } from '../theme/Theme';
import { AuthContext } from './AuthContext';

export const UserData = () => {
    const { logOut } = useContext( AuthContext )
    const [usuario, setUsuario] = useState<any>([])

    useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async ()=> {
        try {
            const myArray = await AsyncStorage.getItem('user');
            if (myArray !== null) {
              setUsuario(JSON.parse(myArray))
            }
        } catch (error) {
        
        }
    }

    return (
        <View style={{
            position: 'absolute',
            top: 60,
            alignItems: 'flex-end',
            paddingHorizontal: 20,
            width: '100%'
        }}>
            <Text style={{ fontSize: 15 }}>
                <Ionicons name="person" size={20} color="black" /> Hola, { usuario.nombre }
            </Text>

            <TouchableOpacity
                style={{ ...ThemeGlobal.boton, ...ThemeGlobal.fondo }}
                onPress={ logOut }
            >
                
                <Text style={ ThemeGlobal.botonText }><Ionicons name="exit" size={20} color="white" /> Salir</Text>
            </TouchableOpacity>
            
        </View>
    )
}

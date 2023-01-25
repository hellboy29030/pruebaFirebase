
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase/firebaseConfig'


export const HomeScreen = ({navigation}: any) => {
    
    const [correo, setCorreo] = useState<any>('')
    const [contrasena, setContrasena] = useState<any>('')

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);

    const crearCuenta = () => {
        createUserWithEmailAndPassword(auth, correo, contrasena)
            .then( (userCredential)=> {
                Alert.alert('Se ha creado la cuenta')   
                const user = userCredential.user
                setCorreo('')
                setContrasena('');
                
            }).catch(error => {
                console.log(error);
            })
    }

    const ingresarCuenta = () =>{
        signInWithEmailAndPassword( auth, correo, contrasena)
            .then( (userCredential)=> {
                const user = userCredential.user
                console.log(user);
                setCorreo('')
                setContrasena('');

                navigation.navigate('PerfilScreen', {email: correo});
            })
    }

    return (
        <View style={ styles.container }>
            <Text style={{ fontSize: 30, marginBottom: 40 }}>
                Bienvenido al Sistema
            </Text>

            <Image 
                source={ require('../assets/logo.png') }
                style={ styles.image }
            />

            <Text style={ styles.label }>Email</Text>
            <TextInput
                style={styles.input}
                keyboardType='email-address'
                onChangeText={ (texto) => setCorreo(texto) }
            />

            <Text style={ styles.label }>Contraseña</Text>
            <TextInput
                style={styles.input}
                keyboardType="default"
                secureTextEntry
                onChangeText={ (texto) => setContrasena(texto) }
            />

            <TouchableOpacity
                style={ styles.boton }
                onPress={ingresarCuenta}
            >
                <Text style={ styles.botonLabel }>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.boton }
                onPress={crearCuenta}
            >
                <Text style={ styles.botonLabel }>Crear una cuenta</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        marginBottom: 25
    },

    botonLabel: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },

    boton:{
        marginTop: 20,
        backgroundColor: '#fd7504',
        width: '100%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center', 
        justifyContent: 'center', 
    },

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 20
    },

    label: {
        fontSize: 18,
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        width: '100%'
    },

    input: {
        borderRadius: 12,
        height: 55,
        margin: 12,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        width: '100%'
    },
});
import React, { useContext, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TextInput, Keyboard, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext'

export const LoginScreen = () => {

    const { signIn, errorMessage, removeError } = useContext( AuthContext )

    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    })

    useEffect(() => {
        if(errorMessage.length === 0) return;
        Alert.alert('Datos Incorrecto',  errorMessage,
            [{
                text: 'Ok',
                onPress: removeError
            }]
        )
    }, [errorMessage])
    

    const onLogin = () =>{
        //console.log({email,password});
        Keyboard.dismiss();
        signIn({ correo: email, contra: password });
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
        >
            <Background />


            <View style={ LoginStyles.formContainer }>

                <WhiteLogo />

                <Text style={ LoginStyles.title }>Bienvenido</Text>      
                <Text style={ LoginStyles.label }>Email:</Text>  
                <TextInput
                    placeholder='Ingrese su Email:'
                    placeholderTextColor="rgba(255,255,255,0.6)"
                    keyboardType='email-address'
                    
                    style={LoginStyles.inputStyle}
                    selectionColor="white"

                    onChangeText={ (value)=> onChange(value, 'email') }
                    value={ email }
                    
                    autoCapitalize='none'
                    autoCorrect={ false }
                />  

                <Text style={ LoginStyles.label }>Contraseña:</Text>   
                <TextInput 
                    placeholder='Ingrese su contraseña:'
                    placeholderTextColor="rgba(255,255,255,0.6)"
                    
                    secureTextEntry={ true }
                    style={LoginStyles.inputStyle}
                    selectionColor="white"

                    onChangeText={ (value)=> onChange(value, 'password') }
                    value={ password }

                    autoCapitalize='none'
                    autoCorrect={ false }
                />  

                {/* Boton login */}
                <View style={ LoginStyles.buttonContainer }>
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        style={ LoginStyles.button }
                        onPress={ onLogin }
                    >
                        <Text style={ LoginStyles.buttonText }><Ionicons name="enter-outline" size={20} color="white" /> Ingresar</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        </KeyboardAvoidingView>
        
    )
}

export const LoginStyles = StyleSheet.create({
    formContainer:{
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50,
    },
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    label:{
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
    },

    inputStyle:{
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: 'white',
        color: 'white'
    },

    buttonContainer:{
        alignItems: 'center',
        marginTop: 50,
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 100,
    },
    buttonText:{
       fontSize: 18,
       color: 'white',         
    },

   

});

import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginData, LoginResponse, Usuario } from '../interfaces/AppInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import escuelaApi from '../api/BaseUrl';


type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;    
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData )=>void;
    logOut: ()=>void;
    removeError: ()=>void;
}

const authInicialState: AuthState={
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) =>{
    
    const [ state, dispatch ] = useReducer(authReducer, authInicialState);
    
    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        
        if(!token) return dispatch({ type: 'notAuthenticated' });

        //verificar token
        const formData = new FormData();
        formData.append("token", token);
        
        const resp = await escuelaApi.post<LoginResponse>(`/auth/`, formData, {
            headers: { 
                'Content-Type': 'multipart/form-data' 
            },
        });

        if(resp.data.mensaje !== undefined){ 
            return dispatch({ type: 'notAuthenticated' })
        }
        
        dispatch({
            type: 'singUp',
            payload: {
                token: resp.data.token,
                correo: resp.data.correo 
            }
        });
    }
    

    const signIn = async({ correo, contra }: LoginData) => {
        try {
            const formData = new FormData();
            formData.append("correo", correo);
            formData.append("contra", contra);

            const resp = await escuelaApi.post<LoginResponse>(`/auth/login.php`, formData, {
                headers: { 
                    'Content-Type': 'multipart/form-data' 
                },
            });

            if(resp.data.mensaje !== undefined){
                /* Alert.alert('Error!', resp.data.mensaje) */
                dispatch({
                    type: 'addError',
                    payload: resp.data.mensaje || 'Información incorrecta'
                })
            }else{
                dispatch({
                    type: 'singUp',
                    payload: {
                        token: resp.data.token,
                        correo: resp.data.correo 
                    }
                });
                
                await AsyncStorage.setItem('user', JSON.stringify(resp.data))
                await AsyncStorage.setItem('token', resp.data.token); 
                
            }
            
            

        } catch (error) {
            
        }
    };


    

    const logOut = async() => {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };


    const removeError = () => {
        dispatch({type: 'removeError'})
    };

    

    return (

        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>

    )
}
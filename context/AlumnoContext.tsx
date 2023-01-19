import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useContext, useState } from 'react'
import escuelaApi from '../api/BaseUrl';
import { Alumno, AlumnoResponse } from '../interfaces/AppInterfaces';
import { AuthContext } from './AuthContext';

type AlumnoContextProps = {
    alumnos: Alumno[];
    cantAlumno: number;
    isLoading: boolean;
    loadAlumno: (token: string) => Promise<void>;
    loadAlumnoById: ( id: string ) => Promise<Alumno>;
}

export const AlumnoContext = createContext({} as AlumnoContextProps)

export const AlumnoProvider = ({children}: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState()
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    
    const [cantAlumno, setCantAlumno] = useState(0)



    useEffect(() => {
        
        loadAlumno();
        
    }, [])

   
    

    const loadAlumno = async () => {
        
        try {
            const token = await AsyncStorage.getItem('token')
            setIsLoading(true)
            
            const resp = await escuelaApi.post<AlumnoResponse>(`https://facmks.com/colegioApp/apiResp/fullAlumnos.php?token=${token}` )

            setAlumnos(resp.data.alumno);
            setCantAlumno(resp.data.total);
            
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        

    };

    const loadAlumnoById = async ( id: string ) => {
        throw new Error('Not implemented');
        
    };

    return (
        <AlumnoContext.Provider value={{
            alumnos,
            loadAlumno,
            loadAlumnoById,
            isLoading,
            cantAlumno
        }}>
            { children }
        </AlumnoContext.Provider>
        
    )
}
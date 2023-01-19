import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/LoginScreen';
import { Loading } from '../components/Loading';
import { NavigationTab } from './NavigationTab';
import { AlumnoDetailScreen } from '../screen/AlumnoDetailScreen';


export type AlumnosStackParams = {
    AlumnoDetailScreen: { item: any }
    HomeScreen: undefined,
    LoginScreen: undefined,
}


const Stack = createNativeStackNavigator<AlumnosStackParams>();

export const NavigationStack = () => {

    const { status } = useContext( AuthContext )

    if( status === 'checking' ) return <Loading />

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            {
                (status === 'authenticated') 
                    ? (
                        <>
                            <Stack.Screen name="HomeScreen" component={NavigationTab} />
                            <Stack.Screen name="AlumnoDetailScreen" component={AlumnoDetailScreen} />
                        </>
                    ) : (
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    )
            }

            
            
        </Stack.Navigator>
    );
}


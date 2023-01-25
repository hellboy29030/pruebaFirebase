import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screen/HomeScreen';
import { PerfilScreen } from '../screen/PerfilScreen';



const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
            <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        </Stack.Navigator>
    );
}


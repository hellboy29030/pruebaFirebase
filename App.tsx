import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './navigation/NavigationStack';
import { AuthProvider } from './context/AuthContext';
import { AlumnoProvider } from './context/AlumnoContext';

const AppState = ({ children }: any) =>{
    return (
        <AuthProvider>
            <AlumnoProvider>
                { children }
            </AlumnoProvider>
        </AuthProvider>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <AppState>
            <NavigationStack />
            {/* <NavigationDrawer /> */}
            {/* <NavigationTab /> */}
        </AppState>
    </NavigationContainer>
  );
}


import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SafeAreaView, StatusBar } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './navigation/NavigationStack';


export default function App() {
    
    return (
        <SafeAreaView style={{flex: 1 }}>
            <NavigationContainer>
                <NavigationStack />
                <StatusBar backgroundColor={'#fd7504ab'} />
                
            </NavigationContainer>
        </SafeAreaView>
    );
}


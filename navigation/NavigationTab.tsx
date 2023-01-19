import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { AlumnoScreeen } from '../screen/AlumnoScreeen';
import { HomeScreen } from '../screen/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationStack } from './NavigationStack';
import { SettingsScreen } from '../screen/SettingsScreen';


const Tab = createBottomTabNavigator();

export const NavigationTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fd7504',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarLabel: 'Principal',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="AlumnoScreen" component={AlumnoScreeen}
                options={{
                    tabBarLabel: 'Alumnos',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen}
                options={{
                    tabBarLabel: 'Configuraciones',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="settings" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

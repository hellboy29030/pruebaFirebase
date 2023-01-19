import React from 'react'
import { View, Text } from 'react-native'
import { UserData } from '../context/UserData'
import { ThemeGlobal } from '../theme/Theme'

export const SettingsScreen = () => {
  return (
        <View style={ ThemeGlobal.container }>
            <UserData />
            <Text style={{ ...ThemeGlobal.title, ...ThemeGlobal.Color, fontSize: 25 }}>
                Configuraciones !!!
            </Text>
        </View>
    )
}

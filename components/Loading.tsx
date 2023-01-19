import React from 'react'
import { Text, ActivityIndicator, View } from 'react-native'
import { ThemeGlobal } from '../theme/Theme'

export const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
                size={ 50 }
                color="#fd7504"
            />

            
            <Text style={{ marginTop: 20, fontSize: 15 }}>Cargando ...</Text>
        </View>
    )
}

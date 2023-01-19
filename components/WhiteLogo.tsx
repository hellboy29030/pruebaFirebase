import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <Image 
                source={ require('../assets/logo.png') }
                style={{
                    width: 315,
                    height: 115,
                    marginTop: 25,
                }}
            />
        </View>
    )
}

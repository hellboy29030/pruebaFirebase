import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

export const ButtonPro = ({title, onPress, style={}} : any) => {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    ...style,
                    backgroundColor: '#fd7504',
                    padding: 7,
                    borderRadius: 5,
                    marginTop: 7,
                }}
            >
                <Text style={{ color: 'white' }}>{ title }</Text>
            </TouchableOpacity>
        </>
    )
}

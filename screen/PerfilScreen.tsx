import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PerfilScreen = ({ route }: any) => {

    const { email } = route.params;

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Bienvenida Screen</Text>
            <Text style={ styles.subtitle }>{ email }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    },
    subtitle:{
        fontSize: 15,
    },
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 20
    }
});


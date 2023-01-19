
import React, {useContext} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AlumnoContext } from '../context/AlumnoContext';
import { UserData } from '../context/UserData';
import { ThemeGlobal } from '../theme/Theme';

export const HomeScreen = ({navigation}: any) => {

    return (
        <View style={ ThemeGlobal.container }>
            
            <UserData />

            <Text style={{ ...ThemeGlobal.title, ...ThemeGlobal.Color, fontSize: 25 }}>
                Bienvenido al Sistema
            </Text>

           
        </View>
    )
}
/* 
    <Button 
        title='Ir Page Screen'
        onPress={() => {
            navigation.navigate('PageScreen', {  
                nombre: 'JORGE',
                apellido: 'VASQUEZ'
            });
        }}
    />
*/
import AsyncStorage from '@react-native-async-storage/async-storage'

import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Button, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import escuelaApi from '../api/BaseUrl'

import { CardAlumno } from '../components/CardAlumno'
import { Loading } from '../components/Loading'
import { Alumno, AlumnoResponse } from '../interfaces/AppInterfaces'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




export const AlumnoScreeen = ({navigation}: any) => {

    const {top} = useSafeAreaInsets();

    
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    

    useEffect(() => {
        cargarAlumnos();   
    }, [])


    const [cargando, setCargando] = useState(true)

    const cargarAlumnos = async()=>{   
        
        const tokenrefresh = await AsyncStorage.getItem('token');
        const resp = await escuelaApi.post<AlumnoResponse>(`https://facmks.com/colegioApp/apiResp/fullAlumnos.php?token=${tokenrefresh}` )

        setAlumnos(resp.data.alumno);
        setCargando(false);
    }

    return (
        <View style={{flex: 1}}>
            {
                cargando === true && (
                    
                    <ActivityIndicator 
                        size={ 50 }
                        color="#fd7504"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '43%'
                        }}
                    />
                    
                )
            }
            <View style={{ alignItems: 'center' }}>
                <FlatList 
                    data={alumnos}
                    keyExtractor={ (i) => i.ide }

                    showsVerticalScrollIndicator={false}
                    numColumns={ 2 }
                    
                    style={{
                        top: top + 20,
                        height: windowHeight - 60,
                    }}

                    ListHeaderComponent={(
                        <Text>
                            Listado de alumnos
                        </Text>
                    )}

                    renderItem={ ({item}) => (
                        <CardAlumno infoData={item} onPress={()=>navigation.navigate('AlumnoDetailScreen', { item: item })}  />
                    )}
                />
            </View>
        </View>
           
    )
}


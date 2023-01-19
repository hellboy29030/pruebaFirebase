import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = "https://facmks.com/colegioApp/apiResp/";

const escuelaApi = axios.create({ baseURL });

escuelaApi.interceptors.request.use(
    async(config : any)=>{
        const token = await AsyncStorage.getItem('token');
        if( token ){
            config.headers.token = token;
        }

        return config;
    }
)

export default escuelaApi;
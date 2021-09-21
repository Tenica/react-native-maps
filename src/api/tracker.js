import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
   baseURL:  'http://3d7d-129-205-113-11.ngrok.io'
});

instance.interceptors.request.use(
async (config) => {
   const token = await AsyncStorage.getItem('token');
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
   return config;
},
(err) => {
   return Promise.reject(err)
}

);

export default instance;
import auth from '@react-native-firebase/auth'
//import AsyncStorage from '@react-native-community/async-storage'
import { isFuture } from 'date-fns'
import axios from 'axios'
import config from '../config'

// Default axios config
axios.defaults.withCredentials = true

const getHeaders = async () => {
  try {
    const user = auth().currentUser
    // if (user) {
    //   let token = null
    //   const storageResult = await AsyncStorage.getItem('token')
    //   const storageResultObject = JSON.parse(storageResult)

    //   // Use saved token
    //   if (
    //     Boolean(storageResultObject) &&
    //     Boolean(storageResultObject.expirationTime)
    //   ) {
    //     if (isFuture(new Date(storageResultObject.expirationTime))) {
    //       token = storageResultObject.token
    //     }
    //   }

    //   // Renew token
    //   if (!Boolean(token)) {
    //     const result = await user.getIdTokenResult(true)
    //     await AsyncStorage.setItem('token', JSON.stringify(result))
    //     token = result.token
    //   }

    //   return {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   }
    // } else {
    //   return { 'Content-Type': 'application/json' }
    // }
    return { 'Content-Type': 'application/json' }
  } catch {
    return { 'Content-Type': 'application/json' }
  }
}

const getServer = () => {
  if (config.enviroment === 'development') {
    return `http://${config.servers.development}:8080`
  }
  return config.servers.production
}

const api = {
  get: async (path, params = {}) => {
    const server = getServer()
    const headers = await getHeaders()
    return axios
      .get(server + path, { headers, params })
      .then(({ data: res }) => res.data)
      .catch(err => console.log('Axios get: ', path, err))
  },
  post: async (path, data = {}) => {
    const server = getServer()
    const headers = await getHeaders()
    return axios
      .post(server + path, data, { headers })
      .then(({ data: res }) => res.data)
      .catch(err => console.log('Axios post: ', path, err))
  },
  put: async (path, data = {}) => {
    const server = getServer()
    const headers = await getHeaders()
    return axios
      .put(server + path, data, { headers })
      .then(({ data: res }) => res.data)
      .catch(err => console.log('Axios put: ', path, err))
  },
  delete: async path => {
    const server = getServer()
    const headers = await getHeaders()
    return axios
      .delete(server + path, { headers })
      .catch(err => console.log('Axios delete: ', path, err))
  }
}

export { api }

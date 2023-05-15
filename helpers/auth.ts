import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export const createUserWithEmail = async(email: string, password: string) => {
    
        try {
          const response = await auth().createUserWithEmailAndPassword(
            email,
            password
          )
          console.log("usuario criado");
        } catch (error) {
          console.log(error);
          switch (error.code) {
            case 'auth/email-already-in-use':
              console.log("Email digitado ja está em uso")
              break;
            case 'auth/invalid-email':
              console.log("Email inválido");
              break;
            case 'auth/weak-password':
              console.log("Senha fraca.")
            default:
              console.log("Ocorreu um erro na rede")
          }
        }
}
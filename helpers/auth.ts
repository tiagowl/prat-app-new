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

export const signinWithFacebook = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email'
      ])

      if (result.isCancelled) {
        throw 'User cancelled the login process'
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken()

      if (!data) {
        throw 'Something went wrong obtaining access token'
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      )

      // Sign-in the user with the credential
      const response = await auth().signInWithCredential(facebookCredential)
      resolve(response)
    } catch (error) {
      console.log(error)
      reject("erro ao criar conta com facebook")
    }
  })
}

export const signinWithGoogle = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the users ID token
      GoogleSignin.configure()
      await GoogleSignin.signIn()
      const { idToken, accessToken } = await GoogleSignin.getTokens()

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      )

      // Sign-in the user with the credential
      const response = await auth().signInWithCredential(googleCredential)
      resolve(response)
    } catch (error) {
      console.log(error)
      reject("Erro ao criar conta com google")
    }
  })
}


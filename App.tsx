import { useFonts } from 'expo-font';
import loadCustomFont from './config/fonts';
import Routes from './config/routes';
import { NativeBaseProvider } from 'native-base';
import theme from './config/theme';

export default function App() {

  const [fontsLoaded] = useFonts(loadCustomFont());

  return (
    <NativeBaseProvider theme={theme} >
      <Routes/>
    </NativeBaseProvider>
  );
}


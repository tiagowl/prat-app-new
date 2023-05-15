import { useFonts } from 'expo-font';
import loadCustomFont from './config/fonts';
import Routes from './config/routes';

export default function App() {

  const [fontsLoaded] = useFonts(loadCustomFont());

  return (
    <Routes/>
  );
}


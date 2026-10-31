import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Ruta con extensión obligatoria: `Home.ts` (lógica) ensombrece a `Home.tsx` (vista).
import Home from './src/views/Home/Home.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Home />
    </SafeAreaProvider>
  );
}

export default App;

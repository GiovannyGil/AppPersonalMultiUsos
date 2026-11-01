import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../context/theme';
// Extensión obligatoria: `Home.ts` (lógica) ensombrece a `Home.tsx` (vista).
import Home from '../../views/Home/Home.tsx';
import Events from '../../views/Events/Events';
import Finances from '../../views/Finances/Finances';
import University from '../../views/University/University';
import Workouts from '../../views/Workouts/Workouts';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Finances" component={Finances} />
        <Stack.Screen name="University" component={University} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

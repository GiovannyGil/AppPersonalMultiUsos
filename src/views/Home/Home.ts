import { useCallback, useMemo, useRef, useState } from 'react';
import { Alert, Animated } from 'react-native';
import { MODULES, type Module } from '../../context/modules';

const greetingFor = (hour: number): string => {
  if (hour < 12) return 'Buenos días';
  if (hour < 20) return 'Buenas tardes';
  return 'Buenas noches';
};

const formatToday = (): string => {
  const today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  return today.charAt(0).toUpperCase() + today.slice(1);
};

export type HomeLogic = {
  greeting: string;
  today: string;
  summary: string;
  modules: readonly Module[];
  openModule: (module: Module) => void;
};

/**
 * Lógica de la pantalla de inicio. La vista solo consume este resultado, así que
 * migrar `openModule` a navegación real no toca `Home.tsx` ni `style.ts`.
 */
export function useHome(): HomeLogic {
  const greeting = useMemo(() => greetingFor(new Date().getHours()), []);
  const today = useMemo(formatToday, []);

  const openModule = useCallback((module: Module) => {
    Alert.alert(module.title, 'Este módulo estará disponible próximamente.');
  }, []);

  return {
    greeting,
    today,
    summary: `${MODULES.length} módulos para ordenar tu día`,
    modules: MODULES,
    openModule,
  };
}

/** Feedback táctil reutilizable: encoge la tarjeta y la marca como presionada. */
export function usePressFeedback() {
  const [pressed, setPressed] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue: number) =>
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
      speed: 32,
      bounciness: 5,
    }).start();

  return {
    pressed,
    scale,
    onPressIn: () => {
      setPressed(true);
      animateTo(0.96);
    },
    onPressOut: () => {
      setPressed(false);
      animateTo(1);
    },
  };
}

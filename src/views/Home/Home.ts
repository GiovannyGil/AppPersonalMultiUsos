import { useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';
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
};

/**
 * Lógica de la pantalla de inicio. La vista solo consume este resultado; la
 * navegación la resuelve el componente con su prop `navigation`.
 */
export function useHome(): HomeLogic {
  const greeting = useMemo(() => greetingFor(new Date().getHours()), []);
  const today = useMemo(formatToday, []);

  return {
    greeting,
    today,
    summary: `${MODULES.length} módulos para ordenar tu día`,
    modules: MODULES,
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

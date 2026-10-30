/**
 * Tokens globales de diseño: única fuente de verdad para color, espacio y tipografía.
 * Regla: ningún componente define hex, radios ni sombras por su cuenta.
 */

export const colors = {
  background: '#04120A',
  backgroundGradient:
    'linear-gradient(168deg, #08260F 0%, #04120A 46%, #020A05 100%)',
  glass: 'linear-gradient(150deg, rgba(255, 255, 255, 0.19), rgba(255, 255, 255, 0.04) 62%)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  text: '#F3FFF7',
  textMuted: 'rgba(243, 255, 247, 0.62)',
  primary: '#05D12E',
  lime: '#42D105',
  turquoise: '#05D194',
} as const;

export const space = { xs: 6, sm: 10, md: 16, lg: 24, xl: 36 } as const;

export const radius = { sm: 14, md: 24, pill: 999 } as const;

export const typography = {
  title: { fontSize: 32, fontWeight: '700', letterSpacing: -0.6 },
  body: { fontSize: 14, lineHeight: 20 },
  cardTitle: { fontSize: 17, fontWeight: '600', letterSpacing: -0.2 },
  meta: { fontSize: 12, lineHeight: 16 },
} as const;

/** Sombra base de las tarjetas de vidrio: profundidad + brillo de borde superior. */
export const glassShadow = {
  card: '0 18px 34px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.24)',
} as const;

/** Convierte un hex `#RRGGBB` en `rgba(...)` con el alfa indicado. */
export const alpha = (hex: string, opacity: number): string => {
  const [r, g, b] = [1, 3, 5].map(index =>
    parseInt(hex.slice(index, index + 2), 16),
  );
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

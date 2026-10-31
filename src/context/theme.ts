/**
 * Tokens globales de diseño: única fuente de verdad para color, espacio y tipografía.
 * Paleta de dos colores: blanco `#FFFFFF` dominante y verde `#0CC61B` como acento.
 * Regla: ningún componente define hex, radios ni sombras por su cuenta.
 */

/** Convierte un hex `#RRGGBB` en `rgba(...)` con el alfa indicado. */
export const alpha = (hex: string, opacity: number): string => {
  const [r, g, b] = [1, 3, 5].map(index =>
    parseInt(hex.slice(index, index + 2), 16),
  );
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const colors = {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  /** Luz arriba-izquierda y caída abajo-derecha: da volumen sin salir del blanco. */
  cardSurface: 'linear-gradient(145deg, #FFFFFF 0%, #F2F6F2 100%)',
  text: '#0B100C',
  textMuted: 'rgba(11, 16, 12, 0.55)',
  green: '#0CC61B',
  /** Bordes y tintes derivados del verde. */
  border: 'rgba(12, 198, 27, 0.2)',
  /** Filo casi invisible de la tarjeta: el volumen lo hace la luz, no el contorno. */
  cardBorder: 'rgba(12, 198, 27, 0.12)',
  borderStrong: 'rgba(12, 198, 27, 0.55)',
  divider:
    'linear-gradient(90deg, rgba(12, 198, 27, 0.55), rgba(12, 198, 27, 0))',
  /** Fondo de los chips de icono. */
  badge: 'rgba(12, 198, 27, 0.1)',
} as const;

export const space = { xs: 6, sm: 10, md: 16, lg: 24, xl: 36 } as const;

export const radius = { sm: 14, md: 26, pill: 999 } as const;

export const typography = {
  display: { fontSize: 34, fontWeight: '700', letterSpacing: -1 },
  body: { fontSize: 14, lineHeight: 20 },
  cardTitle: { fontSize: 18, fontWeight: '600', letterSpacing: -0.3 },
  meta: { fontSize: 12, lineHeight: 16 },
} as const;

/**
 * Elevación neumórfica: la tarjeta recibe luz por arriba-izquierda y proyecta su
 * sombra hacia abajo-derecha. El verde solo tiñe la proyección, nunca el relieve.
 */
export const shadows = {
  card: [
    '-6px -6px 16px rgba(255, 255, 255, 0.9)',
    `8px 10px 24px ${alpha(colors.green, 0.16)}`,
    '2px 4px 10px rgba(11, 16, 12, 0.08)',
  ].join(', '),
  /** Al presionar, la tarjeta se hunde: sombras inset y proyección más corta. */
  cardPressed: [
    `inset 5px 5px 12px ${alpha(colors.green, 0.14)}`,
    'inset -5px -5px 12px rgba(255, 255, 255, 1)',
    `0 4px 10px ${alpha(colors.green, 0.1)}`,
  ].join(', '),
  dot: `0 0 8px ${alpha(colors.green, 0.7)}`,
} as const;

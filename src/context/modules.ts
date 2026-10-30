import { colors } from './theme';

export type ModuleId = 'workouts' | 'events' | 'finances' | 'university';

export type Module = {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
  /** Color de acento de la tarjeta; sale de la paleta análoga. */
  accent: string;
};

/**
 * Registro de módulos. Es la única lista que la UI recorre, así que añadir un
 * módulo nuevo es agregar una entrada aquí (y su carpeta en `src/features`).
 */
export const MODULES: readonly Module[] = [
  {
    id: 'workouts',
    title: 'Rutinas',
    description: 'Entrenamientos y progreso',
    icon: '🏋️',
    accent: colors.primary,
  },
  {
    id: 'events',
    title: 'Eventos',
    description: 'Calendario y recordatorios',
    icon: '🗓️',
    accent: colors.lime,
  },
  {
    id: 'finances',
    title: 'Finanzas',
    description: 'Ingresos, gastos y metas',
    icon: '💰',
    accent: colors.turquoise,
  },
  {
    id: 'university',
    title: 'Universidad',
    description: 'Clases, tareas y entregas',
    icon: '🎓',
    accent: colors.primary,
  },
];

export type ModuleId = 'workouts' | 'events' | 'finances' | 'university';

export type Module = {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
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
  },
  {
    id: 'events',
    title: 'Eventos',
    description: 'Agenda y recordatorios',
    icon: '🗓️',
  },
  {
    id: 'finances',
    title: 'Finanzas',
    description: 'Ingresos y gastos',
    icon: '💰',
  },
  {
    id: 'university',
    title: 'Universidad',
    description: 'Clases y entregas',
    icon: '🎓',
  },
];

export type ModuleId = 'workouts' | 'events' | 'finances' | 'university';

export type ModuleRoute = 'Workouts' | 'Events' | 'Finances' | 'University';

export type Module = {
  id: ModuleId;
  /** Nombre de la pantalla en el stack de navegación. */
  route: ModuleRoute;
  title: string;
  description: string;
  icon: string;
};

/**
 * Registro de módulos. Es la única lista que la UI recorre, así que añadir un
 * módulo nuevo es agregar una entrada aquí (más su pantalla y su ruta).
 */
export const MODULES: readonly Module[] = [
  {
    id: 'workouts',
    route: 'Workouts',
    title: 'Rutinas',
    description: 'Entrenamientos y progreso',
    icon: '🏋️',
  },
  {
    id: 'events',
    route: 'Events',
    title: 'Eventos',
    description: 'Agenda y recordatorios',
    icon: '🗓️',
  },
  {
    id: 'finances',
    route: 'Finances',
    title: 'Finanzas',
    description: 'Ingresos y gastos',
    icon: '💰',
  },
  {
    id: 'university',
    route: 'University',
    title: 'Universidad',
    description: 'Clases y entregas',
    icon: '🎓',
  },
];

/** Acceso directo por id, para las pantallas de módulo. */
export const MODULES_BY_ID = Object.fromEntries(
  MODULES.map(module => [module.id, module]),
) as Record<ModuleId, Module>;

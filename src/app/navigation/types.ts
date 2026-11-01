import type { ModuleRoute } from '../../context/modules';

/**
 * Una sola entrada por pantalla del stack. Los módulos se declaran desde su
 * propio registro para que agregar uno no obligue a editar esta lista.
 */
export type RootStackParamList = {
  Home: undefined;
} & Record<ModuleRoute, undefined>;

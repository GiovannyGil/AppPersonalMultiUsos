/* eslint-env jest */
// Sin este mock el provider nativo no renderiza hijos en Jest (el árbol queda vacío).
jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default,
);

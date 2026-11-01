module.exports = {
  preset: '@react-native/jest-preset',
  // React Navigation y sus módulos nativos publican ESM: hay que transformarlos.
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-screens|react-native-safe-area-context|react-native-is-edge-to-edge)/)',
  ],
};

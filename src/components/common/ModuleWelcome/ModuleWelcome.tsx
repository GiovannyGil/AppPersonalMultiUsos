import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../../app/navigation/types';
import { MODULES_BY_ID, type ModuleId } from '../../../context/modules';
import { space } from '../../../context/theme';
import { styles } from './style';

type ModuleWelcomeProps = {
  moduleId: ModuleId;
};

/**
 * Bienvenida compartida por los cuatro módulos. Cada pantalla solo declara su
 * `moduleId`; cuando un módulo tenga contenido propio, reemplaza este componente.
 */
export default function ModuleWelcome({ moduleId }: ModuleWelcomeProps) {
  const module = MODULES_BY_ID[moduleId];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  const goBack = () =>
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');

  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + space.md,
            paddingBottom: insets.bottom + space.lg,
          },
        ]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Volver al inicio"
          hitSlop={12}
          onPress={goBack}
          style={({ pressed }) => [styles.back, pressed && styles.backPressed]}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <View style={styles.body}>
          <View style={styles.iconBadge}>
            <Text style={styles.icon}>{module.icon}</Text>
          </View>

          <Text style={styles.title}>Bienvenido a {module.title}</Text>
          <Text style={styles.subtitle}>{module.description}</Text>

          <View style={styles.hint}>
            <View style={styles.hintDot} />
            <Text style={styles.hintText}>Módulo en preparación</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

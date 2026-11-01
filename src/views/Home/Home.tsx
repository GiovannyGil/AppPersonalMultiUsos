import { Animated, Pressable, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../app/navigation/types';
import type { Module } from '../../context/modules';
import { space } from '../../context/theme';
import { useHome, usePressFeedback } from './Home';
import { styles } from './style';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ModuleCardProps = {
  module: Module;
  onPress: () => void;
};

function ModuleCard({ module, onPress }: ModuleCardProps) {
  const { pressed, scale, onPressIn, onPressOut } = usePressFeedback();

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityLabel={`${module.title}. ${module.description}`}
      accessibilityHint="Abre el módulo"
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.card,
        pressed && styles.cardPressed,
        { transform: [{ scale }] },
      ]}>
      <View style={styles.cardTop}>
        <View style={styles.iconBadge}>
          <Text style={styles.icon}>{module.icon}</Text>
        </View>
        <View style={styles.dot} />
      </View>

      <View>
        <Text style={styles.cardTitle}>{module.title}</Text>
        <Text style={styles.cardMeta} numberOfLines={2}>
          {module.description}
        </Text>
      </View>
    </AnimatedPressable>
  );
}

function Home({ navigation }: HomeProps) {
  const { greeting, today, summary, modules } = useHome();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + space.xl,
            paddingBottom: insets.bottom + space.md,
          },
        ]}>
        <View style={styles.header}>
          <Text style={styles.title}>{greeting}</Text>
          <Text style={styles.date}>{today}</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.grid}>
          {modules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onPress={() => navigation.navigate(module.route)}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <View style={styles.footerDot} />
          <Text style={styles.footerText}>{summary}</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;

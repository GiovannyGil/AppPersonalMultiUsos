import { Animated, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Module } from '../../context/modules';
import { alpha, space } from '../../context/theme';
import { useHome, usePressFeedback } from './Home';
import { styles } from './style';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ModuleCardProps = {
  module: Module;
  onPress: () => void;
};

function ModuleCard({ module, onPress }: ModuleCardProps) {
  const { scale, onPressIn, onPressOut } = usePressFeedback();

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
        {
          borderColor: alpha(module.accent, 0.38),
          boxShadow: `0 18px 34px ${alpha(
            module.accent,
            0.16,
          )}, 0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.24)`,
          transform: [{ scale }],
        },
      ]}>
      <View
        style={[
          styles.iconBadge,
          {
            backgroundColor: alpha(module.accent, 0.18),
            borderColor: alpha(module.accent, 0.5),
          },
        ]}>
        <Text style={styles.icon}>{module.icon}</Text>
      </View>
      <View>
        <Text style={styles.cardTitle}>{module.title}</Text>
        <Text style={styles.cardMeta} numberOfLines={1}>
          {module.description}
        </Text>
      </View>
    </AnimatedPressable>
  );
}

function Home() {
  const { greeting, today, modules, openModule } = useHome();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.glow, styles.glowTop]} />
      <View style={[styles.glow, styles.glowBottom]} />

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

        <View style={styles.grid}>
          {modules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onPress={() => openModule(module)}
            />
          ))}
        </View>

        <Text style={styles.footer}>Todo lo que organizás, en un solo lugar</Text>
      </View>
    </View>
  );
}

export default Home;

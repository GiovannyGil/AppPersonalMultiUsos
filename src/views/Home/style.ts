import { StyleSheet } from 'react-native';
import {
  colors,
  glassShadow,
  radius,
  space,
  typography,
} from '../../context/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    backgroundImage: colors.backgroundGradient,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    borderRadius: radius.pill,
    filter: [{ blur: 80 }],
    opacity: 0.42,
  },
  glowTop: {
    width: 340,
    height: 340,
    top: -150,
    right: -130,
    backgroundColor: colors.primary,
  },
  glowBottom: {
    width: 300,
    height: 300,
    bottom: -140,
    left: -110,
    backgroundColor: colors.turquoise,
  },
  content: {
    flex: 1,
    paddingHorizontal: space.lg,
  },
  header: {
    gap: space.xs,
  },
  title: {
    ...typography.title,
    color: colors.text,
  },
  date: {
    ...typography.body,
    color: colors.textMuted,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
    rowGap: space.md,
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    padding: space.md,
    borderRadius: radius.md,
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundImage: colors.glass,
    boxShadow: glassShadow.card,
  },
  iconBadge: {
    width: 46,
    height: 46,
    borderRadius: radius.pill,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
  cardTitle: {
    ...typography.cardTitle,
    color: colors.text,
  },
  cardMeta: {
    ...typography.meta,
    color: colors.textMuted,
    marginTop: 2,
  },
  footer: {
    ...typography.meta,
    color: colors.textMuted,
    textAlign: 'center',
    paddingVertical: space.md,
  },
});

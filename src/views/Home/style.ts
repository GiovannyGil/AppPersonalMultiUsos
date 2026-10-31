import { StyleSheet } from 'react-native';
import {
  colors,
  radius,
  shadows,
  space,
  typography,
} from '../../context/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    paddingHorizontal: space.lg,
  },
  header: {
    gap: space.xs,
  },
  title: {
    ...typography.display,
    color: colors.text,
  },
  date: {
    ...typography.body,
    color: colors.textMuted,
  },
  divider: {
    height: 1,
    marginTop: space.md,
    backgroundImage: colors.divider,
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
    borderColor: colors.cardBorder,
    backgroundColor: colors.surface,
    backgroundImage: colors.cardSurface,
    justifyContent: 'space-between',
    boxShadow: shadows.card,
  },
  cardPressed: {
    borderColor: colors.borderStrong,
    boxShadow: shadows.cardPressed,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.badge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 21,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.green,
    boxShadow: shadows.dot,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
    paddingVertical: space.md,
  },
  footerDot: {
    width: 6,
    height: 6,
    borderRadius: radius.pill,
    backgroundColor: colors.green,
  },
  footerText: {
    ...typography.meta,
    color: colors.textMuted,
  },
});

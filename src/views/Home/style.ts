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
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
    boxShadow: shadows.card,
  },
  cardPressed: {
    borderColor: colors.borderStrong,
    boxShadow: shadows.cardPressed,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.badge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
  cardTitle: {
    ...typography.cardTitle,
    textAlign: 'center',
    color: colors.text,
  },
  cardMeta: {
    ...typography.meta,
    textAlign: 'center',
    color: colors.textMuted,
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

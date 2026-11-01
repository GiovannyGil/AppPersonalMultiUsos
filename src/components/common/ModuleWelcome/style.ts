import { StyleSheet } from 'react-native';
import {
  colors,
  radius,
  shadows,
  space,
  typography,
} from '../../../context/theme';

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
  back: {
    width: 46,
    height: 46,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surface,
    backgroundImage: colors.cardSurface,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadows.card,
  },
  backPressed: {
    borderColor: colors.borderStrong,
    boxShadow: shadows.cardPressed,
  },
  backIcon: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.text,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.md,
    paddingBottom: space.xl,
  },
  iconBadge: {
    width: 96,
    height: 96,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surface,
    backgroundImage: colors.cardSurface,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadows.card,
    marginBottom: space.sm,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    ...typography.display,
    fontSize: 30,
    textAlign: 'center',
    color: colors.text,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    color: colors.textMuted,
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    marginTop: space.sm,
    paddingHorizontal: space.md,
    paddingVertical: space.xs,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    backgroundColor: colors.badge,
  },
  hintDot: {
    width: 6,
    height: 6,
    borderRadius: radius.pill,
    backgroundColor: colors.green,
  },
  hintText: {
    ...typography.meta,
    color: colors.text,
  },
});

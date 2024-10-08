import { DefaultTheme } from 'styled-components';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const theme: DefaultTheme = {
  colors: {
    primary: '#97ce4c', // Portal Green
    background: '#0b0c10', // Space Black
    card: '#1f2833', // Dark Gray
    accent: '#45a29e', // Bright Teal
    text: '#c5c6c7', // Light Gray
    highlight: '#9a31e1', // Purple
    error: '#ff4c4c', // Red for error messages
  },
  fonts: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
  },
};

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: theme.colors.background,
    primary: theme.colors.primary,
    card: theme.colors.card,
    text: theme.colors.text,
    border: theme.colors.accent,
    notification: theme.colors.primary,
  },
};

import { defaultTheme } from './default_theme';
import { adaTheme } from './ada_theme';

// Coresponds to Redux Store value for state.userEdit.selectedUser.ui_theme
export const THEMES = {
  DEFAULT: 'theme_default',
  ADA: 'theme_ada',
};

export const themeMap = {
  [THEMES.DEFAULT]: defaultTheme,
  [THEMES.ADA]: adaTheme,
};

const theme = defaultTheme;
export default theme;

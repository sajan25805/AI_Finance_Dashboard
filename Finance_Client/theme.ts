/**
 * This configuration file defines color tokens and Material-UI theme settings.
 * It allows for consistent theming and styling in a React application.
 *
 * To generate shades of colors, we have used a VS Code extension called "tailwind shades."
 */

// Color tokens for various shades of colors
export const colorTokens = {
  grey: {
    // Shades of grey
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // Light green shades
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#12efc8",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // Yellow shades
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // Single purple shade
    500: "#8884d8",
  },
  background: {
    // Background colors
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// Material-UI theme settings
export const themeSettings = {
  palette: {
    primary: {
      // Main and light shades of primary color
      ...colorTokens.primary,
      main: colorTokens.primary[500],
      light: colorTokens.primary[400],
    },
    secondary: {
      // Main shade of secondary color
      ...colorTokens.secondary,
      main: colorTokens.secondary[500],
    },
    tertiary: {
      // Single shade of tertiary color
      ...colorTokens.tertiary,
    },
    grey: {
      // Main shade of grey
      ...colorTokens.grey,
      main: colorTokens.grey[500],
    },
    background: {
      // Default and light background colors
      default: colorTokens.background.main,
      light: colorTokens.background.light,
    },
  },
  typography: {
    // Typography settings
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      // Header 1 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      // Header 2 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      // Header 3 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: colorTokens.grey[200],
    },
    h4: {
      // Header 4 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: colorTokens.grey[300],
    },
    h5: {
      // Header 5 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: colorTokens.grey[500],
    },
    h6: {
      // Header 6 styles
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: colorTokens.grey[700],
    },
  },
};

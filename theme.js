// theme.js

// Define dark and light theme color palettes
const darkTheme = {
  primary: {
    400: '#333', // Example color
  },
  secondary: {
    300: '#666', // Example color
  },
};

const lightTheme = {
  primary: {
    400: '#ddd', // Example color
  },
  secondary: {
    300: '#ccc', // Example color
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              ...darkTheme.primary,
              main: darkTheme.primary[400],
              light: darkTheme.primary[400],
            },
            secondary: {
              ...darkTheme.secondary,
              main: darkTheme.secondary[300],
            },
            background: {
              default: darkTheme.primary[600],
              alt: darkTheme.primary[500],
              gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            },
          }
        : {
            primary: {
              ...lightTheme.primary,
              main: lightTheme.primary[400],
              light: lightTheme.primary[400],
            },
            secondary: {
              ...lightTheme.secondary,
              main: lightTheme.secondary[300],
            },
            background: {
              default: lightTheme.primary[100],
              alt: lightTheme.primary[200],
              gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

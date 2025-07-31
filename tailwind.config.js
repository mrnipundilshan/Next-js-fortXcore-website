export const theme = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,html}', // Adjust paths to match your project
      ],
    extend: {
        colors: {
            'primary-color': '#2E2166',
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },

        keyframes: {
            scroll: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(100%)' },
            },
        },
        animation: {
            scroll: 'scroll 30s linear infinite',
        },
        
    },
};
export const plugins = [];

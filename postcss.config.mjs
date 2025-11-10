const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        content: [
          './app/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
          extend: {
            fontFamily: {
              'thicccboi': ['var(--font-thicccboi)', 'sans-serif'],
              'inter': ['var(--font-inter)', 'sans-serif'],
            },
          },
        },
      },
    },
  },
};

export default config;

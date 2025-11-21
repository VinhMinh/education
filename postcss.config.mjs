import aspectRatio from '@tailwindcss/aspect-ratio';

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        content: [
          './app/**/*.{js,ts,jsx,tsx,mdx,css}',
          './components/**/*.{js,ts,jsx,tsx,mdx,css}',
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
        plugins: [
          aspectRatio,
        ]
      },
    },
  },
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Space_Grotesk': ['Space Grotesk', 'sans-serif'],
        'IBM_Plex_Mono': ['IBM Plex Mono', 'monospace'],
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#3fbfc7',
        background: '#ffffff',
        foreground: '#0f1113',
        card: '#f8f9fa',
        muted: '#e5e7eb',
        border: '#e5e7eb',
      },
    },
  },
  plugins: [],
}

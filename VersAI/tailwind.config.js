/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Professional Green/Black/White Palette
                slate: {
                    950: '#000000',
                    900: '#0a0a0a',
                    800: '#1a1a1a',
                    700: '#2a2a2a',
                    400: '#94a3b8',
                    300: '#cbd5e1',
                },
                primary: '#10b981', // Emerald Green
                secondary: '#34d399', // Light Green - for highlights
                accent: '#ffffff', // White
                highlight: '#6ee7b7', // Very Light Green - for text highlights
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #000000, #0a0a0a)',
                'gradient-glow': 'linear-gradient(135deg, #10b981, #34d399)',
                'gradient-accent': 'linear-gradient(135deg, #34d399, #6ee7b7)',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
                    '100%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}

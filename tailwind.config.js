const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                _white: {
                    100: '#F9F9F9',
                    200: '#EBE9EA',
                },
            },
        },
    },
    plugins: [],
}

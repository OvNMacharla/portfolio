module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-thin': {
            'scrollbar-width': 'thin',
            '&::-webkit-scrollbar': {
              width: '5px',
              height: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888', // The visible part
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555', // Hover state
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent', // No track background
            },
          },
        },
        ['responsive'],
      )
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
      },
      colors: {
        primary: '#f5f0f1',
        secondary: '#ffed4a',
        background: '#000000',
        'content-background': '#0d1117',
        'nav-background': '#161b22',
        'border-background': '#161b22',
        'border-color': '#535e71',
        'cap-text': '#8d96a0',
        button: '#0a66c2',
      },
    },
  },
}

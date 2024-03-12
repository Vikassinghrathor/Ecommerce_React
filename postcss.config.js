// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {}, // Add this line
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    autoprefixer: {},
  },
};

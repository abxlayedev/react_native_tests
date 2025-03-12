module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/(?!react-redux|redux)/',  // Ajoute ici react-redux si nécessaire
  ],
};

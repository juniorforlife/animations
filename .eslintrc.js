module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'rules': {
    // we only want single quotes
    'quotes': ['error', 'single'],
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    "comma-dangle": ["error", "never"],
  },
  //  settings: {
  //   'import/resolver': {
  //     'node': {
  //       'extensions': ['.js','.jsx','.ts','.tsx']
  //     }
  //   }
  // }
};

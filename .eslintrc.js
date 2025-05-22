module.exports = {
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'prettier',
   ],
   rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': [
         'error',
         {
            types: {
               Function: false,
            },
            extendDefaults: true,
         },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
   },
};

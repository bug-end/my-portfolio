/**
 * @see https://prettier.io/docs/en/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  endOfLine: 'lf',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    // React and Next.js core packages
    '^react',
    '^next',

    // Third-party external libraries
    '^[a-zA-Z]',

    // Internal aliases – utilities, helpers, and reusable logic
    '^@/lib',
    '^@/utils',
    '^@/hooks',

    // Internal aliases – UI components and layout building blocks
    '^@/providers',
    '@/blocks',
    '^@/components',

    // Application-level and global imports
    '^@/app',
    '^@/assets',
    '^@/styles',

    // Relative imports – same folder
    '^\\./',

    // Relative imports – parent folders
    '^\\.\\./',
  ],
};

export default config;

const buildEslintCommand = (filenames) => `next lint --fix --file ${filenames.join(' --file ')}`;

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default lintStagedConfig;

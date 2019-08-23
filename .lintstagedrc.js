module.exports = {
  // 在 git 待提交的过滤后的文件执行代码检查，格式化操作。
  linters: {
    // 在 git 待提交的过滤后的文件执行代码检查，格式化操作。
    // 'src/**/*.{js,jsx,ts,tsx}': [
    //   'prettier --write',
    //   'git add',
    //   'eslint',
    // ],
    'src/**/*.{scss,css,js,jsx,ts,tsx}': [
      'prettier  --write',
      'git add',
      'stylelint',
    ],
  },
};

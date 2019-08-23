module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'react', 'jsx-a11y', 'prettier'], //添加第三方规则以对Eslint规则进行补充。
  rules: {
    //来自eslint-plugin-jsx-ally插件的规则
    'jsx-a11y/anchor-is-valid': [
      //检查 html 中的 link 标签是有效，如果没有 Href,或者 Href 不合法，或者有点击事件，都认为是无效的。
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    //来自eslint-plugin-react插件的规则
    'react/jsx-filename-extension': 'off', //关闭对含有 jsx 的文件的后缀名的校验。
    'react/forbid-prop-types': 'off', //允许所有的PropTypes类型。
    'react/no-multi-comp': 'off', //允许一个 js 文件中含有多个 Component
    'react/destructuring-assignment': 'error', //需要使用变量解构方式对变量进行赋值

    //来自eslint-plugin-import插件的规则
    'import/no-extraneous-dependencies': 'off', //允许引入package.json中未声名的模块

    //来自Eslint本身的规则
    'operator-assignment': 'off', //既可以支持速记运算符（b+=4），也可以支持常规写法(b=b+4)
    curly: ['error', 'all'], //条件语句必须带花括号
    'no-mixed-operators': 'error', //禁止运算符读起来有歧义的写法
    'no-tabs': 'error', //文件中不许有制表符的存在
    quotes: [
      //单引号中不能有模板，且单引号中只能有字符串
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    //来自eslint-plugin-prettier
    'prettier/prettier': 'error', //不符合prettier风格的报错
  },
};

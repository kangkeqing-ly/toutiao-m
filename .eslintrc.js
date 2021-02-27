/*
 * @Author: your name
 * @Date: 2021-02-27 19:35:32
 * @LastEditTime: 2021-02-27 20:26:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-m\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}

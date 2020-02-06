// 如果vue.config.js中设置了devServer的代理地址这里开发环境时候就设置空字符串就可以，
// 否则在这里设置好代理url
export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production_address.com'
  : ''

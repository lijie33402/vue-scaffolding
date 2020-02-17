import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'

export const getTableData = (options) => {
  const template = {
    name: '@name',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

import Mock from 'mockjs'
import { getUserInfo } from './response/user'

const Random = Mock.Random

Mock.mock('/getUserInfo', getUserInfo)

Mock.setup({
  timeout: 500
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'banana', 'berry']
    return this.pick(fruit)
  }
})
export default Mock

import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'lijie',
    'name|5': 'lijie',
    'bool1|1': true,
    'bool2|1-9': true,
    'obj|2': {
      a: 'a',
      b: 'b',
      c: 'c'
    },
    'reg': /[1-9][a-z]/,
    'email': Mock.mock('@email'),
    'img': Random.dataImage(),
    'fruit': '@fruit'
  }
  return Mock.mock(template)
}
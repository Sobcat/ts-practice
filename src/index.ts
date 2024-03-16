import { Dictionary } from './dictionary'

const dic = new Dictionary<string, number>()
dic.set('a', 2)
dic.set('b', 3)
dic.forEach((k, v) => {
  console.log(k, v)
})
console.log('数量', dic.size)
console.log(dic.has('a'))
console.log(dic.has('c'))
dic.delete('b')
dic.forEach((k, v) => {
  console.log(k, v)
})
console.log('数量', dic.size)

Map

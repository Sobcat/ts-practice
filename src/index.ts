// let name:string
// name = "333"
function add(a: number, b: number) {
  //自动推导返回值是number类型
  return a + b
}
// sum = 3
let num = add(3, 4) //自动推导赋值是number类型

let name = '123' //自动推导name是string类型
// name = 122

let age // 下三个点，表示隐式any类型，小心了

let phone = '13344445555' //手机号，身份证应该是字符串

function isOdd(n: number): boolean {
  return n % 2 === 0
}

// let nums: Array<number>
let nums: number[] //推荐使用，例如在react中Array<number>尖括号会造成冲突
// let nums = [1] //类型自动推导
// nums = ['a']
nums = [1]

let u: object
// u=1
u = {}

function printValues(obj: object) {
  const vals = Object.values(obj)
  vals.forEach(v => console.log(v))
}
printValues({
  name: 'dai',
  age: 30,
})

let n: string
// n = null
// n = undefined

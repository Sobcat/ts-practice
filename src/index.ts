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

// let nums:[] //不能这样写
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

//联合类型
let namee: string | undefined
//namee. //此时没有.语法提示了
// namee = '13'
// namee = undefined
if (typeof namee === 'string') {
  //经过判断之后，此时有.语法提示了
  //类型保护
  namee.indexOf('1')
}

//void类型
function printValues2(): void {
  console.log(1)
}

//never类型
function throwError(msg: string): never {
  throw new Error(msg)
}
function alwaysDoSometing(): never {
  while (true) {
    //...
  }
}

//字面量类型
let a: 'A' //表示a只能赋值'A'
let gender: '男' | '女'
let b: 1
let arr: [] //表示arr永远只能取值为一个空数组
let user: {
  name: string
  age: number
}
// user = {}

//元祖类型（Tuple）
let tu: [string, number]
// tu = [1,2]
tu = ['1', 1]

//any类型
let data: any = 'abc'
let nummm: number = data //所以一般不建议使用，有隐患

//类型别名
/* let ul: {
  name: string
  age: number
  gender: '男' | '女'
}
function getUsers(): { //这样太固定了，不够灵活，每次都要重复
  name: string
  age: number
  gender: '男' | '女'
}[] {
  return []
} */
type Gender = '男' | '女'
type User = {
  name: string
  age: number
  gender: Gender
}
let ul: User
ul = {
  name: 'dai',
  age: 30,
  gender: '男',
}
function getUsers(g: User): User[] {
  return [g]
}

//函数的相关约束
/**
 * 得到a*b的结果
 * @param a
 * @param b
 */
function combine(a: number, b: number): number
/**
 * 得到a+b的结果
 * @param a
 * @param b
 */
function combine(a: string, b: string): string
function combine(a: number | string, b: string | number): string | number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if (typeof a === 'string' && b === 'string') {
    return a + b
  }
  throw new Error('必须是相同的类型')
}
const result = combine(1, 1) //此时result是number|string，逻辑上，都传入number，返回值应该只是number才对，因此

// function sumhandle(a: number, b: number, c?: number) {
//   if (c) {
//     return a + b + c
//   } else {
//     return a + b
//   }
// }
// sumhandle(3, 4)
function sumhandle(a: number, b: number, c: number = 0) {
  //默认参数也是可选参数
  //可选参数在前面无意义，因此要放在末尾
  return a + b + c
}

// 拓展类型-枚举
//字面量类型的问题
//得把逻辑含义和真实值区分开来,不然
/* type Genderr = 'shuige' | 'meinv'
let genderr: Genderr
genderr = 'shuige'
genderr = 'meinv' */
// 枚举
enum Genderr {
  male = '男',
  female = '女',
}
let genderr: Genderr
genderr = Genderr.male
genderr = Genderr.female

enum Level {
  level1 = 1,
  level2,
  level3,
}
let level: Level = Level.level1
level = 3 //被数字枚举约束的变量，可以直接被赋值为数字, 有会导致有问题，一般不推荐这样做
console.log(level)

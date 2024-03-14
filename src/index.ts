import * as Obj from './myModule'

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
type Gender = '男' | '女' //字面量类型
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
//函数重载，可选参数
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
// sumhandle(3, 4)

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

//数字枚举的位运算（位枚举）
enum Permission {
  Read = 1, //0001
  Write = 2, //0010
  Create = 4, //0100
  Delete = 8, //1000
}
//1.如何组合权限
//这里的 | 不是联合类型的 |，而是运算符 或
//0001
// |
//0010
//=
//0011
let p: Permission = Permission.Read | Permission.Write //这里约束p，不然或运算后默认是number类型，而数字枚举是可以重新赋值新的数字的

//2.如何判断是否拥有某个权限
// & 且运算
function hasPermision(target: Permission, per: Permission) {
  return (target & per) === per
}
//判断变量p是否拥有可读权限
//0011
// &
//0010
//=
//0010
hasPermision(p, Permission.Read)

//3.如何删除某个权限
// ^ 异或
//0011
// ^
//0010
//=
//0001
p = p ^ Permission.Write

//拓展类型-接口
//约束对象/对象里面的函数
interface UserI {
  name: string
  age: number
  // seyHello: () => void
  seyHello(): void
}
let useri: UserI = {
  name: 'dai',
  age: 30,
  seyHello() {
    //hey
  },
}
//约束函数
//类型别名约束写法
// type Condition = (n: number) => boolean
// type Condition = { (n: number): boolean } //大括号没有成员名称，只表示定界符
//接口约束写法
/* interface Condition {
  (n: number): boolean
}
function sumQH(numbers: number[], callback: Condition) {
  let s = 0
  numbers.forEach(n => {
    if (callback(n)) {
      s += n
    }
  })
  return s
}
const resultQH = sumQH([1, 2, 3], n => n % 2 !== 0) */
// 接口的继承
interface A {
  T1: string
}
interface B {
  T2: number
}
interface C extends A, B {
  // T1: string //类型相同，可以覆盖父接口的成员
  // T1: number //类型不同，不可以覆盖
  T3: boolean
}
let c: C
c = {
  T1: 'd',
  T2: 1,
  T3: true,
}
//类型别名组合，通过 &, 交叉类型
type AA = {
  T1: string
}
type BB = {
  T2: number
}
type CC = {
  // T1: number //类型不同，不可以交叉，会变成never
  // T1: string //类型相同，可以交叉
  T3: boolean
} & AA &
  BB
let cc: CC
cc = {
  T1: '1',
  T2: 1,
  T3: true,
}
// readonly 只读修饰符
interface RUser {
  readonly id: string
  name: string
  age: number
  readonly arr: readonly string[]
}
let ruser: RUser
ruser = {
  id: '1',
  name: '1',
  age: 1,
  arr: ['1'],
}
// ruser.arr[0] = '2'
// ruser.id = '2'
let rarr: readonly number[] = [3, 4, 5] // 这里readonly只修饰数组里面的成员，要让rarr只读，可以把let改成const
// let rarr: ReadonlyArray<number> = [3,4,5]

//类型兼容性
//对象
//鸭子辨型法
interface Duck {
  sound?: '嘎嘎'
  swin(): void
}
let person = {
  name: '鸭子人',
  age: 1,
  sound: '嘎嘎' as '嘎嘎', //类型断言 as
  swin() {},
}
let duck: Duck = person //可以赋值, 松散判断
console.log('duck', duck.sound) //可以完整打印出来，
// duck.name //报错，不能使用；虽然person原本的属性有很多，但duck只能使用类型接口原本就定义好的属性，相关：下面不能使用对象字面量赋值，有点像代理，只代理相同属性的
//假设有个函数，用于得到服务器的某个接口的返回结果，是一个用户对象
interface ResponseUser {
  loginId: string
  nickName?: string
  gender: '男' | '女'
}
let rU = {
  loginId: '1',
  nickName: '2',
  gender: '男' as '男',
  l1: 1,
  l2: 2,
  l3: 1,
  l4: 1,
}
let resu: ResponseUser = rU //尽管ru的属性比接口的多，但是只要至少含有接口类型的属性，就可以将ru赋值给resu，此时类型检查不会报错
//下面直接使用对象字面量进行赋值时，会报错，此时会进行更严格的判断, 因为没有意义，赋值兼容是为开发中返回数据时，数据格式未经处理时使用的便利，当你使用字面量赋值时，说明你自己能确定数据的格式，那你照着接口类型写不就完事了
/* let resu: ResponseUser = {
  loginId: '1',
  nickName: '2',
  gender: '男' as '男',
  l1: 1,
  l2: 2,
  l3: 1,
  l4: 1,
} */
// 函数兼容性
//传入回调函数时，没有 i 不会报错
interface Condition {
  (n: number, i: number): boolean
}
function sumQH(numbers: number[], callback: Condition) {
  let s = 0
  numbers.forEach((n, i) => {
    if (callback(n, i)) {
      s += n
    }
  })
  return s
}
const resultQH = sumQH([1, 2, 3], n => n % 2 !== 0)

//模块化
// Name() //可快速修复使用，默认导出不行
Obj.Name()
//esModuleInterop
// import fs from 'fs' //module.exports={}
// fs.readPe()
// import { readPe } from 'fs'
// readPe()
// import * as fs from 'fs'
//如何在 TS 中书写 commonjs 的导入导出
// const mymodule = require('./myModule') //原始写法，但无法获取类型检查
//改成
// import myM from './myModule'
// import mymodule = require('./myModule')

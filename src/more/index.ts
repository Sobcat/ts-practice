// 类的继承

// 继承的作用
export class Tank {
  x: number = 0
  y: number = 0
  name: string = 'tank'
  shoot() {
    console.log(this.name)
  }
  constructor() {}
}
export class PlayerTank extends Tank {
  x: number = 20 //成员的重写
  // x: string = 20
  // name: string = 'player'
  // life: number = 0
  shoot() {
    console.log(this.name + '111')
  }
  constructor() {
    super()
  }
}
const pp = new PlayerTank()
// pp.name = 'dada'
// console.log(pp.shoot())

export class EnemyTank extends Tank {}

let p: Tank = new PlayerTank() //鸭子辨型法, 可以赋值
// p.life //报错，无法使用，因为
//p = new EnemyTank() //如果这时p重新赋值实例，这个p是没有life属性的，所以p.life会报错，因为P:Tank之后，子类里面没有父类的共同成员，会报错
// P:Tank 如果要用的话，可以用判断 instanceof 之后再用
// if(p instanceof PlayerTank) {}

// 抽象类
abstract class Chess {
  //抽象成员
  abstract readonly name: string
}
class Ma extends Chess {
  readonly name: string = '马'
}
class Bing extends Chess {
  name: string
  constructor() {
    super()
    this.name = '兵'
  }
}
class Pao extends Chess {
  get name() {
    return '炮'
  }
}

//静态成员
class User {
  static users: User[] = []
  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: string
  ) {
    User.users.push(this)
  }
  sayHello() {
    console.log('这里是' + this.name, '今年' + this.age + '岁')
  }
  static login(loginId: string, loginPwd: string): User | undefined {
    return this.users.find(
      u => u.loginId === loginId && u.loginPwd === loginPwd
    )
  }
}
// class U2 extends User {}
// const u = new U2('u3', '123', 'dai', '1')
// U2.login
// User.login //这样class User可以调用了
// u.login //实例不能调用了
const u1 = new User('u1', '123', 'dai', '1')
const u2 = new User('u2', '123', 'daidai', '2')
const result = User.login('u1', '123')
if (result) {
  // u1.sayHello()
}

// 设计模式-单例模式
class Board {
  w: number = 0
  h: number = 0
  private constructor() {}
  private static _board: Board
  init() {
    console.log('初始化棋盘')
  }
  static createBoard(): Board {
    if (this._board) {
      return this._board
    }
    this._board = new Board()
    return this._board
  }
}
const b1 = Board.createBoard()
const b2 = Board.createBoard()
// console.log(b1 === b2)

// 接口拓展

// 索引器
interface T {
  [fie: string]: string
}
const o: T = {
  name: '1',
  age: '1',
  id: '1',
}
class Syq {
  name: string = ''
  age: number = 0
}
const syq = new Syq()
// syq['id'] //新版不行了

// this 指向约束
//
const u = {
  name: 'dai',
  age: 11,
  sayHello() {
    console.log(this, this.name)
  },
}
// u.sayHello()
// const uu = u.sayHello
// uu()
//
class Useru {
  constructor(public name: string) {}
  sayHello(this: Useru) {
    console.log(this, this.name)
  }
}
const us = new Useru('dai')
// us.sayHello()
// const uu = us.sayHello
// uu()
//
interface IU {
  name: string
  age: number
  sayHello(this: IU): void
}
function sayHello(this: IU) {
  console.log(this, this.name)
}
const uuu: IU = {
  name: 'dai',
  age: 11,
  sayHello() {
    console.log(this, this.name)
  },
}
// const ux = uuu.sayHello
// ux()

// 装饰器
class DDecoretor {
  // @require
  loginId: string // 必须是3-5字符

  loginPwd: string // 必须是6-12字符
  age: number // 必须是0-100数字
  gender: '男' | '女'
  constructor() {}
}
const du = new DDecoretor()
// console.log(du.loginId)
// 对用户对象进行数据验证
/**
 * 统一的验证函数
 * @paarms obj
 */
function validate(obj: object) {}

// 类装饰器
function test(target: new (...args: any[]) => object) {
  console.log(target)
  // return class B extends target {} //不推荐
}
@test
// @test('test') //不行，这样不是个函数，而是函数调用，除非调用返回的是函数
class A {}
const a = new A()
// console.log(a) //a: B{}
// 多个装饰器运行情况：从下往上的顺序
type Constructor = new (...args: any[]) => object
function d1(params: Constructor) {
  console.log('d1')
}
function d2(params: Constructor) {
  console.log('d2')
}
@d1
@d2
class D {}
// 输出： d2 d1

// 成员装饰器
// 属性
function cy(target: any, key: string) {
  console.log(target, key)
}
class Cy {
  @cy
  prop1: string
  @cy
  prop2: string
}
// 方法
function fn(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(target, key, descriptor)
}
function uesless(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function () {
    console.log(key + '方法已弃用')
  }
}
class Fn {
  @fn
  @uesless
  fun1() {}
  @fn
  fun2() {}
}
//属性描述符，就是defineProperty那个
/* {
  value: [Function: fun2],
  writable: true,
  enumerable: false,
  configurable: true
} */
const f = new Fn()
f.fun1()

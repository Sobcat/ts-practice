// 类的继承

import { log } from 'console'

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
  name: string = 'player'
  // life: number = 0
  shoot() {
    console.log(this.name)
  }
  constructor() {
    super()
  }
}
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
User.login //这样class User可以调用了
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
console.log(b1 === b2)

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

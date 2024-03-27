// 类的继承
// 继承的作用
export class Tank {
  x: number = 0
  y: number = 0
  name: string = 'tank'
  shoot() {
    console.log(this.name)
  }
}
export class PlayerTank extends Tank {
  x: number = 20 //成员的重写
  // x: string = 20
  name: string = 'player'
  // life: number = 0
  shoot() {
    console.log(this.name)
  }
}
export class EnemyTank extends Tank {}

let p: Tank = new PlayerTank() //鸭子辨型法, 可以赋值
// p.life //报错，无法使用，因为
//p = new EnemyTank() //如果这时p重新赋值实例，这个p是没有life属性的，所以p.life会报错，因为P:Tank之后，子类里面没有父类的共同成员，会报错
// P:Tank 如果要用的话，可以用判断 instanceof 之后再用
// if(p instanceof PlayerTank) {}

// 抽象类
abstract class Chess {}

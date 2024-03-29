interface IFire {
  singleFire(): void
  doubleFire(): void
}

export abstract class Animal {
  abstract type: string
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`我是${this.type},我叫${this.name}`)
  }
}

class Lion extends Animal implements IFire {
  type: string = 'shizi'
  singleFire() {}
  doubleFire() {}
}
class Tiger extends Animal {
  type: string = 'laohu'
  singleFire() {}
  doubleFire() {}
}

const animals: Animal[] = [new Lion('sz', 2), new Tiger('lh', 2)]
animals.forEach(v => {
  if ((v as unknown as IFire).singleFire) {
    // v.singleFire()
  }
})
const l = new Lion('da', 0)

import { Mark, Color } from './enum'
import { Card, Joker } from './type'

interface PublishResult {
  player1: Deck
  player2: Deck
  player3: Deck
  left: Deck
}

export class Deck {
  private cards: Card[] = []
  constructor(cards?: Card[]) {
    // 传入卡牌或者创建卡牌
    if (cards) {
      this.cards = cards
    } else {
      this.init()
    }
  }
  /* 初始化卡牌 */
  private init() {
    const mark = Object.values(Mark)
    const color = Object.values(Color)
    for (const n of mark) {
      for (const m of color) {
        //1.重新赋值
        /* const card: NormalCard = {
          color: m,
          mark: n,
          getString() {
            return this.color + this.mark
          },
        }
        deck.push(card) */
        this.cards.push({
          color: m,
          mark: n,
          getString() {
            return this.color + this.mark
          },
        } as Card) //2.断言
      }
    }
    this.cards.push(<Joker>{
      type: 'small',
      getString() {
        return 'jo'
      },
    })
    this.cards.push({
      type: 'big',
      getString() {
        return 'Jo'
      },
    } as Joker)
  }
  // 打印
  print() {
    let result = '\n'
    this.cards.forEach((v, i) => {
      let str = v.getString()
      result += str + '\t'
      if ((i + 1) % 4 === 0) {
        result += '\n'
      }
    })
    console.log(result)
  }
  // 洗牌
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const targetIndex = this.getRandom(0, this.cards.length)
      const temp = this.cards[i]
      this.cards[i] = this.cards[targetIndex]
      this.cards[targetIndex] = temp
    }
  }
  // 发完牌后，得到的结果有4个card[]
  publish(): PublishResult {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck
    player1 = this.takeCards(17)
    player2 = this.takeCards(17)
    player3 = this.takeCards(17)
    left = new Deck(this.cards)
    return { player1, player2, player3, left }
  }
  private takeCards(n: number): Deck {
    const cards: Card[] = []
    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as Card)
    }
    return new Deck(cards)
  }
  /**
   * 无法取到最大值
   * @param min
   * @param max
   */
  private getRandom(min: number, max: number) {
    const dec = max - min
    return Math.floor(Math.random() * dec + min)
  }
}

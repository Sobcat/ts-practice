import { Mark, Color } from './enum'
import { Card, Deck, Joker, NormalCard } from './type'

export function createDeck(): Deck {
  const deck: Deck = []
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
      deck.push({
        color: m,
        mark: n,
        getString() {
          return this.color + this.mark
        },
      } as Card) //2.断言
    }
  }
  deck.push(<Joker>{
    type: 'small',
    getString() {
      return 'jo'
    },
  })
  deck.push({
    type: 'big',
    getString() {
      return 'Jo'
    },
  } as Joker)
  return deck
}

export function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((v, i) => {
    let str = v.getString()
    result += str + '\t'
    if ((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}

import { Mark, Color } from './enum'
import { Deck } from './type'

export function createDeck(): Deck {
  const deck: Deck = []
  const mark = Object.values(Mark)
  const color = Object.values(Color)
  for (const n of mark) {
    for (const m of color) {
      deck.push({
        color: m,
        mark: n,
      })
    }
  }
  return deck
}

export function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((v, i) => {
    let str = v.color + v.mark
    result += str + '\t'
    if ((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}

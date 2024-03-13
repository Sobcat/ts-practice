enum Color {
  heart = '♥️',
  spade = '♠',
  club = '♣️',
  diamond = '♦',
}
enum Mark {
  A = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  twelve = 'Q',
  king = 'k',
}
type NormalCard = {
  color: Color
  mark: Mark
}
type Deck = NormalCard[]

function createDeck(): Deck {
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

function printDeck(deck: Deck) {
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

const deck = createDeck()
printDeck(deck)

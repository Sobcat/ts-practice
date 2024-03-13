type Color = '♥️' | '♠' | '♣️' | '♦'
type NormalCard = {
  color: Color
  mark: number
}
type Deck = NormalCard[]

function createDeck(): Deck {
  const deck: Deck = []
  for (let i = 1; i <= 13; i++) {
    deck.push({
      color: '♠',
      mark: i,
    })
    deck.push({
      color: '♣️',
      mark: i,
    })
    deck.push({
      color: '♥️',
      mark: i,
    })
    deck.push({
      color: '♦',
      mark: i,
    })
  }
  return deck
}

function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((v, i) => {
    let str = v.color
    if (v.mark <= 10) {
      str += v.mark
    } else if (v.mark === 11) {
      str += 'J'
    } else if (v.mark === 12) {
      str += 'Q'
    } else if (v.mark === 13) {
      str += 'K'
    }
    result += str + '\t'
    if ((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}

const deck = createDeck()
printDeck(deck)

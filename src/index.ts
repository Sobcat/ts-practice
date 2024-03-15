import { Deck } from './deck'

const deck = new Deck()
console.log('====洗牌之前====')
deck.print()
console.log('====洗牌之后====')
deck.shuffle()
deck.print()
console.log('====发牌====')
const d = deck.publish()
console.log('====p1====')
d.player1.print()
console.log('====p2====')
d.player2.print()
console.log('====p3====')
d.player1.print()
console.log('====桌面====')
deck.print()

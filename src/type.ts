import { Color, Mark } from './enum'

// export type Deck = (NormalCard | Joker)[]
export type Deck = Card[] //类型兼容性
export interface Card {
  getString(): string
}
export interface NormalCard extends Card {
  color: Color
  mark: Mark
}
export interface Joker extends Card {
  type: 'big' | 'small'
}

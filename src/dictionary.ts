export type Callback<K, V> = (key: K, val: V) => void

export class Dictionary<K, V> {
  private keys: K[] = []
  private vals: V[] = []
  private _size: number = 0
  constructor() {}
  set(key: K, val: V) {
    const i = this.keys.indexOf(key)
    if (i < 0) {
      this.keys.push(key)
      this.vals.push(val)
      this._size++
    } else {
      this.vals[i] = val
    }
    console.log(this.keys)
    console.log(this.vals)
  }
  forEach(callback: Callback<K, V>) {
    this.keys.forEach((k, i) => {
      const v = this.vals[i]
      callback(k, v)
    })
  }
  has(key: K): boolean {
    return this.keys.includes(key)
  }
  delete(key: K) {
    const i = this.keys.indexOf(key)
    if (i === -1) {
      return
    }
    this.keys.splice(i, 1)
    this.vals.splice(i, 1)
    this._size--
  }
  get size() {
    return this._size
  }
}

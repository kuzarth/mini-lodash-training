export default class _ {
  constructor(array) {
    this._array = array
  }

  static chain(array) {
    const newLo = new _(array)
    return newLo
  }

  static filter(array, cb) {
    return typeof cb === 'function'
      ? _.chain(array).filter(cb).value()
      : array
  }

  static map(array, cb) {
    return typeof cb === 'function'
      ? _.chain(array).map(cb).value()
      : array
  }

  value() {
    return this._array
  }

  filter(cb) {
    const { length } = this._array
    const arr = []

    for (let i = 0; i < length; i++) {
      if (cb(this._array[i]))
        arr.push(this._array[i])
    }

    this._array = arr

    return this
  }

  map(cb) {
    const { length } = this._array
    const arr = []

    for (let i = 0; i < length; i++) {
      arr.push(cb(this._array[i]))
    }

    this._array = arr

    return this
  }
}

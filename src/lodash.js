const _ = (function () {
  return {
    chain: function (array) {
      return Object.assign({}, this, {
        _array: array,
        value: function () {
          const val = this._array

          delete this.value
          delete this._array

          return val
        },
      })
    },
    filter: function (arg1, cb) {
      if (typeof cb !== 'function' && this._array === undefined) {
        return arg1
      }

      if (this._array !== undefined) {
        this._array = _.filter(this._array, arg1)
        return this
      }

      return arg1.filter(cb)
    },
    map: function (arg1, cb) {
      if (typeof cb !== 'function' && this._array === undefined) {
        return arg1
      }

      if (this._array !== undefined) {
        this._array = _.map(this._array, arg1)
        return this
      }

      return arg1.map(cb)
    },
  }
})()

export default _

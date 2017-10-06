import { expect } from 'chai'
import _ from '../src/lodash.js'

describe('lodash tests', () => {
  describe('chain', () => {
    it('should return wrapped instance', () => {
      const result = _.chain([1,2,3])
      
      expect(result).to.be.a('Object')
    })

    it('should has method "value"', () => {
      const result = _.chain([1, 2, 3]).value

      expect(result).to.be.a('Function')
    })

    it('should works well with all methods in chain', () => {
      const result = _.chain([1, 2, 3, 4]).filter(v => v % 2).map(v => 3 * v).value();

      expect(result).to.eql([3, 9])
    })
  })

  describe('value', () => {
    it('should return value after chaining', () => {
      const result = _
        .chain([1, 2, 3])
        .value()

      expect(result).to.eql([1, 2, 3])
    })

    it('should not exist without "chain" wrapper', () => {
      const result = _.value

      expect(result).to.eql(undefined)
    })
  })

  describe('filter', () => {
    it('should filter array by callback', () => {
      const result = _.filter([1, 2, 3, 4, 5, 6, 7], (v) => v % 2)
      
      expect(result).to.eql([1, 3, 5, 7])
    })

    it('should return original value if callback was missed', () => {
      const result = _.filter([1, 2, 3])
      
      expect(result).to.eql([1, 2, 3])
    })

    it('should works well in chain wrapped instance', () => {
      const result = _
        .chain([1, 2, 3, 10])
        .filter((v) => v < 10)
        .value()

      expect(result).to.eql([1, 2, 3])
    })
  })

  describe('map', () => {
    it('should map array by callback', () => {
      const result = _.map([1, 2, 3], (v) => v * 2)

      expect(result).to.eql([2, 4, 6])
    })

    it('should return original value if callback was missed', () => {
      const result = _.map([1, 2, 3])

      expect(result).to.eql([1, 2, 3])
    })

    it('should works well in chain wrapped instance', () => {
      const result = _
        .chain([1, 2, 3])
        .map((v) => v * 3)
        .value()

      expect(result).to.eql([3, 6, 9])
    })
  })
})

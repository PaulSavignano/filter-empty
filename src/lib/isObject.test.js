import isObject from './isObject'

describe('isObject', () => {
  it('should return false for string', () => {
    expect(isObject('testing')).toEqual(false)
  })
  it('should return false for null', () => {
    expect(isObject(null)).toEqual(false)
  })
  it('should return true for function', () => {
    const fn = jest.fn()
    expect(isObject(fn)).toEqual(true)
  })
  it('should return true for object', () => {
    expect(isObject({})).toEqual(true)
  })
})
import isValue from './isValue'

describe('isValue', () => {
  it('should return false for undefined', () => {
    const result = isValue(undefined)
    expect(result).toEqual(false)
  })
  it('should return false for null', () => {
    const result = isValue(null)
    expect(result).toEqual(false)
  })
  it('should return true for boolean', () => {
    const result = isValue(false)
    expect(result).toEqual(true)
  })
  it('should return true for 0', () => {
    const result = isValue(0)
    expect(result).toEqual(true)
  })
  it('should return true for truthy value', () => {
    const result = isValue('truthy')
    expect(result).toEqual(true)
  })
  it('should return false if empty', () => {
    const result = isValue()
    expect(result).toEqual(false)
  })
})
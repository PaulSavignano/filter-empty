import isEmpty from '../isEmpty'

describe('isEmpty', () => {
  it('should return true for null', () => {
    const result = isEmpty(null)
    expect(result).toEqual(true)
  })
  it('should return true for undefined', () => {
    const result = isEmpty(undefined)
    expect(result).toEqual(true)
  })
  it('should return true for empty string', () => {
    const result = isEmpty('')
    expect(result).toEqual(true)
  })
  it('should return false for boolean', () => {
    const result = isEmpty(false)
    expect(result).toEqual(false)
  })
  it('should return false for number', () => {
    const result = isEmpty(0)
    expect(result).toEqual(false)
  })
  it('should return true for empty array', () => {
    const result = isEmpty([])
    expect(result).toEqual(true)
  })
  it('should return true for empty object', () => {
    const result = isEmpty({})
    expect(result).toEqual(true)
  })
  it('should return true if no arg is provided', () => {
    const result = isEmpty()
    expect(result).toEqual(true)
  })
})

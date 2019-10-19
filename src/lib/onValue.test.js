import onValue from './onValue'

describe('onValue', () => {
  it('should return value if primative', () => {
    const a = onValue({
      accumulator: [],
      key: 0,
      recursorFn: jest.fn(),
      value: 'test',
    })
    expect(a).toEqual(['test'])
  })
  it('should call recursor fn with array value', () => {
    const spy = jest.fn()
    const value = ['array']
    onValue({
      accumulator: {},
      key: 0,
      recursorFn: spy,
      value,
    })
    expect(spy).toHaveBeenCalledWith(value)
  })
  it('should call recursor fn with object value', () => {
    const spy = jest.fn()
    const value = { object: 'some object' }
    onValue({
      accumulator: {},
      key: 'object',
      recursorFn: spy,
      value,
    })
    expect(spy).toHaveBeenCalledWith(value)
  })
})
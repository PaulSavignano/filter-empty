import onAccumulator from './onAccumulator'

describe('onAccumulator', () => {
  it('should return value if primative', () => {
    const a = onAccumulator({
      accumulator: [],
      index: 0,
      recursorFn: jest.fn(),
      value: 'test',
    })
    expect(a).toEqual(['test'])
  })
  it('should call recursor fn with array value', () => {
    const spy = jest.fn()
    const value = ['array']
    onAccumulator({
      accumulator: {},
      index: 0,
      recursorFn: spy,
      value,
    })
    expect(spy).toHaveBeenCalledWith(value)
  })
  it('should call recursor fn with object value', () => {
    const spy = jest.fn()
    const value = { object: 'some object' }
    onAccumulator({
      accumulator: {},
      index: 'object',
      recursorFn: spy,
      value,
    })
    expect(spy).toHaveBeenCalledWith(value)
  })
})
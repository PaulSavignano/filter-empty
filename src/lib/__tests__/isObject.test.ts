import isObject from '../isObject'

const tests = [
  { expected: false, name: 'string', value: 'string' },
  { expected: false, name: 'null', value: null },
  { expected: false, name: 'function', value: jest.fn() },
  { expected: true, name: 'object', value: {} },
  { expected: true, name: 'array', value: [] },
  { expected: false, name: 'number', value: 0 },
]

describe('isObject', () => {
  tests.forEach(({ expected, name, value }) => {
    it(`should return ${expected} for ${name}`, () => {
      const result = isObject(value)
      expect(result).toEqual(expected)
    })
  })
})

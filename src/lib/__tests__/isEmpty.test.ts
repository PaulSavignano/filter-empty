import isEmpty from '../isEmpty'

const tests = [
  { expected: false, name: 'boolean', value: false },
  { expected: false, name: 'number', value: 0 },
  { expected: true, name: 'empty array', value: [] },
  { expected: true, name: 'empty object', value: {} },
  { expected: true, name: 'empty string', value: '' },
  { expected: true, name: 'no argument' },
  { expected: true, name: 'null', value: null },
  { expected: true, name: 'undefined', value: undefined },
]

describe('isEmpty', () => {
  tests.forEach(({ expected, name, value }) => {
    it(`should return ${expected} for ${name}`, () => {
      const result = isEmpty(value)
      expect(result).toEqual(expected)
    })
  })
})

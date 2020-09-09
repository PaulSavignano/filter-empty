import filterEmpty from '../filterEmpty'

describe('filterEmpty', () => {
  // test primitive
  it('should handle primitive', () => {
    const result = filterEmpty('testing')
    expect(result).toEqual('testing')
  })

  // test array
  it('should handle a primitive nested in an array', () => {
    const testArr = [{ one: 'one' }, 'two']
    const filtered = filterEmpty(testArr)
    expect(filtered[1]).toEqual('two')
  })
  it('should handle an array nested in an array', () => {
    const testArr = ['testing', ['one', {}]]
    const filtered = filterEmpty(testArr)
    expect(filtered[1].length).toEqual(1)
  })
  it('should remove empty objects from array', () => {
    const testArr = ['one', 'two', {}]
    const filtered = filterEmpty(testArr)
    expect(filtered.length).toEqual(2)
  })

  // test object
  it('should remove empty objects from nested arrays', () => {
    const testObj = {
      array: [
        {},
        {
          one: 'one',
        },
        {
          two: {
            four: {},
            three: 'three',
          },
        },
        {},
      ],
    }
    const filtered = filterEmpty(testObj)
    expect(filtered.array.length).toEqual(2)
    expect(filtered.array[1].two).toEqual({ three: 'three' })
  })
  it('should remove values that are not isValue', () => {
    const testObj = {
      empty: {},
      one: 'one',
      two: undefined,
    }
    const filtered = filterEmpty(testObj)
    expect(filtered).toEqual({ one: 'one' })
  })
  it('should remove empty objects', () => {
    const emptyObj = {}
    const filtered = filterEmpty(emptyObj)
    expect(filtered).toEqual(undefined)
  })
})

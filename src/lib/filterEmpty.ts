import isObject from './isObject'
import isEmpty from './isEmpty'

function filterEmpty(arg: any): any {
  // handle non-object
  if (!isObject(arg) && !isEmpty(arg)) return arg

  // handle array
  if (Array.isArray(arg)) {
    let index = 0
    return arg.reduce((a, v) => {
      if (!isEmpty(v)) {
        a[index] = filterEmpty(v)
        index++
      }
      return a
    }, [])
  }

  // handle object
  const keys = Object.keys(arg)
  if (keys.length) {
    return keys.reduce((a: Record<string, unknown>, v) => {
      if (!isEmpty(arg[v])) {
        a[v] = filterEmpty(arg[v])
      }
      return a
    }, {})
  }
}

export default filterEmpty

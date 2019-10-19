import isObject from './isObject'
import isValue from './isValue'
import onValue from './onValue'

function filterEmpty(arg) {
  // handle non-objects
  if (!isObject(arg)) {
    if (isValue(arg)) {
      return arg
    }
  }
  // handle array
  if (Array.isArray(arg)) {
    return arg.reduce((a, v, i) => {
      return onValue({
        accumulator: a,
        key: i,
        recursorFn: filterEmpty,
        value: v,
      })
    }, [])
  }
  // handle object
  const keys = Object.keys(arg)
  if (keys.length) {
    return keys.reduce((a, k) => {
      return onValue({
        accumulator: a,
        key: k,
        recursorFn: filterEmpty,
        value: arg[k],
      })
    }, {})
  }
}

export default filterEmpty

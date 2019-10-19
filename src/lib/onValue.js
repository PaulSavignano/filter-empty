import isObject from './isObject'
import isValue from './isValue'

function onValue({
  accumulator,
  key,
  recursorFn,
  value,
}) {
  // handle non-objects
  if (!isObject(value)) {
    if (isValue(value)) {
      accumulator[key] = value
    }
    return accumulator
  }
  // handle arrays and objects
  if (Array.isArray(value) || Object.keys(value).length) {
    if (isValue(value)) {
      accumulator[key] = recursorFn(value)
    }
    return accumulator
  }
  return accumulator
}

export default onValue
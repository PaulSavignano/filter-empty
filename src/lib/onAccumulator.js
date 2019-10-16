import isObject from './isObject'
import isValue from './isValue'

function onAccumulator({
  accumulator,
  index,
  recursorFn,
  value,
}) {
  // handle non-objects
  if (!isObject(value)) {
    if (isValue(value)) {
      accumulator[index] = value
    }
    return accumulator
  }
  // handle arrays and objects
  if (Array.isArray(value) || Object.keys(value).length) {
    if (isValue(value)) {
      accumulator[index] = recursorFn(value)
    }
    return accumulator
  }
  return accumulator
}

export default onAccumulator
function isObject(value) {
  if (value === null) return false
  return ((typeof value === 'function') || (typeof value === 'object'));
}

export default isObject
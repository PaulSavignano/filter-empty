function isValue(value) {
  if (value === null) return false
  if (typeof value === 'boolean') return true
  if (typeof value === 'number') return true
  if (value) return true
  return false
}

export default isValue
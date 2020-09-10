function isObject(value: any): boolean {
  if (value === null) return false
  return typeof value === 'object'
}

export default isObject

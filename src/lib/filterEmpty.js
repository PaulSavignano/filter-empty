function filterEmpty(obj) {
  return Object.keys(obj).reduce((a1, k) => {
    const acc1 = a1
    // handle non-objects
    if (!(obj[k] === Object(obj[k]))) {
      acc1[k] = obj[k]
      return acc1
    }
    // handle arrays
    if (Array.isArray(obj[k])) {
      acc1[k] = obj[k].reduce((a2, v, i) => {
        const acc2 = a2
        // handle non-objects
        if (!(v === Object(v))) {
          acc2[i] = v
          return acc2
        }
        // handle array
        if (Array.isArray(v)) {
          acc2[i] = filterEmpty(v)
          return acc2
        }
        // handle object
        if (Object.keys(v).length) {
          acc2[i] = filterEmpty(v)
          return acc2
        }
        return acc2
      }, [])
      return acc1
    }
    // handle object
    if (Object.keys(obj[k]).length) {
      acc1[k] = filterEmpty(obj[k])
      return acc1
    }
    return acc1
  }, {})
}

export default filterEmpty

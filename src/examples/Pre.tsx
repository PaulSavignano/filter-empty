import React from 'react'
import isObject from '../lib/isObject'

const displayFns = (arg: any): any => {
  if (!isObject(arg)) {
    if (typeof arg === 'function') return 'function'
    return arg
  }
  if (Array.isArray(arg)) {
    return arg.reduce((a, v, i) => {
      a[i] = displayFns(v)
      return a
    }, [])
  }
  const keys = Object.keys(arg)
  return keys.reduce((a: Record<string, unknown>, v) => {
    a[v] = displayFns(arg[v])
    return a
  }, {})
}

const Pre: React.FC<{ json: any }> = ({ json }) => {
  const withFns = displayFns(json)
  return <pre>{JSON.stringify(withFns, null, 2)}</pre>
}

export default Pre

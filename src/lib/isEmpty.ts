import isObject from './isObject';

function isEmpty(value?: any): boolean {
  if (value === null) return true;
  if (value === undefined) return true;
  if (value === '') return true;
  if (typeof value === 'boolean') return false;
  if (typeof value === 'number') return false;
  if (Array.isArray(value) && !value.length) return true;
  if (isObject(value) && !Object.keys(value).length) return true;

  return false;
}

export default isEmpty;

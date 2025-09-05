/* eslint-disable no-prototype-builtins */
const deepChangeValues = <T>(obj: T, callback: <U>(value: U) => U): T => {
  if (typeof obj !== 'object' || obj === null) {
    return callback(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepChangeValues(item, callback)) as T;
  }

  const newObj: { [K in keyof T]: T[K] } = {} as T;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepChangeValues(obj[key], callback);
    }
  }
  return newObj;
}

export default deepChangeValues


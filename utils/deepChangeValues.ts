/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
const deepFindAndChange = <T>(obj: T, callback: (value: any) => any): T => {
  if (typeof obj !== 'object' || obj === null) {
    return callback(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepFindAndChange(item, callback)) as T;
  }

  const newObj: { [key in keyof T]: any } = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepFindAndChange(obj[key], callback);
    }
  }
  return newObj;
}

export default deepFindAndChange


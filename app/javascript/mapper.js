export const mapDate = (object, ...keys) => {
  let mappedObject = {};
  keys.forEach(key =>
    Object.defineProperty(mappedObject, key, {
      value: new Date(object[key]),
      enumerable: true
    })
  );
  return { ...object, ...mappedObject };
};

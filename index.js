// Write your solution in this file!

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = { ...obj };
  return Object.assign({}, obj, { [key]: value });
 
  return newDriver;
}
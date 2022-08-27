module.exports = (operation, value1, value2) => {
  if(operation === '+') return value1 + value2;
  if(operation === '-') return value1 - value2;
  if(operation === '/') return value1 / value2;
  return value1 * value2;
}
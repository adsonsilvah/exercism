export function twoSum(array1, array2) {
   return Number(array1.join("")) + Number(array2.join(""));
}

export function luckyNumber(value) {
  const str = String(value);
  return str === str.split("").reverse().join("")
}

export function errorMessage(input) {
  if (input === undefined || input === null || input === '') {
    return 'Required field';
  }
  const num = Number(input);
  if (isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  }
  return '';
}

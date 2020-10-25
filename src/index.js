module.exports = function check(str, bracketsConfig) {
  arr = Object.fromEntries(bracketsConfig);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (arr[el]) {
      stack.push(arr[el]);
    } else {
      if (el !== stack.pop()) {
        return true;
      }
    }
  }
  return stack.length === 0;
}

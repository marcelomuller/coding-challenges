// Return the string in reversed order

function reverse(string) {
  let str = string;
  let arr = [];
  let arrstr = [...str];

  for (let i = arrstr.length-1; i >= 0; i--) {
    arr.push(arrstr[i]);
  }
  let joined = arr.join('');
  return joined;
}
// Check if a string is a palindrome (the same backwards)
// example: Noel - sees Leon should return true;

// Ignore case and punctuation.

function isPalindrome(string) {
  let phrase1 = string.split(' ').filter(x => x.match(/[a-zA-Z]+/g)).join('');
  let arr = [];
  let arrstr = [...phrase1];

  for (let i = arrstr.length - 1; i >= 0; i--) {
    arr.push(arrstr[i]);
  }
  let phrase2 = arr.join('');

  phrase1 = phrase1.replace(/[!]/, '');
  phrase2 = phrase2.replace(/[!]/, '');

  return phrase1.toLowerCase() === phrase2.toLocaleLowerCase();
}

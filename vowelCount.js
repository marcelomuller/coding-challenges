// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowelCount(str) {
  var vowelsCount = 0;
  
  for (let l of str) {
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}
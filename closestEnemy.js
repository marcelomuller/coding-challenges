// Return the number of spaces between the 1 and a 2 in the array. 

function closestEnemy(arr) {
  if (!arr.includes(2)) return 0;
  
  const onePos = arr.indexOf(1);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[onePos + i] === 2 || arr[onePos - i] === 2) {
      return arr.indexOf(arr[i]);
    }
  }
}

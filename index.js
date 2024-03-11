function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  BigO = (n^2)
*/

/* 
  Add your pseudocode here
  - loop through the array
  - loop through the array again
  - check if the sum of the two numbers is equal to the target
  - if the sum equals the target, return true
  - If the loop finishes, return false
*/

/*
  Add written explanation of your solution here
  - I used a nested loop to iterate through the array and check if the sum of two numbers is equal to the target
  - If the sum is equal to the target, then return true
  - If the loops finish without finding a match, I return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19);
}

module.exports = hasTargetSum;



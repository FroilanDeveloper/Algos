/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?*/

// This is JavaScript without converting the integer to a string

var isPalindrome = function(x) {
  var reverse = 0; // set to zero
  var copy = x; // copy the input eg. 1141

  while (copy > 0) { // while our copy is positive (negative numbers cannot be palindromes)
    const digit = copy % 10; //  i=1 ==> 1141 % 10 = 1 |i=2 ==> 114 % 10 = 4 | i=3 ==> 11 % 10 = 1| i=4  ==> 1 % 10 = 1
    reverse = reverse * 10 + digit; //  i=1 ==> 0 * 10 + 1 =1| i=2 ==> 1 * 10 + 4 = 14| i=3 ==> 14 * 10 + 1 = 141 | i=4 ==> 141 * 10 + 1 = 1411
    copy = ~~(copy / 10); //Math.floor(copy / 10) |/|/ i=1 ==>  1141 / 10 (rounded down) = 114 |i=2  ==> 114/10 = 11| i=3 ==> 11/10  = 1| i=4 ==> 1/10 = 0 - break while loop
  }

  return reverse == x; // is 1411 == 1141? ==> false
};

console.log(isPalindrome(1141));
console.log(isPalindrome(121));

// solve in 1 line
// var isPalindrome = function(x) {
//   return x.toString().split('').reverse().join('') === x.toString();
// };

// console.log(isPalindrome(1211));

// Solution 1:

// check for edge cases, e.g. if the integer is less than 0.

// convert the integer to a string;

// initialize variables

// left = 0

// right = x.length - 1;

// compare the num at the start and the number at the end

// - if they do not match then they're not palindrome; return false

// move the pointers towards each other i.e. slide the left pointer forward, and the right pointer backward

// return

if (x.length < 1) {
  return false;
}

x = x.toString();

let left = 0,
  right = x.length - 1;

while (left <= right) {
  if (x[left] !== x[right]) {
    return false;
  }

  left++;
  right--;
}

return true;

// Solution 2: Time Complexity O(log(n))

// This solution solves the problem without converting to another data type. The logic is here such that in a palindrome the last half when reversed should be equal the first half e.g. 2442; the last half i.e. 42, when reversed because 24. And when compared with the first half, we find a match, therefore we have a palindrome.

// Pseudocode

// Check for edge cases

// if x < 0; it's not a palindrome

// if the last digit is 0, then the first digit must also be 0

// initialize a variable to hold the reversed numbers. i.e. rev = 0;

// Iterate as long as x is still greater than the reversed number;

// NB: we divide x by 10 at each iteration, so whenever x is lesser than rev, we've reached first half

// Now, we take the last digit of the number x and append it to the rev numbers

// e.g 2442 % 10 = 2; then append 2 to rev;

// we remove the last digit from the number x

// e.g. 2442 / 10 = 244; x = 244;

// Lastly, we compare the first half i.e. x with the reversed numbers i.e rev; if x is originally an odd num, we ignore the middle number, as it'll always equal itself in a palindrome.

if (x < 0 || (x % 10 == 0 && x != 0)) { // If x is less than 0 OR x modulus 10 is 0 AND x is not equal to 0 then return false
  return false;
}

let rev = 0; // were declaring rev and giving it a value of 0 

while (x > rev) { // while x is greater than 0  
  rev = rev * 10 + (x % 10); // rev = rev times 10 plus x modulus 10;
  x = Math.floor(x / 10); // x =  rounds down and returns the largest integer less than or equal to a given number x divides by 10
}

return x === rev || x == Math.floor(rev / 10); // return x triple equals of rev OR x double equal Math.floor rev divides by 10 



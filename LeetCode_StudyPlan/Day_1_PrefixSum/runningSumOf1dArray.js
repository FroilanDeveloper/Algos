// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


// Intuition

// We are required to find the running sum of numbers nums[i] in the input array where i ranges from 0 to n-1 and n is the size of the input array. We can see that the running sum is the sum of all of the elements from index 0 to index i inclusive. Since we start building our output array at index 0, at each index i we have already calculated the sum of all numbers up to and including index i-1. Thus, instead of recalculating the sum, we can get the result for index i by simply adding the element at index i to the previously calculated running sum for index i-1.



// Here’s our sample array. We’ll call it nums: nums = [1,2,3,4]

// We want to get our algorithm’s output to be [1,3,6,10].

// What’s happening is that for every number listed, the number(s) before it is being added up to the current number, except of course the first one which stays the same. For instance, 1+2+3 would give us 6. I will be solving this problem in JavaScript.

// The Code
// To start off with, we’ll use the function key word and pass in nums, which is the name of the array we are given that Leetcode asks us to use.

// function(nums) {
// Next, we need some kind of way to apply our adding logic over each of our numbers to give us the running sum for each individual new number in our eventual output array. We’ll use a for loop for this purpose. The key thing to remember though is that we want to start the for loop at the second number, which is the index of 1 (let i = 1) because the first number in our array will stay the same. In our example above, the integer 1 didn’t change in the final answer.

// function(nums) {
//     for(let i = 1 ; i < nums.length ; i++) {
// The logic to apply will only use this next line. What this line represents is that for each place in the array, represented by nums[i], the value will be assigned to itself plus the number previous in the original array itself. As it goes through, the numbers get sequentially larger and this goes on until the loop goes through to modify all the numbers. Confused? I’ll give an example below.

// function(nums) {
//     for(let i = 1 ; i < nums.length ; i++) {
//       nums[i] = nums[i] + nums[i-1];
// For our first round in the loop, nums[i] is 2 using our example from the beginning. That is going to be assigned to itself (= nums[1]) plus one space behind it which is why the index is subtracted. The value of nums[i-1] in this case is 1 because nums[i-1] is going to be nums[0]. So 2 + 1 is 3 which is going to now represent the new second value in our array. Now our array has changed and looks like the following: nums = [1, 3, 3, 4].

// The only difference for the next rounds in our loop would be that we go from the next number over each time. In our next round,

// nums[i] = nums[i] + nums[i-1]; 
// would become

// 3 = 3 + 3
// which would give us 6 to make our array change to [1, 3, 6, 4].

// Altogether we would have our final lines below be added to the previous lines to give us the rest of the algorithm. We are changing our original array with our logic in our for loop so it will make sense to return our original array at the end; nums.

var runningSum = function(nums) {
  for(let i = 1 ; i < nums.length ; i++) {
    nums[i] = nums[i] + nums[i-1];
  }
  return nums;
}

// That concludes this algorithm simply explained to the best of my ability. Hope this brings some clarity and helps someone out.

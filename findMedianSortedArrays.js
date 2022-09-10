const Median = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  arr3.sort((a, b) => {
    return a - b;
  });
  console.log(`Combined Array: ${arr3}`);
  let arr3l = arr3.length;
  if (arr3l % 2 == 0) {
    var mid = arr3l / 2;
    var median = (arr3[mid] + arr3[mid - 1]) / 2;
    return median;
  } else {
    var mid = Math.floor(arr3l / 2);
    return arr3[mid];
  }
};

var arr1 = [1, 3, 7, 10, 15, 15, 15, 15, 15];
var arr2 = [2, 9, 10, 11, 14];

console.log(Median(arr1, arr2));

console.log("*******");

// We can use one pivot point to traverse both arrays at the same time. We'll use the smaller array as the amount of elements to traverse and we'll use the overall amount of elements divided by 2 - the pivot when traversing the larger array.

// Basically we want to do this: (a is the smaller array...b is the larger array) [1,4]....[2,3]
// aLeft | aRight
// ** [1] | [4]
// ** [2] | [3]
// bLeft | bRight

// aLeft <= bRight && bLeft <= aRight
// If the pivot point falls out of bounds to the left the value is -Infinity...if it falls off to the right the value is Infinity. This will ensure we will Always Find a situation where this condition is met (aLeft <= bRight && bLeft <= aRight).

// The best way would be to step through the code with some test samples so you can prove that this will work. Please note that if you do this beware that a double negative will turn into a positive...(-1 - -1 = 0).

// Setting the bounds of the initial binary search is also important. There are several ways to do this, but here since we know the array is 0 based we will make the right edge ALength - 1...so with that in mind since we are adding both array lengths to compute the mid index for the larger array...we'll compute the overall middle element of the larger array using - 2(after adding and dividing by 2).

// Once the condition has been met we take the largest of the LEFT values and the smallest of the RIGHT values If we have an even amount of elements. If we have an odd number of elements we will take the smallest of the RIGHT values. This is because of this example:
// -Infinity | [2],[3]
// ***** [1] | Infinity

// The formula is setup to work like that above so the result for an odd number of elements will always be on the right. So the smallest element between 2 and Infinity is 2.

// Time Complexity is log(n) where n is the smaller array.
// Space Complexity is O(1) since we don't use any other data structures.

// Success
// Details
// Runtime: 109 ms, faster than 92.75% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 45.9 MB, less than 96.99% of JavaScript online submissions for Median of Two Sorted Arrays.

// // ***********************************************************
//  * Time: log(n) n is the smallest array between a and b
//  * Space: O(1)
//  */
const findMedianSortedArrays = (a, b) => {
  if (b.length < a.length) return findMedianSortedArrays(b, a);

  let s = 0,
    e = a.length - 1,
    mid = Math.floor((b.length + a.length) / 2) - 2;

  while (true) {
    let aMid = Math.floor((s + e) / 2);
    let bMid = mid - aMid;

    let aLeft = aMid >= 0 ? a[aMid] : -Infinity;
    let aRight = aMid + 1 < a.length ? a[aMid + 1] : Infinity;
    let bLeft = bMid >= 0 ? b[bMid] : -Infinity;
    let bRight = bMid + 1 < b.length ? b[bMid + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      if ((a.length + b.length) & 1) {
        // odd
        return Math.min(aRight, bRight);
      } else {
        // even
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      }
    } else if (aLeft > bRight) {
      e = aMid - 1;
    } else {
      s = aMid + 1;
    }
  }
};
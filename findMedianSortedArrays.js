const Median = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  arr3.sort((a, b) => { return a - b });
  console.log(`Combined Array: ${arr3}`)
  let arr3l = arr3.length;
  if (arr3l % 2 == 0) {
      var mid = arr3l / 2;
      var median = (arr3[mid] + arr3[mid - 1]) / 2;
      return median;
  } else {
      var mid = Math.floor(arr3l / 2);
      return arr3[mid];
  }
}

var arr1 = [1, 3, 7, 10, 15, 15, 15, 15, 15];
var arr2 = [2, 9, 10, 11, 14];

console.log(Median(arr1, arr2));
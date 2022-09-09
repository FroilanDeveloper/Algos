// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  let result = "";
  let current = head;
  while (current){
    result.push += current.value
    current = current.next;
  }
  let left = 0, right = result.length - 1;
  while (left < right){
    if (result[left] == result[right]) {
      left++;
      right--;
    } else {
      return false
  }
  return false;
  }
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.linkedListPalindrome = linkedListPalindrome;
# 1. reverse the number first and see if it is equal to the original number.


def isPalindrome(self, x):
  if x < 0:
    return False
  p, res = x, 0
  while p:
    res = res * 10 + p % 10
    p = int(p/10)
  return res == x


# 2. find the largest power of 10 which is smaller then x first. Then check if left most digit is equal to right most digit and so on.


def isPalindrome(self, x):
  if x < 0:
    return False
  b = 1
  while x / b >= 10:
    b *= 10
  while b >= 10:
    if x / b != x % 10:
      return False
    x, b = (x % b) / 10, b / 100
  return True


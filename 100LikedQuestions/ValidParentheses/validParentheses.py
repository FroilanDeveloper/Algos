
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# 1.Open brackets must be closed by the same type of brackets.
# 2.Open brackets must be closed in the correct order.
# 3.Every close bracket has a corresponding open bracket of the same type.

# Example 1:

Input: s1 = "()"
Output: true

# Example 2:

Input: s2 = "()[]{}"
Output: true

# Example 3:

Input: s3 = "(]"
Output: false


def isValid(self, s: str) -> bool:
  stack = []
  closeToOpen = { ")" : "(", "]" : "[", "}" : "{" }
  
  for c in s:
    if c in closeToOpen:
      if stack and stack[-1] == closeToOpen[c]:
        stack.pop()
      else:
        return false
    else:
      stack.append(c)
  return True if not stack else False


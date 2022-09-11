#  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money [i] customer  customer has in their bank.
# Example:
# accounts = [[2,8,7],[7,1,3],[1,9,5]]
# Here
# 👨🏻‍💻 [2,8,7] --> person 1 amount in there respective banks
# 🧑🏻‍💼 [7,1,3] --> person 2 amount in there respective banks
# 🕵🏻‍♂️ [1,9,5] --> person 3 amount in there respective banks
# Now we need to find the total in the  [i] customer's bank.
# The total money that the [1] customer has:
# 2 + 8 + 7 = 17
# The total money that the [2] customer has:
# 7 + 1 + 3 = 11
# The total money that the [3] customer has :
# 1 + 9 + 5 = 15
# Now we need return the wealthy customer amount
# From the given data person [1] 👨🏻‍💻 is the most rich 🤑.
# so we need to return 17

# Big O :
# m --> customer
# n --> bank
# Time:O(m*n)
# Space:O(1)

#  Solution:

class Solution:
  def maximumWealth(self, accounts: List[List[int]]) -> int:
    wealthy_person = 0
    for balance in accounts:
      total = sum(balance)
      wealthy_person = max(wealthy_person, total)
    return wealthy_person

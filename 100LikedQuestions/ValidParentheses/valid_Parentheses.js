var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

/*
Hi, let's say we have to verify "{[]}" (this is our input "s"). The way this algo goes about it is the following:

Iterate over all characters of the input;
IF we encounter an open bracket, then we push it to our temporary array
- 1. iteration: stack = "}"
- 2. iteration: stack = "}]"
ELSE (we encounter a closed bracket) we get the last element from the stack (pop()) and check if it is the counterpart of the current character at hand
- 3. iteration: stack = "}" AND "]" (pop()) matches "]" (current character)

So the idea is to build a parallel structure which then has to be a mirror of the "other half" (cause they have to come in pairs, right?)
Hope this explanation helps you ;-)  
*/
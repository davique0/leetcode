/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValid = (s) => {
  const match = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let result = [];

  for (const c of s) {
    if (match[c]) {
      result.push(match[c]);
    } else {
      if (result.pop() !== c) {
        return false;
      }
    }
  }
  return result.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(])"));

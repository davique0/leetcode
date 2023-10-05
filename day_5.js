/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

var isPalindrome = function (s) {
  const alphanumeric = /[A-Za-z1-9]/g;
  const cleanStr = s.match(alphanumeric).join("").toLowerCase().split("");
  console.log(cleanStr[5]);

  if (cleanStr.join("") === cleanStr.reverse().join("")) return true;
  return false;
};

console.log(isPalindrome("A man, a plan, a canal: panama"));

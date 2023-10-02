/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

const lengthOfLongestSubstring = (str) => {
  let substr = [];
  let substrControl = [];
  if (str.length <= 0) return 0;
  for (let i = 0; i <= str.length; i++) {
    if (substr.length <= substrControl.length) {
      substr = [...substrControl];
    }
    if (!substrControl.includes(str[i])) {
      substrControl.push(str[i]);
    } else {
      console.log("before slice", substrControl);
      console.log("char", str[i]);
      console.log("index of", substrControl.indexOf(str[i]));
      substrControl = substrControl.slice(substrControl.indexOf(str[i]));
      console.log("after slice", substrControl);
    }
  }
  // console.log(substr);
  return substr.length;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("aabaab!bb"));

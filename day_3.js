/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

const mergeTwoList = (list1, list2) => {
  if (list1.length === 0) return list2;
  if (list2.length === 0) return list1;
  list2.map((x) => list1.push(x));
  return list1.sort((a, b) => a - b);
};

console.log(mergeTwoList([], [0]));
console.log(mergeTwoList([], []));
console.log(mergeTwoList([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoList([8, 7, 0], [5, 4, 20]));

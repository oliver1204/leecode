/**
 * 二叉树的层平均值
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
 * 输入:
    3
   / \
  9  20
    /  \
   15   7

 * 输出: [3, 14.5, 11]
 * 解释:第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
 *  注意：
 * 1.节点值的范围在32位有符号整数范围内。
 */

var averageOfLevels = function(root) {
  if (!root) return [];
  var result = [],
      stack = [root];
      console.log(stack)
  while (stack.length !== 0) {
    var curr = stack.pop();
    console.log(curr, curr.right, curr.left, curr.val)
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    result.push(curr.val);
  }
  return result;
};

console.log(averageOfLevels(
{
  val: 3,
  right: { 
    val: 20, 
    right: { val: 7, right: null, left: null }, 
    left: { val: 15, right: null, left: null } 
  },
  left: {
    val: 9,
    right: null,
    left: null 
  } 
}))
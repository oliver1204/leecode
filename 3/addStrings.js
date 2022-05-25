/**
 * 字符串相加
 * 给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。
 * 注意：
 * 1.num1 和num2 的长度都小于 5100.
 * 2.num1 和num2 都只包含数字 0-9
 * 3.num1 和num2 都不包含任何前导零。
 * 4.你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */
var addStrings = function (num1, num2) {
  let num1Array = num1.split('').reverse();
  console.log(num1.split('').reverse());
  let num2Array = num2.split('').reverse();
  let length = Math.max(num1Array.length, num2Array.length);
  let ac = 0;
  let result = [];
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let item = parseInt(num1Array[i] || 0) + parseInt(num2Array[i] || 0) + ac;
    result.push(item % 10);
    ac = Math.floor(item / 10);
  }

  ac > 0 ? result.push(1) : result;
  result = result.reverse();

  return result.join('');
};

console.log(addStrings('98', '9'));

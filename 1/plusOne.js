/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 */
var plusOne = function(digits) {
  let ac = 0;
  let digitsSize = digits.length;
  let result = [];
  digits[digitsSize - 1] = digits[digitsSize - 1] + 1;

  for(let i = digitsSize -1 ; i >= 0; i--) {
    digits[i] = digits[i] + ac;
    result.unshift(digits[i] % 10);
    ac = Math.floor( digits[i] / 10 );
  }

  return ac === 1 ? [1].concat(result) : [].concat(result);
}

console.log(plusOne([ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4 ]))
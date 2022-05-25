/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 * 输入: 38
 * 输出: 2
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。由于 2 是一位数，所以返回 2。
 */
// var addDigits = function(num) {
//   let add = (num) => {
//     let arrNum = num.toString().split('');
//     return arrNum.reduce((pre, next) => parseInt(pre) + parseInt(next))
//   }
//   let result = add(num)
  
//   if(result > 9) result = addDigits(result)

//   return result
// }
var addDigits = function(num) {
  return num > 0 ? num % 9 || 9 : num;
}

console.log(addDigits(1))
/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 输入: a = "11", b = "1"
 * 输出: "100"
 */
/**
解答：
思路一:

1）声明一个result 数组存放最终的结果

2）将字符串转换成两个等长度的数组，较短的数组用0补足位数。

3）从数组尾部开始相加。相加后的结果，如果小于2，将相加后的结果放入result数组开头；否则，如果等于2，进一位，相加后得0，如果等于3，进一位，相加后得1，如 当前循环次数i 不是第一位，则i-1位+1，将相加后的结果放入result数组开头。如果i= 0；在数组开头放入1

4）将数组通过转化成字符串。
 */
// var addBinary = function(a, b) {
//   let arrASize = a.length;
//   let arrBSize = b.length;
//   let result = [];
//   if(arrASize > arrBSize) return addBinary(b, a);

//   a = new Array(arrBSize - arrASize).fill(0).join('') + a;
//   let arrA = a.split('');
//   let arrB = b.split('');

//   for(i = arrBSize - 1; i >= 0; i--) {
//     let add = parseInt(arrA[i]) + parseInt(arrB[i])
//     if(add < 2) {
//       result.unshift(add);
//     } else {
//       if(add === 2) {
//         add = 0;
//       } else if(add === 3) {
//         add = 1;
//       }
//       if(i > 0) {
//         arrA[i - 1] = parseInt(arrA[i - 1]) + 1;
//         result.unshift(add);
//       } else if (i == 0) {
//         result.unshift(add);
//         result.unshift(1);
//       }
//     }
//   }
//   return result.join('');
// }
/**
利用了 取余 的方式
 */
var addBinary = function (a, b) {
  let result = '';
  let ac = 0;
  for (i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ac;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    console.log(sum);
    result += sum % 2;
    ac = Math.floor(sum / 2);
  }
  result += ac == 1 ? ac : '';
  console.log(result);
  return result.split('').reverse().join('');
};
console.log(addBinary('1', '111'));

/**
 * 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。
 * 现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
 */
// 输入:bits = [1, 0, 0] 输出: true
// 输入:bits = [1, 1, 0, 1, 1, 0] 输出: true  110110

/**
思路一：
1）copy 一份数组

2）遍历数组，当前的索引不是倒数第二位时：如果当前值为1，那么bitsCopy连续截取两位，bits截取掉下一位；否则 copyIndex++

3）遍历结束后，如果数组中有1，那么就可以
 */
// var isOneBitCharacter = function(bits) {
//   let bitsCopy = bits.concat();
//   let copyIndex = 0;

//   bits.map((item, index) => {
//     if(index !== bits.length - 2) {
//       if(item === 1) {
//         bitsCopy.splice(copyIndex, 2);
//         console.log(bitsCopy)
//         bits.splice(index + 1, 1);
//         console.log(bits)
//       } else {
//         copyIndex++
//       }
//     }
//   })
//   return bitsCopy.toString().includes('1') ? false : true
// }
/**
  如果当前值为1，跳过后一位，继续遍历，直到最后一位。} bits 
 */
var isOneBitCharacter = function (bits) {
  let bitsSize = bits.length;

  for (let i = 0; i < bitsSize; ++i) {
    console.log(bits[i]);
    if (i == bitsSize - 1) return true;
    if (bits[i]) ++i;
  }

  return false;
};

console.log(isOneBitCharacter([1, 1, 1, 0, 1, 0]));

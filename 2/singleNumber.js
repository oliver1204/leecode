/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素
 * 输入: [2,2,1]
 * 输出: 1
 */
// var singleNumber = function(nums) {
//   let obj = {};

//   nums.map((item) => {
//     if(obj[item]) {
//       obj[item]++
//     } else {
//       obj[item] = 1;
//     }
//   })
//   for (i in obj) {
//     if(obj[i] === 1) return i - 0;
//   }
// }

var singleNumber = function(nums) {
  return nums.reduce((p,c)=> {
    console.log(p,c, p^c)
    return p^c
  },0);
};

console.log(singleNumber([2,2,1, 5, 6, 6, 5]))
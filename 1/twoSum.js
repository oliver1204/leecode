/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * eg: 给定 nums = [2, 7, 11, 15], target = 9
 * 返回 [0, 1]
 */

// var twoSum = function(nums, target) {
//   let result = [];
//   let numsSize = nums.length;

//   for(let i = 0; i < numsSize; i++) {
//     for (let j = 0; j < numsSize; j++) {
//       if(i === j) continue;
//       console.log(nums[i] + nums[j])
//       if(nums[i] + nums[j] === target) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
//   return [];
// }

/**
 * 牛  nums = [2, 7, 11, 15], target = 9
 * 利用 map 找到 9-2 这个数字所对应的数组
 */
var twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[target - nums[i]] && comp[target - nums[i]] >= 0) {
      return [comp[target - nums[i]], i];
    }
    comp[nums[i]] = i;
  }
};

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

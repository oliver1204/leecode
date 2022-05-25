/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 输入： 2
 * 输出： 2
 * 输入： 3
 * 输出： 3
 */
var climbStairs = function(n) {
  if(n < 3) return n;

  let pre = 1;
  let next = 2;
  let result = 0;

  for(i = 2; i < n; i++) {
    result = pre + next;
    pre = next;
    next = result;
  }  
  return result;
}

console.log(climbStairs(6))
/** 
 * 先列举下几种情况：
 *      n：  1   2   3   4   5   6   
 * result：  1   2   3   5   8   13

 * 从结果来看寻找规律发现：爬到n阶的方法总数等于爬到n-1阶的方法数加上爬到n-2阶的方法数，是一个斐波那契数列。
 * 从3开始循环一直到n，n为3时result就等于1+2,2赋给pre(即n-2)，3赋给pos（即n-1），如此循环到n即可得到n对应的result。
*/

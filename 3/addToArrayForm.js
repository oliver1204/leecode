/**
 * 数组形式的整数加法
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 输入：A = [1,2,0,0], K = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 * 提示：

 * 1. 1 <= A.length <= 10000
 * 2. 0 <= A[i] <= 9
 * 3. 0 <= K <= 10000
 * 如果 A.length > 1，那么 A[0] != 0
 */

 /**逐位相加法 */
/** 
var addToArrayForm = function(A, K) {
 
  let numK = Array.isArray(K) ? K : K.toString().split('');
  let numA = Array.isArray(A) ? A : A.toString().split('');
  let numASize = numA.length;
  let numKSize = numK.length;

  if(numASize < numKSize) return addToArrayForm(K, A);
  
  let ac = 0;
  let result = [];
  
  numK = new Array(numASize-numKSize).fill(0).concat(numK)
  
  for(i = numASize - 1; i >= 0; i--) {
    let sum = parseInt(numK[i]) + parseInt(numA[i]) + ac
    let item = sum % 10;
    result.unshift(item);
    ac = Math.floor(sum / 10)
  }

  ac > 0 ? result.unshift(1) : result;
  return result;
};
*/
/** 
var addToArrayForm = function(A, K) {
  let B = String(K).split('').map(i=>+i);

  A.reverse();

  B.reverse();

  const maxLength=Math.max(A.length,B.length);

  for(var i=0; i<maxLength;i++){

      const sum=(A[i]||0)+(B[i]||0);

      if(sum<=9){

          A[i]=sum;

      }else{

          A[i]=sum-10;

          A[i+1]=A[i+1]?A[i+1]+1:1;

      }

  }

  return A.reverse()

};
*/
/*
var addToArrayForm = function (A, K) {
  const res = [],
      len = A.length;
  for (let i = len - 1; i >= 0; i--) {
      K += A[i];
      A[i] = K % 10;
      
      K = Math.floor(K / 10);
  }
  while (K !== 0) {
      A.unshift(K % 10);
      K = Math.floor(K / 10);
  }
  return A;
};
*/
var addToArrayForm = function (A, K) {
  let ac = 0,
      result = [],
      reverseA = A.reverse(),
      reverseK = K.toString().split('').reverse(),
      maxLength = Math.max(reverseA.length, reverseK.length);
      
  for(let i = 0; i < maxLength; i++) {
    let sum = parseInt(reverseA[i] || 0) + parseInt(reverseK[i] || 0) + ac;
    result.push(sum % 10)
    ac = Math.floor(sum / 10)
  }

  ac > 0 ? result.push(1) : result;
  return result.reverse();
}
console.log(addToArrayForm([1, 2, 3, 4], 23))
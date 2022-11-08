// var dailyTemperatures = function (temperatures) {
//   let n=temperatures.length
//   let res=[]
//   for(let i=1,)
// };
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// const dailyTemperatures = T => {
//   const n = T.length;
//   const res = new Array(n).fill(0);
//   // 递减栈（存放下标）
//   const stack = [0];
//   for (let i = 1; i < n; i++) {
//       // 当前温度大于栈顶元素的温度
//       while (T[i] > T[stack[stack.length - 1]]) {
//           // 栈顶元素出栈
//           const topIndex = stack.pop();
//           // 更新栈顶位置的 后一个更高温度天数
//           res[topIndex] = i - topIndex;
//       }
//       // 当前索引入栈
//       stack.push(i);
//   }
//   return res;
// };
// console.log(dailyTemperatures([73, 71, 70,75]));

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual(obj1,obj2) {
  if(!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if(obj1 === obj2) {
    return true
  }
  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)
  if(obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if(!res) {
      return false
    }
  }
  return true
}
function fiterMap(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isEqual(arr[i],arr[j]) ) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
console.log(fiterMap([1,2,2,3,{a:{c:2,b:2}},{a:{c:2,b:2}},{a:{c:2,b:1}}]));
function threeAdd(arr, target) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (hashMap.has(target - arr[i] - arr[j])) {
        return [i, j, hashMap.get(target - arr[i] - arr[j])];
      } else {
        hashMap.set(arr[j], j);
      }
    }
  }
}
console.log(threeAdd([1, 2, 3, 5], 9));



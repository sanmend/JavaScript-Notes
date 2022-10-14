function customSort(arr){
   for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
           if(arr[i]>arr[j]){
            let num=arr[j]
            arr[j]=arr[i]
            arr[i]=num
           }
    }
   }
   return arr
}
console.log(customSort([2,1,3]));
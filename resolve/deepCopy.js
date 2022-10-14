// 深拷贝
function deepCopy(obj){
  let newObj
  if(typeof obj==null||typeof obj!="object") return obj
  newObj=new (obj.constructor)()
  for(let i in obj){
    newObj[i]=deepCopy(obj[i])
  }
  return newObj
}
const throttle=function(fn,wait){
  let start =new Date()
  return function(...arg){
    const current=new Date()
    if(current-start<wait) return 
    start=new Date()
    fn.apply(null,arg)
  }
}
export default throttle
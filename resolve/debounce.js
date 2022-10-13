function deboundce(fn,wait,immediate){
  let timer
  return function(...arg){
    timer&&clearTimeout(timer)
    if(immediate){
      if(!timer){
        fn.apply(null,arg)
      }
      timer=setTimeout(() => {
        timer=null
      }, wait);
    }else{
      timer=setTimeout(() => {
        fn.apply(null,arg)
      }, wait);
    }
  }
}
export default deboundce
export default class KAR_H5_SDK {
  constructor(name){
    this.name = name
  }
  hello(){
    console.log('Hello, my name is ' + this.name + '.');
  }
  f(...a){
   var sum = 0;
   a.forEach(item =>{
       sum +=item;
   })
   return sum;
   }
   on(obj){
      $(obj).css("font-size","58px");
      $(obj).fadeOut(1000);
   }
}

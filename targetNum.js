var array = [1 ,2 ,3 ,5 ,4 ];
let target = 7 ;
 for ( let i = 0; i < array.length; i++){
    let newarray = target-array[i];
    for(let j=i;j <array.length;j++){
      if(newarray==array[j]){
    console.log(array[i],array[j]);
      }
    }
}
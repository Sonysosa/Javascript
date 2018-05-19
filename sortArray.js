let a = [2 ,3 ,5 ,7 ,9];
let b = -1;
let i;
for (i =0; i<a.length; i++){
  if(a[i] == b){
    console.log("number  exist"+i);
    break;
    }
  else if( b < a[0] ){
    console.log("number  exist", i);
    break;
  }else if(a[i]> b){
    console.log(i-1);
    break;
  }else if(b >a[i] && i == a.length-1 ){
    let d=a.length;
    console.log("number  exist",d);
    break;
  }
}
  
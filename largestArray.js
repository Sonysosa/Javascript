var a = [2 ,21 ,5 ,3 ,95];
let large = a[0];
for ( var i = 0;  i < a.length; i++){
  if( large < a[i]){
    large = a [i];
    }
}
console.log(large);
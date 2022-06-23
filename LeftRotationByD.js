function leftRotateByD(arr){
    let n=arr.length;
  let temp=arr[0];
  for(let i=1;i<n;i++){
    arr[i-1]=arr[i];
    }
      arr[n-1]=temp;
}
function fun(arr,k){
    for(let i=0;i<k;i++){
         leftRotateByD(arr);  
     }
   arr.forEach(element=>console.log(element));
}
let arr=[0,1,2,3,4,5];
let k=3;
fun(arr,k);
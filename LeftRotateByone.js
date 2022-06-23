function leftRotateByone(arr,k){
    let n=arr.length;
  let temp=arr[0];
  for(let i=1;i<n-1;i++){
    arr[i-1]=arr[i];
    }
      arr[n-1]=temp;
  console.log(arr);
  
}
function fun(){
  
}
let arr=[0,1,2,3,4,5];
let k=2;
leftRotateByone(arr,k);
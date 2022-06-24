function fun(arr){
    let n=arr.length;
    let temp=0;
    for(let i=0;i<n;i++){
        for(let  j=n-1;j>0;j--){
          if(j>i){
            if(arr[j]-arr[i]>temp){
              temp=arr[j]-arr[i];
            }
          }
        }
    }
    console.log(temp);
  }
  let arr=[20,3,10,6,4,8,1];
  fun(arr);
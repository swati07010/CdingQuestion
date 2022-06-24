function fun(arr){
    let n=arr.length;
    let  count=0;
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(arr[i]==arr[j] && i>j){
          break;
        }
        if(arr[i]==arr[j]){
          count++;
        }
      }
      if(count>0){
        console.log(arr[i]+"   "+count);  
      }
      
      count=0;
    }
  }
  let arr=[1,1,2,2,3,3,3,3,4,5,6,8];
  fun(arr);
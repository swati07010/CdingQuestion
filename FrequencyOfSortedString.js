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
        console.log(arr[i]+"  "+count);  
      }
      
      count=0;
    }
  }
  let arr="Hiiswatisingh";
  fun(arr);
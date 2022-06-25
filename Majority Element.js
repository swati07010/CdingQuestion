function fun(arr){
    let count=0;
    let n=arr.length;
    let arr1;
    let count1;
    let max=Math.floor(n/2);
    console.log("half length  of arr is  "+max);
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j] && i>j){
          break;
        }if(arr[i]==arr[j]){
          count++;
        }
      }if(count>0){
        console.log(arr[i]+" "+count);
        if(max<count){
          arr1=arr[i];
          count1=count;
        }
      }
      count=0;    
    }
    if(count1>max){
      console.log("Majority of Element is "+arr1);
    }else{
      console.log("No Majority of Element "+"-1");
    }
  }
  let n=prompt();
  let arr=new Array(n);
  for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt());
  }
  fun(arr);
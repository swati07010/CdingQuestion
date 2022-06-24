function MaximumDifference(arr){
    let res=arr[1]-arr[0];
    let minval=arr[0];
    let n=arr.length;
    for(let j=1;j<n;j++){
      res=Math.max(res,arr[j]-minval);
      minval=Math.min(minval,arr[j]);
    }
    console.log(res);
  }
  let arr=[20,3,10,6,4,8,1];
  MaximumDifference(arr);
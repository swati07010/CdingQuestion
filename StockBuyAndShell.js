function StockBuyAndSell(arr,n){
    let profit=0;
   5
    for(let i=1;i<n;i++){
      if(arr[i]>arr[i-1]){
        profit=profit+arr[i]-arr[i-1];
        
      }
    }
    console.log(profit);
  }
  let n=prompt();
  let  arr=new Array();
  for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt());
  }
  console.log(arr);
  StockBuyAndSell(arr,n);
function TrappingRainWater(arr){
  let n=arr.length;
  let  res=0;
  for(let i=1;i<n-1;i++){
    let lmax=arr[i];
    for(let j=0;j<i;j++){
      lmax=Math.max(lmax,arr[j]);
    }
    let rmax=arr[i];
    for(let j=i+1;j<n;j++){
      rmax=Math.max(rmax,arr[j]);
    }
    res=res+Math.min(lmax,rmax)-arr[i];
  }
  console.log(res);
}
let n=parseInt(prompt());
let arr=new Array(n);
for(let i=0;i<n;i++){5
 arr[i]=arr.push(prompt());
}
TrappingRainWater(arr);
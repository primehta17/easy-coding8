//write a function to convert a number into string with dashes between each digit

function convvertNumtoString(nums){
    let arr=[];let num=nums+"";
  for(let i=0;i<num.length;i++){
   
   arr.push(num[i]);
  }
return arr.join('-');
}
console.log(convvertNumtoString(123945))

// Write a function to find the intersection of two arrays

function arrayIntersection(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
       arr1.push(arr2[i])
    }
   let newArr=[],seen={};

   for(let i=0;i<arr1.length;i++){
    let abc=arr1[i];
    if(seen[abc] ==undefined){
        seen[abc]=1;
    }else{
        newArr.push(arr1[i]);
    }

   }
   return newArr;
}
console.log(arrayIntersection([10,20,30],[30,40]))
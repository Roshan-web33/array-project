let arr = [12,15,34,56,78,23];

// maxium Number finding
const findMax = (array)=>{
    return Math.max(...array);

}
// sum of all Element
const findSum = function(array) {
    return array.reduce(function(acc, val) {
        return acc + val;
    }, 0);};

const oddCount = (array)=>{
    return array.filter(num => num % 2 !==0).length
}

console.log("array",arr);
console.log("Maxmum number",findMax(arr));
console.log("Sum",findSum(arr));
console.log("odd",oddCount(arr));



 




























// // Find the maximum number in the array.
// let arr = [12, 13, 56, 78, 25]
// let max = Math.max(...arr);
// console.log(max);


// // Calculate the sum of all elements in the array.

// let a = [12,23,35,45,67]
// let sum = a.reduce(function(acc ,val){
//     return (acc+val);

// });
// console.log(sum);

// // Count the number of odd numbers in the array.

// let b = [12, 23, 45,67]
// let odd = b.filter(n => n % 2 === 1);
// console.log(odd);

// // • Use a dummy array for testing purposes.
//  let test= [23,67,89,76,56,] //original
//  let change =[...test];     //dummy
 
//  change.push(23);
//  change.unshift(67);
//  change.reverse();

//  console.log(change);
//  console.log(test);
 
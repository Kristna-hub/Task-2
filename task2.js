// Given an array of objects, group them by a specific property. For instance, given an array of people objects, group them by ‘age’.
// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 }
// ];

// console.log(groupByProperty(people, 'age'));
// Output: { '25': [ { name: 'Bob', age: 25 } ], '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ] }


// function check(array, prop) {
//   let group = {};
//   for (let i of array) {
//       let value = i[prop];
//       if (group[value]) {
//           group[value].push(i);
//       } else {
//           group[value] = [i];
//       }
//   }
//   return group;
// }

// const people = [
//   { name: "Bob", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 }
// ];
// console.log(check(people, 'age'));


// 2, 2. Create a function that deeply flattens an array. The function should be able to handle nested arrays of any depth.
// const nestedArray = [1, [2, [3, [4]], 5]];
// console.log(deepFlatten(nestedArray));
/// Output: [1, 2, 3, 4, 5]

// function myMap(array, callback) {
//   let arr2 = [];
//   for (let i = 0; i < array.length; ++i) {
//       arr2.push(callback(array[i], i, array));
//   }
//   return arr2;
// }

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = myMap(numbers, (num) => num * 2);

// console.log(doubledNumbers);


// 4.. Given two arrays, combine them into one array without any duplicates. 
// Use array methods to achieve this, and consider the performance.

// function removeDuplicates(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);
//   let uniqueArray = [];

//   for (let i = 0; i < combinedArray.length; ++i) {
//       if (!uniqueArray.includes(combinedArray[i])) {
//           uniqueArray.push(combinedArray[i]);
//       }
//   }

//   return uniqueArray;
// }

// console.log(removeDuplicates([1, 2, 3], [2, 1, 1])); 


// 5.5. Write a function that
//  finds the longest string in an array of strings. 
//  Make sure it handles edge cases properly.

 
// function findLongist(arr){
//   let longest= arr[0];
//   for(let i =1 ; i<arr.length;++i){
//       if(typeof arr[i]!== 'string'){
//           return`input`;
//       }
//       if(arr[i].length > longest.length ) {
//           longest = arr[i];
          
          
//       }
//   }
//   return longest;
//   }
//   const strings = ["apple", "banana", "kiwi", "pineapple"];
// console.log(findLongist(strings));


// 6. Create a function that takes two arrays and 
// returns an array of their intersection 
// (elements that are present in both arrays).


// function Duplicat(arr1, arr2) {
//   let duplicates = [];
//   let mix = arr1.concat(arr2);
//   for (let i = 0; i < mix.length; ++i) {
//       if (arr1.includes(mix[i]) && arr2.includes(mix[i])) {
//           if (!duplicates.includes(mix[i])) {
//               duplicates.push(mix[i]);
//           }
//       }
//   }
//   return duplicates;
// }


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// console.log(Duplicat(arr1, arr2)); 


// 7. Write a function that splits an array into groups of a specified size.
//  For example, chunking an array into subarrays of length 2.

// function foo(arr,size){
//   let chunk = [];
//   for(let i = 0; i < arr.length; i+=size){
//       chunk.push(arr.slice(i,i+size));
//   }
//   return chunk;
  
// }
// let arr = [1,2,3,3,4,5,6];
// let size =3;
// console.log(foo(arr,size));



// 8. Write a custom implementation of the Array.prototype.reduceRight method. 
// This function applies a function against 
// an accumulator and each value of the array (from right-to-left) to reduce it to a single value.


// function MYReduce(accumlator,value){
//   let arr1 = [];
//   for(let i = 0;i<arr1.length; +++i){
  


//   }



 

// }

// 2. Create a function that deeply flattens an array. 
// The function should be able to handle nested arrays of any depth.

// function deepFlatten(array) {
//   let flattenedArray = [];

//   for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       if (Array.isArray(element)) {
//           flattenedArray = flattenedArray.concat(deepFlatten(element));
//       } else {
//           flattenedArray.push(element);
//       }
//   }

//   return flattenedArray;
// }

// const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
// const flattenedArray = deepFlatten(nestedArray);
// console.log(flattenedArray); 



// function foo(a,b){
//   throw new Error`input`;
//   }
// console.log('a');
// foo(1,2);
//  console.log('b');
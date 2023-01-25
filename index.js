
//1.Reverse the letters of the words
// let reversedString=reverse("Hello There!");
// function reverse(s){
//   let stringg=s.split(" ");
//   let reverseString=stringg.map(a=>{
//     return a.split("").reverse().join("");
//   });
//   return reverseString.join(" ");
// }
// console.log(reversedString);

//2. How to check type of data
// let r=3;
// console.log(typeof(r));
// r="hdbeiwh";
// console.log(typeof(r));
// r=3.0909;
// console.log(typeof(r));
// r=true;
// console.log(typeof(r));

//3. Empty an array
// let arr=[3,4,5,6,7];
// arr1=arr;
// arr=[];
// console.log(arr);
// console.log(arr1);

//4. Sum of elements in an array
const arr=[3,1,2,6,7,2];
let sum=arr.reduce((acc,curr)=>{
  acc=acc+curr;
  return acc;
},0);
console.log(sum);

//5.How to copy an array into other array
let a=[1,2,3,4,5,6];
aa=a;
console.log(aa);
console.log(a);

//6. Can we create an array with different datatype? 
//Ans. Yes


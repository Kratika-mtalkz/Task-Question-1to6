
//1.Reverse the letters of the words
let reversedString=reverse("Hello There!");
function reverse(s){
  let stringg=s.split(" ");
  let reverseString=stringg.map(a=>{
    return a.split("").reverse().join("");
  });
  return reverseString.join(" ");
}
console.log(reversedString);
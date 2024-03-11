// let object = {
//     name:"object1",
//     logName: function () {
//         console.log(this.name);
//     }
// }

// function getGlobalValue(price, count, discount) {
//     return price * count - discount;
// }

// console.log(getGlobalValue(9010, 1, 30));
// console.log(getGlobalValue(6010, 2, 50));
// console.log(getGlobalValue(500, 4, 29));
// console.log(getGlobalValue(600, 2, 58));

// function isOdd(number){
//     if(number % 2 === 0){
//         console.log(` ${number} Это четное число`);
//     } else {
//         console.log(` ${number} Это нечетное число`);
//     }
// }

// isOdd(44);
// isOdd(56);
// isOdd(33);
// isOdd(11);

// let max = 0;
// function findMaxNum (array, x){
// for (let i = 0; i <= array.length; i++)
// if(array[i] > max){
//   max = array[i]
// }
// return max;
// }

// let nums = [1,2,3,4,5,6,7]
// console.log(findMaxNum(nums));

// let summa = 1;
// function factorial (N) {
//   for (let i = 1; i <= N; i++) {
//     summa = summa * i;
       // summa *= i;
//   }
//   return summa;
// }

// console.log(factorial(5));


// function findX (array, number) {
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === number) {
//       console.log(true);
//     }
//   }
// }

// const nums = [1, 23, 18, 44, 1, 23, 23, "32"];
// findX(nums, 2);
// findX(nums, 1);
// findX(nums, 44);
// findX(nums, 32);

// function temperature (number) {
//   return(number * 9) / 5 + 32;
// }

// console.log(temperature(44));
// console.log(temperature(36.8));
// console.log(temperature(100));

// let name = "Bilimbek, smotri";

// function findLength(string) {
//   return string.length;
// }

// console.log(findLength(name));
// console.log(findLength ("Shahnur"));

// function getSortArray (array) {
//   return array.sort((a, b) => a - b);
// }

// let nums = [1231, 1, 23, 15, 623, 11];
// console.log(getSortArray(nums));

// let string = "Bilimbek" 
// console.log(string);  
// console.log(string.split("")); 
// console.log(string.split("").reverse()); 
// let stringReverse = string.split("").reverse().join(""); 
// console.log(stringReverse); 
// if (string == stringReverse) { 
//     alert ("eto palindrome"); 
// } else { 
//     alert ("ne palindrome"); 
// } 

// function palindrome (str) {
//   let strReverse = str.split("").reverse().join("");
//   if (str === strReverse) {
//     alert ("eto palindrome");
//   } else {
//     alert("ne palindrome");
//   }
// }

// palindrome("boob")

const box = document.querySelector(".box");
const Bilimbek = document.querySelector(".button");

function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

box.addEventListener("click", changeColor);
Bilimbek.addEventListener("click", changeColor);
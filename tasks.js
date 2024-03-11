// function square (number) {
//     return number * number;
// }

// let squareNumber = 8;
// let resultSquare = square(squareNumber);
// console.log(resultSquare);

// function greet (name) {
//     return `Hello, ${name}!`;
// }

// let userName = "Alice";
// let greetingMessage = greet(userName);
// console.log(greetingMessage);

// function getMax (a,b) {
//     if(a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// let a = 8;
// let b = 5;
// let numberMax = getMax(a,b);
// console.log(numberMax);

// function reverseString (inputString) {
//     return inputString.split('').reverse().join('');
// }

// let originalString = "Hello";
// let reversedString = reverseString(originalString);
// console.log(reversedString);

// function palindrome (str) {
// let strReverse = str.split("").reverse().join("");
//     if (str === strReverse) {
//         alert ("eto palindrome");
//     } else {
//     alert("ne palindrome");
//       }
//     }
    
// palindrome("boob")

// let max = 0;
// function findMaxNum (array, x){
// for (let i = 0; i <= array.length; i++)
// if(array[i] > max){
//   max = array[i]
// }
//  return max;
// }

// let nums = [1,2,3,4,5,6,7]
// console.log(findMaxNum(nums));

// function sumArray(array) {
//     let totalValue = array.reduce(function(accumulator, current) {
//       return accumulator + current;
//     }, 0);
  
//     return totalValue;
//   }
  
// let numbersArray = [4,5,7,3,5,7,3];
// let  result = sumArray(numbersArray);
  
// console.log(result);
// ! pop():
// ! 1
// let products = ["egg", "banan", "apple", "pineapple", "cucumber"]
// products.pop(4)
// console.log(products);

// ! 2
// let usersName = ["Aktilek", "Nadiya", "Almaz", "Amir"]
// usersName.pop(3)
// console.log(usersName);

// ! push():
// ! 1
// let emptyArray = []
// emptyArray.push(1,2,3,4,5,6,7,8,9)
// console.log(emptyArray);

// // ! 2
// let tasksArray = ["jump", "run", "study"]
// tasksArray.push("relax")
// console.log(tasksArray);

// ! unshift()
// ! 1
// let studentsArray =  ["Aktilek", "Nadiya", "Almaz", "Amir"]
// studentsArray.unshift("Chyngyz")
// console.log(studentsArray);

// ! 2
// let daysArray = ["Tuesday", "Wednesday", "Thursday"]
// daysArray.unshift("Monday")
// console.log(daysArray);

// ! shift()
// ! 1
// let quietTasks =  ["jump", "run", "study"]
// quietTasks.shift(0)
// console.log(quietTasks);

// ! 2
// let names = ["Aktilek", "Nadiya", "Almaz", "Amir"]
// names.shift(0)
// console.log(names);

//  ! concat()
// ! 1 
// let numbers1 = [1,22,3,4,5,6,7,8,9,0,]
// let numbers2 = [87,5,6,4,3,,8,6,3,2]
// let newString = numbers1.concat(numbers2)
// console.log(newString);

// ! 2
// let arrayStudents = ["Aktilek", "Nadiya", "Almaz", "Amir"]
// let teachersArray = ["Kanai", "Anara", "Zamira"]
// let totalArray = arrayStudents.concat(teachersArray)
// console.log(totalArray);

// ! indexOf ()
// ! 1
// let numbers3 = [1,2,3,4,5,6,7,,8,9]
// let result = numbers3.indexOf(5, 0)
// console.log(result);

// ! 2
// let wordsArray = ["word", "list", "paper", "tree"]
// let res = wordsArray.indexOf("paper", 0)
// console.log(res);

// ! splice()
// ! 1
// let num = [1,2,3,4,5,6,7,8,9]
// num.splice(0,4)
// console.log(num);

// ! 2 
// let stringArray = ["word", "list", "paper", "tree"]
// stringArray.splice(-1, -2, "method")
// console.log(stringArray);

// ! slice ()
// ! 1
// let num1 = [1,2,3,4,5,6,7,8,9]
// let num2 = num1.slice(0,3)
// console.log(num2);

// ! 2
// let dataArray = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
// let chooseData = dataArray.slice(3,6)
// console.log(chooseData);

// ! forEach()
// ! 1
// let numbers4 = [1,2,3,4,5,6,7,8,9]
// numbers4.forEach(function(numbers4) {
//     console.log(numbers4);
// });


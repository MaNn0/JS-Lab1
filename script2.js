// Question 1 ===============================

// let str = "The sunset sets at twelve o' clock.";
// str = str.toLowerCase().split("");
// for(let i = 0; i < str.length; i++){
//     if(/^[a-z]+$/.test(str[i]) ){
//         console.log(str[i].charCodeAt(0)-96);
//     }
// }

// Question 2 ===============================

// let str = "is2 Thi1s T4est 3a" ;
// let arr = [];
// str = str.split(" ");
// console.log(str[0][0]);
// function sortStr(str){
//     if(str === '') return ;
//     let arr = []; // [2,1,4,3]
//     let merged = [];
//     let final = [];
//     str = str.split(" ");
//     for(let i = 0; i < str.length; i++){
//         for(let x = 0; x < str[i].length; x++){
//             if(/[1-9]/.test(str[i][x])){
//                 arr.push(str[i][x]);
//                 merged.push({ key: str[i], value: str[i][x] })
//             }
//         }
//     }
//     merged.sort((function(a,b){return a.value - b.value}))
//     for(let i = 0; i < merged.length; i++){
//         final.push(merged[i].key)
//     }
//     console.log(final.join(" "));
// }
// sortStr('is2 Thi1s T4est 3a')

// Question 3 ===============================

// function specialMultiply(a,b){
//     if(arguments.length === 2) return a*b;
//         return function(b){
//             return a*b;
//         }
// }
// console.log(specialMultiply(3));

// Question 4 ===============================

// function guessingGame(amount){
//     let answer = 5;
//     let guesses = 1; //1 2 3
//     return function(guess){ // guess = 6
//             if(guess === answer){
//                 console.log("Your got it!");
//                 return
//             }
//             if(guesses == amount){
//                 console.log(`No more guesses the answer was ${answer}`);
//                 return;
//             }
//             else if (guess > answer){
//                 console.log("Your guess is too high!");
//                 guesses++
//             }
//             else if (guess < answer){
//                 console.log("Your guess is too low");
//                 guesses++
//             }
//     }
// }
// var game2 = guessingGame(5) 
// game2(4)
// game2(7)
// game2(2)
// game2(5)
// game2(5)

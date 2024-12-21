// Question 1

// function sort(a,b,c){
//     var temp;
//     if(a < b){
//         temp = b
//         b = a
//         a = temp
//     }
//     if( b < c){
//         temp = c
//         c = b
//         b = temp
//     }
//     if( a < b){
//         temp = b
//         b = a
//         a = temp
//     }
//     alert(a+' '+b+' '+c)
// }
// sort(-5,-4,-3)

// ==============================================================
// Question 2
// ==============================================================

// function printFizz(x){
//     for(let i = 0; i <= x; i++){
//         if(i%3 === 0 && i%5 === 0 && i != 0)
//             console.log(`${i} = FizzBuzz`)
//         else if(i%3 === 0 && i != 0 )
//             console.log(`${i} = Fizz`)
//         else if(i%5 === 0 && i != 0)
//             console.log(`${i} = Buzz`)
//         else
//             console.log(i)
//     }
// }
// printFizz(100)
// ==============================================================
// Question 3
// ==============================================================

// function sum(){
//     let sum = 0
//     for(let i = 0; i < 1000; i++ ){
//         if( i%3 === 0 && i%5 === 0 && i != 0)
//             sum+=i;
//     }
//     return sum
// }
// console.log(sum())

// ==============================================================
// Question 4
// ==============================================================

// alert("Welcome to Random Guess Game !!")
// let n = 5,counter=1;
// do{
//     var x = prompt("Can you please enter a number for gussing")
//     x = parseInt(x)
//     if( x === n ){
//         alert("Good Work You Won !! ");
//         break
//     }
//     else{
//         var o = prompt("Wrong Guess Wanna Try Again ??")
//         counter++;
//     }
//     if(counter === 3){
//         console.log("Game Over");
//         break
//     }
// }while (o === "yes")

// ==============================================================
// // Question 5 BONUS
// ==============================================================

// function fun(){
//     let x = 2
//     let arr = [];
//     while(x != 1){
//         let arrX = Array.from(String(x), Number); // [1,9]
//         var ok = 0;
//         for(let i = 0; i < arrX.length; i++){
//             ok +=arrX[i]*arrX[i];
//         }
//         if(arr.includes(ok))
//             return "not a happy number"
//         else{
//             arr.push(ok);
//             x = ok;
//         }
//     }
//     return "happy number"
// }
// console.log(fun());

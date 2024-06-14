// setTimeout(5000)
// let inputNum = prompt("give us a number")

// let number = Math.floor(Math.random() * inputNum) + 1
// let guess = prompt("guess the random number!")
// let count = 0
// while(guess!==number){
//     if(guess<number){
//         count+=1
//         guess = prompt("too low")
//     }else if(guess>number){
//         guess = prompt("too high")
//     }else if(guess === "q"){
//         break
//     }
// }
// alert(`nice!, you guessed ${count} times`)

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Please enter a valid number"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let attempts = 1;

// let guess = prompt("enter your first guess (type 'q' to quit)");
// while ((parseInt(guess) !== targetNum) && (guess!== 'q')) {
// 	if(guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("too high!");
//     } else {
//         guess = prompt("too low!");
//     }
// }

// if(guess === 'q'){
// 	alert("see you!")
// }else{
// 	alert(`YOU GOT IT! It took you ${attempts} guesses`);
// }

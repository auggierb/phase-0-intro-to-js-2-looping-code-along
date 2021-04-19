// Code your solutions in this file

function writeCards(names, events) {
    let newArr = []
     for (let i = 0; i < names.length; i++) 
         newArr.push( `Thank you, ${names[i]}, for the wonderful ${events} gift!`);
     debugger
 return newArr;}
 
 function countDown(number){
     while (number >-1){
       console.log(number--);
     }
 }
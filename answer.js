// *** YOUR ANSWER BELOW ***

"use strict";

function divisibleBySixOrSeven(n){
    for(let i = 1; i <= n; i++){
        if(i === 6){ 
            console.log("The integers between 1 and 100 that are divisible by either 6 or 7 but not both are as such:");
        }
        if(i % 6 === 0 && i % 7 !== 0){
            console.log(i); 
        }  
        if(i % 7 === 0 && i % 6 !== 0){
            console.log(i);
        }
    }
}
divisibleBySixOrSeven(100);


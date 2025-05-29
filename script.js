
let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


const calculateDoggieAge= (doggieAge) => {
    const humanAge= doggieAge *7;
    console.log(humanAge)
    result.innerHTML=`your doggie is ${humanAge} years old in human years!`
}


equalsButton.addEventListener("click",() => {

let userInput= Number(input.value)
calculateDoggieAge(userInput)

})










clearButton.onclick = function(){
input.value="";
result.innerHTML = "";

}
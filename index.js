const characters  = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "!","@","#","$","%","^","&","*","(",")",
    "-","_","=","+","[","]","{","}","|",
    ";",":","'",",",".","<",">","/","?","`","~"
]

let passworOnedEl = document.getElementById("pass-one-el")
let passworTwodEl = document.getElementById("pass-two-el")
let messageEl = document.getElementById("message")
let passFirst 
let passSecond
function generatePass(){
    let passLength = 15;
    passFirst=""
    passSecond=""
    for(let i=0;i<passLength;i++){
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    passFirst+=characters[randomIndexOne]
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    passSecond+=characters[randomIndexTwo]
    }
    passworOnedEl.textContent = passFirst
    passworTwodEl.textContent = passSecond
}

passworOnedEl.addEventListener("click",function(){
       navigator.clipboard.writeText(passFirst)
       messageEl.textContent = "Copied!"
})
passworTwodEl.addEventListener("click",function(){
       navigator.clipboard.writeText(passSecond)
       messageEl.textContent = "Copied!"
})
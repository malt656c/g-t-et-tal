let rndmNumber = Math.floor(Math.random() * 100);
console.log(rndmNumber)
function guessNumber() {
  let guessedNumber = document.querySelector("input").value;

if(guessedNumber < rndmNumber){
  document.querySelector("h1").textContent = "too low";
} else if(guessedNumber > rndmNumber){
  document.querySelector("h1").textContent = "too high";
} else if(guessedNumber==rndmNumber){
  document.querySelector("h1").textContent = "you win";
  document.querySelector("img").classList.add("winner_image");
  document.querySelector("h1").classList.add("winner_title");
}
}


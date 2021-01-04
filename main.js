// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
const modal = document.getElementById("modal")
const modalMessage = document.getElementById("modal-message")

hearts.forEach(heart => heart.addEventListener('click', function(e){
  mimicServerCall()
  .then(res => res.json)
  .then(function(){
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart')
    } else {
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch(function(error) {
    modal.innerHTML = `<h2>${error}</h2>`
    modal.classList.remove("hidden")
    setTimeout(function(){ modal.classList.add("hidden")}, 5000)
  })
  
}))



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

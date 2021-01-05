// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")

hideError()

function hideError() {
  modal.classList.add("hidden")
}

btns = Array.from(document.querySelectorAll(".like"))
for (like of btns) {
  like.addEventListener("click", function(event) {
    mimicServerCall()
    .then(function(msg) {
      span = event.target.querySelector("span")
      if (span.innerText === EMPTY_HEART) {
        span.innerText = FULL_HEART 
        span.classList.add("activated-heart")
      } else {
        span.innerText = EMPTY_HEART
        span.classList.remove("activated-heart")
      }
    })
    .catch(function(error) {
      let modalMessage = document.querySelector("#modal-message")
      modal.classList.remove("hidden")
      modalMessage.innerText = error
      console.log(error)
      setTimeout(hideError, 5000)
    })
  })
}


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

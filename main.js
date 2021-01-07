// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")


hideError()


function hideError() {
  errorModal.classList.add("hidden")
}

likeButtons = Array.from(document.querySelectorAll(".like"))
for (like of likeButtons) {
  like.addEventListener("click", function(e) {
    mimicServerCall()
      .then(function(message) {
        span = e.target.querySelector("span")
        if (span.innerText === EMPTY_HEART) {
          span.innerText = FULL_HEART
          span.classList.add("activated-heart")
        } else {
          span.innerText = EMPTY_HEART
          span.classList.remove("activated-heart")
        }
      })
      .catch(function(error){
        let modalMessage = document.querySelector("#modal-message")
        errorModal.classList.remove("hidden")
        modalMessage.innerText = error
        console.log(error)
        setTimeout(hideError, 5000)
      })
  })
}

// Your JavaScript code goes here!




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

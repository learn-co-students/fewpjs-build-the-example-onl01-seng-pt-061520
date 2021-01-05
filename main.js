// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorDoc  = document.getElementById("modal")

hideError()
likeButtons =  Array.from(document.getElementsByClassName("like"))
for (like of likeButtons) {
  like.addEventListener("click", function(event) {
    mimicServerCall()
    .then(function(message){
      likeMeter = event.target
      if (likeMeter.innerText === EMPTY_HEART){
        likeMeter.innerText = FULL_HEART
        likeMeter.classList.add("activated-heart")
      }
      else {
        likeMeter.innerText = EMPTY_HEART
        likeMeter.classList.remove("activated-heart")
      }

    })
    .catch(function(error){
      errorDoc.classList.remove("hidden")
      errorDoc.children[1].innerText = error
      setTimeout(hideError, 5000)
    })
  })

}

// Your JavaScript code goes here!

function hideError(){
  errorDoc.classList.add("hidden")
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

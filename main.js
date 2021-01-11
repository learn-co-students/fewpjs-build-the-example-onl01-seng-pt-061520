// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function toggleLiked(likeButton) {
  if (likeButton.className === 'like') {
    likeButton.className = 'like activated-heart';
    likeButton.children[0].innerText = FULL_HEART;
  } else {
    likeButton.className = 'like';
    likeButton.children[0].innerText = EMPTY_HEART;
  }
}

function displayErrorMessage(message) {
  document.getElementById('modal-message').innerText = message;
  document.getElementById('modal').className = '';
  setTimeout(function() {
    document.getElementById('modal').className = 'hidden';
  }, 5000);
}

function addListenersToLikeButtons(likeButtons) {
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', function(e) {
      e.preventDefault();
      mimicServerCall().then(function(response) {
        toggleLiked(likeButton);
      }).catch(function(error) {
        displayErrorMessage(error);
      });
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  addListenersToLikeButtons(document.getElementsByClassName('like'))
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

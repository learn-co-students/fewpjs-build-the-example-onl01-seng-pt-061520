// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal")
    const hearts = document.getElementsByClassName("like-glyph")
    likePost(hearts);
})

const likePost = (hearts) => {
    for (const heart of hearts) {
        heart.addEventListener("click", (e) => {
            mimicServerCall()
                .then(() => {
                    if (heart.innerHTML == EMPTY_HEART) {
                        heart.innerHTML = FULL_HEART
                        heart.className = "activated-heart"
                    } else {
                        heart.innerHTML = EMPTY_HEART
                        heart.className = "like-glyph"
                    }
                })
                .catch(error => {
                    modal.hidden = false
                    const modalMessage = document.getElementById("modal-message")
                    modalMessage.innerText = error
                    setTimeout(() => {
                        modal.hidden = true
                    }, 5000)
                })
        })
    }
}





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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
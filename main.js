// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtns = document.querySelectorAll('.like');

for (let i = 0; i < 5; i++) {
  likeBtns[i].addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        likeBtns[i].innerHTML = `<li class='like'>Like! <span class="like-glyph activated-heart">${FULL_HEART}</span></li>`;
      })
      .catch((error) => {
        const errorAlert = document.getElementById('modal');
        const errorAlertmessage = document.getElementById('modal-message');
        errorAlertmessage.textContent = error;

        errorAlert.classList.remove('hidden');
        setTimeout(() => {
          errorAlert.classList.add('hidden')
        }, 3000);
      })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

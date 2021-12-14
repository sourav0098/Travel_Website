flag = 0;
//opens the floating form
function openForm() {

  document.getElementById("LoginForm").style.display = "block";

}
//checks the credentials
function checkCred() {
  const loginUsername = document.getElementById('username');
  const loginpassword = document.getElementById('Loginpassword');

  if (loginUsername.value == "user" && loginpassword.value == "1234") {
    flag = 1
    modalmsgSuccess.style.display = "block";
  }
  else {
    modalmsg.style.display = "block";
  }
  closeModal2();
}

//error
function SignUpError() {
  if (flag == 1) {
    modalmsg3.style.display = "block";
  }
  else {
    modalmsg4.style.display = "block";
  }
}
let focusedElementBeforeModal;
const modal = document.getElementById('modal');
const modalOverlay = document.querySelector('.modal-overlay');

let focusedElementBeforeModal2;
const modal2 = document.getElementById('modal2');
const modalOverlay2 = document.querySelector('.modal-overlay2');

window.onload = () => {
  const addReview = document.getElementById('review-add-btn');
  addReview.id = 'review-add-btn';
  addReview.innerHTML = '+';
  addReview.setAttribute('aria-label', 'add review');
  addReview.title = 'Add Review';
  addReview.addEventListener('click', openModal);



  const addReview2 = document.getElementById('review-add-btn2');
  addReview2.id = 'review-add-btn2';
  addReview2.innerHTML = 'Sign In';
  addReview2.setAttribute('aria-label', 'add review');
  addReview2.title = 'Add Review';
  addReview2.addEventListener('click', openModal2);

}

const openModal = () => {
  // Save current focus
  focusedElementBeforeModal = document.activeElement;

  // Listen for and trap the keyboard
  modal.addEventListener('keydown', trapTabKey);

  // Listen for indicators to close the modal
  modalOverlay.addEventListener('click', closeModal);
  // Close btn
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeModal);

  // submit form
  const form = document.getElementById('review-form');
  form.addEventListener('submit', submitAddReview, false);


  // Find all focusable children
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var focusableElements = modal.querySelectorAll(focusableElementsString);
  // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];

  // Show the modal and overlay
  modal.classList.add('show');
  modalOverlay.classList.add('show');

  // Focus first child
  // firstTabStop.focus();
  const reviewName = document.getElementById('reviewName');
  reviewName.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

        // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  }
};


const openModal2 = () => {
  // Save current focus
  focusedElementBeforeModal2 = document.activeElement;

  // Listen for and trap the keyboard
  modal2.addEventListener('keydown', trapTabKey);

  // Listen for indicators to close the modal
  modalOverlay2.addEventListener('click', closeModal2);
  // Close btn
  const closeBtn2 = document.querySelector('.close-btn2');
  closeBtn2.addEventListener('click', closeModal2);

  // submit form
  const form2 = document.getElementById('review-form2');
  form2.addEventListener('submit', submitAddReview, false);


  // Find all focusable children
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var focusableElements = modal2.querySelectorAll(focusableElementsString);
  // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];

  // Show the modal and overlay
  modal2.classList.add('show');
  modalOverlay2.classList.add('show');

  // Focus first child
  // firstTabStop.focus();
  const username = document.getElementById('username');
  username.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

        // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal2();
    }
  }
};









const submitAddReview = (e) => {
  // console.log(e);
  console.log('Form subbmitted!');
  e.preventDefault();
  closeModal();
};

const closeModal = () => {
  // Hide the modal and overlay
  modal.classList.remove('show');
  modalOverlay.classList.remove('show');

  const form = document.getElementById('review-form');
  form.reset();
  // Set focus back to element that had it before the modal was opened
  focusedElementBeforeModal.focus();
};

const closeModal2 = () => {
  // Hide the modal and overlay

  modal2.classList.remove('show');
  modalOverlay2.classList.remove('show');

  const form2 = document.getElementById('review-form2');
  form2.reset();

  // Set focus back to element that had it before the modal was opened
  focusedElementBeforeModal2.focus();
};

const setFocus = (evt) => {
  const rateRadios = document.getElementsByName('rate');
  const rateRadiosArr = Array.from(rateRadios);
  const anyChecked = rateRadiosArr.some(radio => { return radio.checked === true; });
  // console.log('anyChecked', anyChecked);
  if (!anyChecked) {
    const star1 = document.getElementById('star1');
    star1.focus();
    // star1.checked = true;
  }
};

const navRadioGroup = (evt) => {
  // console.log('key', evt.key, 'code', evt.code, 'which', evt.which);
  // console.log(evt);

  const star1 = document.getElementById('star1');
  const star2 = document.getElementById('star2');
  const star3 = document.getElementById('star3');
  const star4 = document.getElementById('star4');
  const star5 = document.getElementById('star5');

  if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(evt.key)) {
    evt.preventDefault();
    // console.log('attempting return');
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
      switch (evt.target.id) {
        case 'star1':
          star2.focus();
          star2.checked = true;
          break;
        case 'star2':
          star3.focus();
          star3.checked = true;
          break;
        case 'star3':
          star4.focus();
          star4.checked = true;
          break;
        case 'star4':
          star5.focus();
          star5.checked = true;
          break;
        case 'star5':
          star1.focus();
          star1.checked = true;
          break;
      }
    } else if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
      switch (evt.target.id) {
        case 'star1':
          star5.focus();
          star5.checked = true;
          break;
        case 'star2':
          star1.focus();
          star1.checked = true;
          break;
        case 'star3':
          star2.focus();
          star2.checked = true;
          break;
        case 'star4':
          star3.focus();
          star3.checked = true;
          break;
        case 'star5':
          star4.focus();
          star4.checked = true;
          break;
      }
    }
  }
};

var dialog = document.getElementById("popup");
function show() {

  dialog.show();

}
function closePopup() {

  dialog.close();

}

// Get the modal
var modalmsg = document.getElementById("modalmsg");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spanmsg = document.getElementsByClassName("closemsg")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modalmsg.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
spanmsg.onclick = function () {
  modalmsg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalmsg.style.display = "none";
  }
}
// Get the modal
var modalmsgSuccess = document.getElementById("modalmsgSuccess");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spanmsgSuccess = document.getElementsByClassName("closemsgSuccess")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modalmsg.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
spanmsgSuccess.onclick = function () {
  modalmsgSuccess.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalmsgSuccess.style.display = "none";
  }
}

// Get the modal
var modalmsg3 = document.getElementById("modalmsg3");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spanmsg3 = document.getElementsByClassName("closemsg3")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modalmsg3.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
spanmsg3.onclick = function () {
  modalmsg3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalmsg3.style.display = "none";
  }
}
// Get the modal
var modalmsg4 = document.getElementById("modalmsg4");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spanmsg4 = document.getElementsByClassName("closemsg4")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modalmsg3.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
spanmsg4.onclick = function () {
  modalmsg4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalmsg4.style.display = "none";
  }
}

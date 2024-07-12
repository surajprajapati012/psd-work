
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  let isValid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  // const city = document.getElementById('city');
  const aboutpro = document.getElementById('about-pro');
  // const bx = document.querySelectorAll('.bx');

  // Validation for name
  if (name.value === '') {
    alert('Please enter your name.');
    isValid = false;
  }
  

  // Validation for email using regex
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert('Please enter a valid email address.');
    isValid = false;
  }

  // Validation for phone using regex
  if (!/^\d{10}$/.test(phone.value)) {
    alert('Please enter a valid phone number.');
    isValid = false;
  }

  // Validation for message
  if (message.value === '') {
    alert('Please enter a message.');
    isValid = false;
  }

  // Validation for about-proj
  if (aboutpro.value === '') {
    alert('Please enter information about your project.');
    isValid = false;
  }

  // Validation for industry selection
  const selectedItems = document.querySelectorAll('.selected-item');
  if (selectedItems.length === 0) {
    alert('Please select an industry.');
    isValid = false;
  }

  if (isValid) {
    // Process the form (e.g., send data to a server or display a success message)
    console.log('Form is valid. Processing form...');
    this.submit(); // Optionally reset the form

    const selectedItem = document.querySelector('.selected-item');
    if (selectedItem) {
      selectedItem.classList.remove('selected-item');
    }
  }
  return false; // Prevent form submission
});

function changeColor(element) {
  // Remove selected-item class from all elements
  // var items = document.querySelectorAll('.bx');
  // items.forEach(function (item) {
  //   item.classList.remove('selected-item');
  // });
  // // Add selected-item class to the clicked element
  // element.classList.add('selected-item');
  element.classList.toggle("selected-item")
}


function front() {
    document.getElementById("front").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("frontt").classList.add("active-border");
    document.getElementById("backk").classList.remove("active-border");
}
function back() {
    document.getElementById("front").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("frontt").classList.remove("active-border");
    document.getElementById("backk").classList.add("active-border");
}

// --------------scrollbar------------
window.addEventListener('scroll', function() {
  // Calculate the scroll progress
  let scrollTop = window.pageYOffset;
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let progress = (scrollTop / totalHeight) * 100;

  // Update the width of the scroll bar indicator
  document.getElementById('top-bar').style.width = progress + '%';
});

// window.addEventListener('scroll',function(){
//     let scr =  window.pageYOffset
//   let fullheight = document.body.scrollHeight - window.innerHeight

//   let progress = (scr/fullheight) * 100;
//   document.getElementById('top-bar').style.width = `${progress}`
// })

const navScroll = (section) => {
    const location = document.getElementById(section)
    location.scrollIntoView({behavior:"smooth", block: "end"})
}

// Inquiry

var fields = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    question: document.getElementById('question')
}
  
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.length > 0);
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    return valid;
   }

   class Inquiry {
    constructor(firstName, lastName, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.question = question;
    this.date = new Date().toISOString()
    }
   }

function sendContact() {
    if (isValid()) {
        let user = new Inquiry(firstName.value, lastName.value, email.value, question.value)
        console.log(user)
    alert(`Thank you for your inquiry, ${user.firstName}, but currently the email function is down.`)
    } else {
        console.log('hello')
    alert('Opps! Something is missing.')
    }
}

// RIPPLE EFFECT

const btns = document.querySelectorAll(".btn-ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = e.target.offsetTop;
    let btn_left_pos = e.target.offsetLeft;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    const span = document.createElement("span");
    span.classList.add("ripple");
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 500);
  });
});
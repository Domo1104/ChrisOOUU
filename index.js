
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
    alert(`Thank you for your inquiry, ${user.firstName}, but currently the email function is down.`)
    } else {
    alert('Opps! Something is missing.')
    }
}


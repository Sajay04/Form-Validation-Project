
function displayError(id, error) {
  var errorElement = document.getElementById(id);
  errorElement.textContent = error;
}

function resetErrors() {
  var errorElements = document.getElementsByClassName('error-message');
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}

function resetForm() {
  document.getElementById('myForm').reset();
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  resetErrors();

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var zipcode = document.getElementById('zipcode').value;


  var isValid = true;

  if (fullName.length < 5) {
    displayError('fullNameError', 'Name must be at least 5 characters long');
    isValid = false;
  }

  if (email.indexOf('@') === -1) {
    displayError('emailError', 'Please enter a valid email');
    isValid = false;
  }

  if (phone.length !== 10 || phone === '123456789') {
    displayError('phoneError', 'Please enter a valid 10-digit phone number');
    isValid = false;
  }
 if (address.length < 5) {
    displayError('addressError', 'Address must be at least 5 characters long');
    isValid = false;
  }

  if (city.length === 0) {
    displayError('cityError', 'Please enter a city');
    isValid = false;
  }

  if (!/^\d{5}$/.test(zipcode)) {
    displayError('zipcodeError', 'Please enter a valid 5-digit zipcode');
    isValid = false;
  }
  if (password.length < 8 || password === 'password' || password === fullName) {
    displayError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name');
    isValid = false;
  }

  if (password !== confirmPassword) {
    displayError('confirmPasswordError', 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    resetForm();
  }
}
);

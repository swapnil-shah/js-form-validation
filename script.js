//Select all elements needed
const form = document.getElementById('form')
const formGroup = document.querySelectorAll('.form-group')
const inputUsername = document.getElementById('username')
const inputpassword = document.getElementById('password')
const inputPasswordConfirmation = document.getElementById('password-confirmation')
const inputTerms = document.getElementById('terms')
const errorListContainer = document.querySelector('.errors-list')
const allInputs = document.querySelectorAll('input')

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

form.addEventListener('submit', e => {
  e.preventDefault();
  const errorsArr = []
  showErrors(errorsArr)
})

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  errorListContainer.innerHTML = ''
  if (!inputTerms.checked || inputPasswordConfirmation.value.length < 0 || inputpassword.value.length < 0 || inputUsername.value.length < 0) {
    !inputUsername.value && errorMessages.push('username should be least 6 characters long')
    !inputpassword.value && errorMessages.push('password should be least 10 characters long')
    !inputPasswordConfirmation.value && errorMessages.push('reeenter the password')
    !inputTerms.checked && errorMessages.push('terms checkbox should be checked')
  }

  errorMessages.forEach(error => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(error));
    errorListContainer.appendChild(li);
  });
  document.querySelector('.errors').classList.add('show');
}
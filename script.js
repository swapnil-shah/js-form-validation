const form = document.getElementById('form')
const inputUsername = document.getElementById('username')
const inputpassword = document.getElementById('password')
const inputPasswordConfirmation = document.getElementById('password-confirmation')
const inputTerms = document.getElementById('terms')
const errorList = document.querySelector('.errors-list')
form.addEventListener('submit', e => {
  const errorMessages = [];
  clearErrors();
  if (inputUsername.value.length < 6) {
    errorMessages.push("Username must contain at least 6 characters")
  }
  if (inputpassword.value.length < 10) {
    errorMessages.push("Username must contain at least 10 characters")
  }
  if (inputPasswordConfirmation.value !== inputpassword.value) {
    errorMessages.push("Passwords must match")
  }
  if (!inputTerms.checked) {
    errorMessages.push("You must accept the terms")
  }
  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages)
  }
  console.log("~ errorMessages", errorMessages)
})

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0])
  }
  document.querySelector('.errors').classList.remove('show');
}

function showErrors(errorMessages) {
  errorMessages.forEach(errorMessage => {
    let li = document.createElement("li");
    li.innerText = errorMessage;
    errorList.appendChild(li);
  });
  document.querySelector('.errors').classList.add('show');
}
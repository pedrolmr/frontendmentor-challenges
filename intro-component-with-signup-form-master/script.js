const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const showError = (input, message) => {
  if (!input.classList.contains('input-error')) {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = message;

    input.parentNode.insertBefore(errorMessage, input.nextSibling);
    errorMessage.className = 'error-message';

    const warningIcon = document.createElement('i');
    warningIcon.className = 'fa fa-exclamation-circle';

    input.parentNode.insertBefore(warningIcon, input.nextSibling);
    errorMessage.className = 'error-message';

    input.className = 'input-error';
    input.style.marginBottom = '2%';
  }
};

const showSuccess = (input, message) => {
  if (input.classList.contains('input-error')) {
    input.style.border = '1px solid rgb(222, 222, 222)';

    input.nextSibling.classList.remove('fa-exclamation-circle');
    input.nextSibling.nextSibling.innerText = '';
    input.style.marginBottom = '';
  }
};

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Looks like this is not an email');
  }
};

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} cannot be empty`);
    } else {
      showSuccess(input);
    }
  });
};

const getFieldName = (input) => {
  return input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([firstname, lastname, email, password]);
  checkEmail(email);
});

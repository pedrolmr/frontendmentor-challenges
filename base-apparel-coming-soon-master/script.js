const input = document.querySelector('.input');
const button = document.querySelector('.button');
const cta = document.querySelector('.cta');
const message = document.querySelector('.content .error-message');
const warningIcon = document.querySelector('i.fa-exclamation-circle');

button.disabled = false;

console.log(input.firstElementChild);
console.log(button);
console.log('cta', cta.lastElementChild);

console.log('warningIcon', warningIcon);

const showError = () => {
  input.firstElementChild.className = 'input-error';
  warningIcon.style.display = 'block';
  const errorMessage = document.createElement('p');
  errorMessage.innerHTML = 'Please provide a valid email';
  cta.appendChild(errorMessage);
  errorMessage.className = 'error-message';
  console.log('errorMessage', errorMessage);
};

const showSuccess = () => {
  input.firstElementChild.classList.remove('input-error');
  warningIcon.style.display = 'none';
  cta.removeChild(cta.lastElementChild);
};

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  const inputVal = input.firstElementChild.value;

  if (!validateEmail(inputVal)) {
    showError();
  } else {
    showSuccess();
    console.log('success!!');
  }
});

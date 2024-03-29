const registerForm = document
  .querySelector('.login-form')
  .addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;
  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
  }
  const formValue = {
    email: userEmail.trim(),
    password: userPassword.trim(),
  };
  console.log(formValue);
  form.reset();
}

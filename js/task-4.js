const registerForm = document
  .querySelector('.login-form')
  .addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();
  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
    form.reset();
    return;
  }
  const formValue = {
    email: userEmail,
    password: userPassword,
  };
  console.log(formValue);
  form.reset();
}

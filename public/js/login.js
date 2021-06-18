const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  if (usernameEl && passwordEl) {
    const response = await fetch('/api/user', { // '/api/user/login'
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value, // username.value
        password: passwordEl.value, // password.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(usernameEl);
    console.log(passwordEl);

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

const loginFormHandler = async (event) => {
    event.preventDefault()
  
    const email = document.querySelector('#user-email').value.trim()
    const pass = document.querySelector('#user-password').value.trim()
  
    if (email && pass) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, pass }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        console.log('logged in')
        const greet = document.querySelector('#greeting h1')
        response.body.user
        // console.log(greet.textContent)

        document.location.replace('/')
      } else {
        alert("Incorrect username or password")
      }
    }
  }
  
  document
    .querySelector('#login-form').addEventListener('submit', loginFormHandler)


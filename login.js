signIn = () => {
let email = usr.value
let password = pwd.value
localStorage.setItem('currentUser', JSON.stringify(email))
let bigStorage = JSON.parse(localStorage.getItem('project'))
findMe = bigStorage.find((val)=>val.email == email && val.password == password)
  if (findMe) {
       alert("Login Successful")
       window.location.href=('dashboard.html')
  }
  else{
      alert('incorrect Email or Password')

  }

}
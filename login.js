signIn = () => {
let email = (usr.value.trim()).toLowerCase()
let password = pwd.value
localStorage.setItem('currentUser', JSON.stringify(email))
let bigStorage = JSON.parse(localStorage.getItem('project'))
console.log(email);
  if (bigStorage==null) {
    alert('you havent register or details incorrect')
  }
  else if (bigStorage!=null) {
    findMe = bigStorage.find((val)=>val.email == email && val.password == password)
    if (findMe) {
       alert("Login Successful")
       window.location.href=('dashboard.html')
    }
    else{
      alert('incorrect Email or Password')
    }
  }
}
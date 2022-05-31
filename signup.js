// To fill form

function cont(){
    let  accountType = select.value
    localStorage.setItem('acc' ,JSON.stringify(accountType))
    document.getElementById("unk").innerHTML = 
    `<div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="row justify-content-center py-none py-md-5" id="unk">
            <div class="col-12" id="unk">
              <p class="display-2 px-md-5 text-dark text-center">Create an Account</p>
              <small id="fname" style="color: red; text-align=center"></small>
            </div>
            <form role="form" onsubmit="sub(event)">
                <div class=" form-group">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100 text-capitalize" placeholder="Firstname" id="fName" >
                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100 text-capitalize" placeholder="lastname" id="lName" >
                    </div>
                </div>
            </div>
            <div class=" form-group">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input type="" class="form-control w-100" placeholder="Email" id="email" >
                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="password" class="form-control w-100" placeholder="Password" id="passwrd" >
                    </div>
                </div>
            </div>
            <div class=" form-group">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input type="number" class="form-control w-100" placeholder="Phone no" id="phone" >
                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="date"  class="w-100 h-100" max="2004-01-01" id="bod" >
                    </div>
                </div>
            </div>
            <div>
                <p class="text-center">Address</p>
            </div>
            <div class=" form-group">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100" placeholder="Street" id="street" >
                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100 text-capitalize " placeholder="City" id="city" >
                    </div>
                </div>
            </div>
            <div class=" form-group">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100 text-capitalize" placeholder="State" id="state" >
                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control w-100 text-capitalize" placeholder="Country" id="country" >
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8 mt-3">
                    <button type="submit" class="btn btn-primary w-100 mb-3">submit</button>
                </div>
            </div>
            </form>
        </div>
</div>`
}


function sub(event)
{
    event.preventDefault()

    // local storage for current user
    accType = JSON.parse(localStorage.getItem('acc'))
    console.log(accType);

    // localStorage for all user

    if (localStorage.getItem("project")) {
        newUser = JSON.parse(localStorage.getItem("project"))
    }
    else {
        newUser = []
    }

    // object for each user

    eachUser = {
        firstName : (fName.value).trim(),
        lastName : lName.value.trim(),
        email :email.value,
        mobile : phone.value.trim(),
        password : passwrd.value.trim(),
        street : street.value.trim(),
        city : city.value.trim(),
        state : state.value.trim(),
        country : country.value.trim(),
        accountType : accType.trim(),
        welcomeBalance:(7000).toFixed(2),
        accNum : Math.floor(Math.random()*(2000000000-1000000000)+1000000000),
        dob : bod.value,
        pin : '' ,
        e : new Date().toLocaleDateString(),
        f : new Date().toLocaleTimeString(),
        transactions : [],
        deposit : [],
        transfer : []
    }

    // form validations

    // to check existing user
    findMe = newUser.find((val)=>val.email == eachUser.email || val.mobile == eachUser.mobile)
   

    // firstname validation
   if (eachUser.firstName == '') {
        document.getElementById('fname').innerHTML = 'First Name cannont be empty!'
        return false;
        
    }
    else if (eachUser.firstName.length <2) {
        document.getElementById('fname').innerHTML = 'First Name cannont less than two character !'
        return false;
        
    }


    // last name validation
    if (eachUser.lastName == '') {
        document.getElementById('fname').innerHTML = 'Last Name cannont be empty !'
        return false;
    }
    else if (eachUser.lastName.length <2) {
        document.getElementById('fname').innerHTML = 'Last Name cannont less than two character !'
        return false;
    }

    // email validation
    var at = (eachUser.email).indexOf('@');
    var dot = (eachUser.email).lastIndexOf('.');
    if (at<1||dot<at+2||dot+2 >= (eachUser.email).length) 
    {
        document.getElementById('fname').innerHTML = 'Not a valid email !'
        return false;
    }
  
    // password Validation 
   if (eachUser.password == '') {
    document.getElementById('fname').innerHTML = 'Password cannot be empty or  !'
      return false;
   }
   else if (eachUser.password.length < 6) {
    document.getElementById('fname').innerHTML = 'Password cannot be less than 6 !'
    return false;
    }

    // phone number validation
   if (eachUser.mobile =='') {
    document.getElementById('fname').innerHTML = 'Phone number cannot be empty !'
       return false;
   }
   else if (isNaN(eachUser.mobile)) {
    document.getElementById('fname').innerHTML = 'Phone number should be in digit !'
       return false;
   }
   else if(eachUser.mobile.length != 11){
    document.getElementById('fname').innerHTML = 'Phone number must be 11 digits !'
       return false;
   }

    // date of birth validation
    if (eachUser.dob == '') {
        document.getElementById('fname').innerHTML = 'Please put your date of birth !'
        return false;
    }

    // street validation
    if (eachUser.street == '') {
    document.getElementById('fname').innerHTML = 'Please input your Street !'
    return false;
    }
    // city validation
    if (eachUser.city == '') {
        document.getElementById('fname').innerHTML = 'Please input your City !'
        return false;
    }
    // state validation
    if (eachUser.state == '') {
        document.getElementById('fname').innerHTML = 'Please input your State !'
        return false;
    }
    // country validation
    if (eachUser.country == '') {
        document.getElementById('fname').innerHTML = 'Please input your Country !'
        alert('') 
        return false;
    }
    // if all conditions are met, save details in local stoorage
    if (findMe) 
    {
        document.getElementById('fname').innerHTML = 'User Already exist!'
        return false
    }
    else  (eachUser.firstName&&eachUser.lastName&&eachUser.email&&eachUser.mobile&&eachUser.password&&eachUser.street&&eachUser.city&&eachUser.state&&eachUser.country&&eachUser.dob !=='') 
    {
        newUser.push(eachUser)
        localStorage.setItem("project", JSON.stringify(newUser))
        alert("Registration Successful")
        location.href = ('loginpage.html')
    }

}
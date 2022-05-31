// on load of the page 
load=()=>{
    let a = JSON.parse(localStorage.getItem('currentUser')) // storage for current user
    let b = JSON.parse(localStorage.getItem('project'))  // storage for all user
    findMe= b.find((val)=> val.email == a)   // validating cureent user with details in storage
 
    // if current user is true , enter the code n check if iuser has created pin
    if (findMe) {
        if (findMe.pin == '') {
        document.getElementById('disp').innerHTML = `
        <div class="row justify-content-center">
            <p class="text-center display-6 fw-bold mt-5">Create Pin</p>
            <label for="" class="text-muted text-center">Enter Pin :</label>
            <input type="text" class=" form-control w-75" id="pin1">
            <label for="" class="text-muted mt-3 text-center">Re-Enter Pin :</label>
            <input type="text" class=" form-control w-75" id="pin2">
            <button href="" type="button" class="btn btn-primary mt-3 mb-5 btn-validate w-50" onclick="createPin()">Submit<button>
        </div>
    `
        }
    }
    
}

createPin = () => {
    let p1 = pin1.value
    let p2 = pin2.value
    let bigStorage = JSON.parse(localStorage.getItem('project'))
    let loggedIn = JSON.parse(localStorage.getItem('currentUser'))
    let userInfo = bigStorage.find((val) => val.email == loggedIn)
    if (p1.length > 4) {
        alert('pin must be four digit');
        return false;
    }
    else if (userInfo) {
        if (p1==p2) {
           userInfo.pin = p1
           localStorage.setItem('project', JSON.stringify(bigStorage))
           alert('pin create successfully')
           location.href = ('transferpage.html')
        }
        else {
            alert('value entered doesnt matched')
        }
    }
    
}

// to validate user recipient info

validate = () =>{
    let b = JSON.parse(localStorage.getItem('project')) // all user storage
    let c = accNo.value     // recipient account num
    let d = parseFloat(amount.value).toFixed(2)  // amount to be sent
    let n = narrations.value   // description
    searchMe= b.find((val)=> val.accNum == c && amount.value !='')  // validating 

    if (searchMe) {
            document.getElementById('disp').innerHTML = `
        <div class="col-md-9 " style="height: 90vh;">
            <div class="container align-items-center mt-5">
                <div class="row justify-content-center">
                    <p class="text-center display-6 fw-bold">Internal Bank Transfer</p>
                    <label for="" class="text-muted">Account No :</label>
                    <div class="alert alert-primary" role="alert" id="accNo1"></div>
                    <label for="" class="text-muted">Account Name :</label>
                    <div class="alert alert-primary" role="alert" id="accName"></div>
                    <label for="" class="text-muted mt-3">Amount :</label>
                    <div class="alert alert-primary" role="alert" id="amt"></div>
                    <label for="" class="text-muted mt-3">Narrations :</label>
                    <div class="alert alert-primary" role="alert" id="narate"></div>
                    <input type="number" class="form-control" maxlength="10" id="pin"></input>
                    <button href="" type="button" class="btn btn-primary mt-2 btn-validate w-50" onclick="send()">Transfer</button>
                </div>
            </div>
        </div>`
        document.getElementById('accNo1').innerHTML = c;
        document.getElementById('accName').innerHTML = searchMe.firstName+' '+searchMe.lastName;
        document.getElementById('amt').innerHTML = d;
        document.getElementById('narate').innerHTML = n;
    }
    else{
        alert('user not found')
        document.getElementById('err').innerHTML = 'User Not Found,please check Account number and try again'
    }
        
}

// if previous conditions  are met, come down here to perform this code

send = () => {
  let activeUser = JSON.parse(localStorage.getItem('currentUser'));
  let allUser = JSON.parse(localStorage.getItem('project'));
  let c = document.getElementById('accNo1').innerHTML;
  let  d = document.getElementById('amt').innerHTML;
  let e = document.getElementById('accName').innerHTML;
  let validate = pin.value
  let newAmt = parseFloat(d)


//   sendder

findMe = allUser.find((val) => val.email==activeUser);

    if (validate == '') {
        alert('pin cannot be empty')
        return false
    }

    else if (findMe.pin != validate) {
        alert('incorrect pin');
        return false
    }
    
    else if (findMe.accNum == c) {
        alert('cant transfer to self return false')
        return false
    }
   else if (findMe && findMe.welcomeBalance>newAmt) 
   {
       let t = new Date().toLocaleDateString();
       let y = new Date().toLocaleTimeString();
       let toyfat = parseFloat(findMe.welcomeBalance);
       findMe.welcomeBalance = Number(toyfat-newAmt).toFixed(2);
       let arr = {recipient:e,amountSend:-d,accNo:c,asiko:t,ojo:y,color:'red'};
       findMe.transactions.unshift(arr);
       findMe.transfer.push(d)
       localStorage.setItem('project', JSON.stringify(allUser));
       alert('Transaction Successful')
       location.href = ('dashboard.html')
   }
   else{
       alert('insufficient funds')
   }

//    receiver

searchMe = allUser.find((val) => val.accNum == c);
    if (searchMe&&findMe.welcomeBalance>newAmt) {
        fullName = findMe.firstName+' '+findMe.lastName;
        t = new Date().toLocaleDateString();
        y = new Date().toLocaleTimeString();
        let cabasa = parseFloat(searchMe.welcomeBalance)
       searchMe.welcomeBalance = (cabasa + newAmt).toFixed(2)
       let arrr = {sender:fullName,accNo:findMe.accNum,amountRecieved:"+"+d,asiko:t,ojo:y,color:'green'};
       searchMe.transactions.unshift(arrr);
       searchMe.deposit.push(d)
        localStorage.setItem('project', JSON.stringify(allUser));
    }
}
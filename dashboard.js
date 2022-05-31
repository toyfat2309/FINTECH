dashboard = () =>{
   let user = JSON.parse(localStorage.getItem('currentUser')) // current user email
   let bigStorage = JSON.parse(localStorage.getItem('project')) // local storage for all user
   let random = 4407+' '+ Math.floor(Math.random()*(2000-1000)+1000)+" "+Math.floor(Math.random()*(3000-2000)+2000)+' '+Math.floor(Math.random()*(4000-3000)+3000)  // generating account number

   findMe = bigStorage.find((val)=>val.email==user) // to locate current user if it is true

   if (findMe) {
        d = new Date()
        dd = d.getMonth()+1
        g = String(dd).padStart(2,'0')
        f = d.getFullYear()+4
       document.getElementById('bal').innerHTML = findMe.welcomeBalance
       document.getElementById('since').innerHTML = findMe.e
       document.getElementById('since2').innerHTML = findMe.e
       document.getElementById('name').innerHTML = findMe.firstName
       document.getElementById('name2').innerHTML = (findMe.firstName).toUpperCase()
       document.getElementById('cardName').innerHTML = findMe.firstName+' '+ findMe.lastName
       document.getElementById('exp').innerHTML ='Exp Date :'+' '+ (g+'/'+f)
       document.getElementById('disip').innerHTML = random

// table for transaction history 
       
        // tee = '<table class="table"><thead>'
        // tee +='<th>S/N</th><th>NAME</th><th>ACCOUNT NO</th><th>AMOUNT</th><th>DATE</th><th>TIME</th>'
        // tee +='<tbody id="lakes">'
        tee = ''

       if (findMe.transactions.length==0) {
           tee += '<tr><td colspan="6"><p id="no">No transaction has taken place, please transfer to view history</p></td></tr>'
        document.getElementById('lakes').innerHTML = tee
        console.log(findMe.transactions.length);
       }
       else{
            

        for (i =0; i< findMe.transactions.length; i++) 
        {
            if (i==3) {
                break;
            }
                 let SN = i+1
             if (findMe.transactions[i].color == 'red') {
                 tee += `<tr><td>${SN}</td>`
                 tee += `<td>${findMe.transactions[i].recipient}</td>`
                 tee += `<td>${findMe.transactions[i].accNo}</td>`
                 tee += `<td class="text-danger">${findMe.transactions[i].amountSend}</td>`
                 tee += `<td>${findMe.transactions[i].asiko}</td>`
                 tee += `<td>${findMe.transactions[i].ojo}</td>`
             }
                 else {
                     tee += `<tr><td>${SN}</td>`
                     tee += `<td>${findMe.transactions[i].sender}</td>`
                     tee += `<td>${findMe.transactions[i].accNo}</td>`
                     tee +=`<td class="text-success">${findMe.transactions[i].amountRecieved}</td>`
                     tee += `<td>${findMe.transactions[i].asiko}</td>`
                     tee += `<td>${findMe.transactions[i].ojo}</td>`
                 }
         }
         document.getElementById('lakes').innerHTML = tee
       }
      
   }

// displaying of inflow , outflow and total

   if (findMe.transfer == '') {
       document.getElementById('outflow').innerHTML = 0
   }

   else {
       let transferArr = 0
       for (let i = 0; i < findMe.transfer.length; i++) 
       {
          transferArr -= Number(findMe.transfer[i])
       }
       document.getElementById('outflow').innerHTML = transferArr.toFixed(2)
   }

   if (findMe.deposit == '') {
       document.getElementById('inflow').innerHTML = 0
   }

   else {

       let deopsitArr  = 0
       for (let i = 0; i < findMe.deposit.length; i++) 
       {
          deopsitArr += Number(findMe.deposit[i])
       }
       document.getElementById('inflow').innerHTML = deopsitArr.toFixed(2)
   }

   let income = (document.getElementById('inflow').innerHTML)
   let expenses = document.getElementById('outflow').innerHTML
   let total = eval(income+expenses).toFixed(2)
   document.getElementById('netTotal').innerHTML = total


   function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
  let myCanvas = document.getElementById('myChart')
  let config = 
  {type : 'line',
   data :{
       labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
       datasets:[{label:'monthly income n expenses', data:[0.5,0.2,0.7,0.4,1.0]}]
   },
  };

  let myChart = new Chart(myCanvas, config)
}


    

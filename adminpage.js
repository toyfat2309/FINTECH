admin = () => {
   sss = JSON.parse(localStorage.getItem('project'));
//    var showUser = '<table class"table"><thead>';
//        showUser += '<th>S/N<th><th>Fname<th><th>Lname<th><th>Account No<th><th>Date<th><th>Time<th></thead>';
//        showUser += '<tbody>';
        showUser = '<table class="table"><thead>'
        showUser +='<th>S/N</th><th>Firstname</th><th>Lastname</th><th>Account No</th><th>DATE</th><th>TIME</th></thead>'
        showUser +='<tbody>'
       for (let i = 0; i < sss.length; i++) 
       {
          var sn = i+1;
        showUser += `<tr><td>${sn}</td>`
        showUser += `<td>${sss[i].firstName}</td>`
        showUser += `<td>${sss[i].lastName}</td>`
        showUser += `<td>${sss[i].mobile}</td>`
        showUser += `<td>${sss[i].e}</td>`
        showUser += `<td>${sss[i].dob}</td>`
       }
       document.getElementById('iii').innerHTML = showUser
       console.log();
}

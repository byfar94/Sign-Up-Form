

let check = function() {
    let passOne = document.getElementById('password').value;
    let passTwo = document.getElementById('confirmPass').value;

    if ((passOne == passTwo) && (passOne && passTwo != "")) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else if ((passOne != passTwo) && (passOne && passTwo != "")) {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    } else {
        document.getElementById('message').style.color = 'black';
        document.getElementById('message').innerHTML = "Pending Match";
    }
console.log(passOne);
console.log(passTwo);
  }
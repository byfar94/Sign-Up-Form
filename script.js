let checkPasswordMatching = function () {
  let passTwoDOM = document.getElementById("confirmPass");

  passTwoDOM.addEventListener("input", () => {
    let passOne = document.getElementById("password").value;
    let passTwo = document.getElementById("confirmPass").value;
    console.log(passOne);
    console.log(passTwo);
    if (passOne == passTwo && passOne && passTwo != "") {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerHTML = "matching";
    } else if (passOne != passTwo && passOne && passTwo != "") {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerHTML = "not matching";
    } else {
      document.getElementById("message").style.color = "black";
      document.getElementById("message").innerHTML = "Pending Match";
    }
  });
};
checkPasswordMatching();

//form validation for name & password
function formValidation() {
  //DOM elements:
  let form = document.querySelector("#form");
  let nameFirst = document.querySelector("#first-name");
  let nameLast = document.querySelector("#last-name");
  let passOne = document.getElementById("password");
  let passTwo = document.getElementById("confirmPass");

  //error messages
  let errorMsgBox = document.querySelector("#error-msg");
  errorMsgBox.style.color = "red";
  let errorMessages = [];
  form.addEventListener("submit", (e) => {
    errorMessages = [];
    //name
    //name blank
    if (nameFirst.value.length == "" || nameLast.value.length == "") {
      errorMessages.push("First and Last name are required");
    }
    //name length
    else if (nameFirst.value.length < 2 || nameLast.value.length < 2) {
      errorMessages.push("Name must be longer than 4 characters");
    }
    //passowrd
    //password length
    if (
      passOne.value.length < 8 ||
      passOne.value.length > 16 ||
      passTwo.value.length < 8 ||
      passTwo.value.length > 16
    ) {
      errorMessages.push("password must be between 8 and 16 characters");
    }
    if (errorMessages.length > 0) {
      e.preventDefault();
      errorMsgBox.innerText = errorMessages.join(`,  `);
    }
  });
}
formValidation();

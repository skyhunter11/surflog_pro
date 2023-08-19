console.log("howdy motherfucker");

//input references
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

//error references
const firstname_error = document.querySelector("#firstname_error");
const lastname_error = document.querySelector("#lastname_error");
const email_error = document.querySelector("#email_error");
const tel_error = document.querySelector("#tel_error");
const password_error = document.querySelector("#password_error");
const confirm_error = document.querySelector("#confirm_error");

firstname.addEventListener("input", function(event){
    if (firstname.value === "") {
        firstname_error.textContent = "Please enter your first name";
    } else {
        firstname_error.textContent = "";
    }
});

lastname.addEventListener("input", function(event){
    if (lastname.value === "") {
        lastname_error.textContent = "Please enter your last name"
    } else {
        lastname_error.textContent = "";
    }
});

email.addEventListener("input", function(event){
    if (email.validity.typeMismatch) {
        email_error.textContent = "Please enter a valid email";
    } else {
        email_error.textContent = "";
    }
});


tel.addEventListener("input", function(event) {
    if (tel.validity.patternMismatch) {
        tel_error.textContent = "Please enter a 10 digit phone number";
    } else {
        tel_error.textContent = "";
    }
});

password.addEventListener("input", function (event) {
    if (password.validity.patternMismatch){
      const currentValue = password.value;
      const regExpCap = /[A-Z]/g;
      const regExpDig = /[0-9]/g;
      let result = '';
      if (regExpCap.test(currentValue)){
        result += '';
      } else {
        result += `Missing at least 1 capital letter. `;
        result += '\n';
      }


      if (regExpDig.test(currentValue)){
        result += '';
      } else {
        result += 'Missing at least 1 number. ';
        result += '\n';
      }

      if (currentValue.length < 9){
        result += 'Password must be at least 8 characters. '
        result += '\n';
      } else {
        result += '';
      }

      console.log(result);
      password_error.textContent = result;


    } else {
      password_error.textContent = '';
    }
  });

  confirm.addEventListener("input", function (event) {
    if (confirm.value !== password.value) {
      confirm_error.textContent = 'Passwords do not match';
    } else {
      confirm_error.textContent = '';
    }
  }); 


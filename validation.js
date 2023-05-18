const form = document.getElementById("form");
const password1No = document.getElementById("password1");
const password2No = document.getElementById("password2");
const message = document.getElementById("message");
const messageContainer = document.querySelector(".message-container");

let isValid = false;
function validateForm() {
  isValid = form.checkValidity();
  //style main message for error

  if (isValid === false) {
    message.textContent = "please fillout all filds";
    message.style.color = "red";
    messageContainer.style.color = "red";
  } else {
    console.log("Good Jop");
  }
  //check to see if password match
  if (password1No.value === password2No.value) {
    passwordsMatch = true;
    password1No.style.color = "green";
    password2No.style.color = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "make sure passwords match";
    message.style.color = "red";
    messageContainer.style.color = "red";
    password1No.style.bordercolor = "red";
    password2No.style.bordercolor = "red";
  }

  //if form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "successfully registered";
    message.style.color = "green";
    messageContainer.style.color = "green";
  }
}

function storeFormData(){
    const user={
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  //validate form
  validateForm();
  //submit data if valid
  if(isValid&&passwordsMatch){
    storeFormData();
  }
}

//event listner
form.addEventListener("submit", processFormData);

if (isValid === false) {
  message.textContent = "please fillout all filds";
  message.style.color = "red";
  messageContainer.style.color = "red";
} else {
  console.log("Good Jop");
}

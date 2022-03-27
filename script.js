function divContainerCreate() {
  let div = document.createElement("div");

  div.className = "row align-items-center";
  div.id = "container";
  document.body.appendChild(div);
}

function divColCreate() {
  let div = document.createElement("div");

  div.className = "col";
  div.id = "col";

  let container = document.getElementById("container");
  //   console.log(container);

  container.appendChild(div);
}

function divCardCreate() {
  let div = document.createElement("div");

  div.className = "card";
  div.id = "card";

  let divIdCol = document.getElementById("col");
  divIdCol.appendChild(div);
}

function imgCreate() {
  let img = document.createElement("img");

  img.className = "card-img-top";
  img.setAttribute("src", "../../images/crypto-02.webp");

  let divIdCard = document.getElementById("card");
  divIdCard.appendChild(img);
}

function divCardBodyCreate() {
  let div = document.createElement("div");

  div.className = "card-body";
  div.id = "card-body";

  let divIdCard = document.getElementById("card");
  divIdCard.appendChild(div);
}

function h5DivCardBodyCreate() {
  let h5 = document.createElement("h5");

  h5.className = "card-little";
  h5.id = "card-little";
  h5.innerText = "🌏 Change your mind and learn about Cryptocurrency 🌏";

  let divIdCardBody = document.getElementById("card-body");
  //   console.log(divIdCardBody);
  divIdCardBody.appendChild(h5);
}

function divButtonsCardBodyCreate() {
  let div = document.createElement("div");

  div.id = "buttons";
  div.className = "d-grid gap-2 col-6 mx-auto";

  let divIdCardBody = document.getElementById("card-body");
  divIdCardBody.appendChild(div);
}

function signInAndSignUpButtonCreate() {
  let signInButton = document.createElement("a");
  signInButton.className = "btn btn btn-primary";
  signInButton.id = "btn btn btn-primary";
  signInButton.setAttribute("type", "button");
  signInButton.setAttribute("data-bs-toggle", "modal");
  signInButton.setAttribute("data-bs-target", "#staticBackdrop");
  signInButton.innerText = "Sign In";

  let divButtons = document.getElementById("buttons");
  divButtons.appendChild(signInButton);

  let signUpButton = document.createElement("a");
  signUpButton.className = "btn btn btn-danger";
  signUpButton.id = "btn btn btn-danger";

  signUpButton.setAttribute("type", "button");
  signUpButton.setAttribute("data-bs-toggle", "modal");
  signUpButton.setAttribute("data-bs-target", "#staticBackdrop-signUp");
  signUpButton.innerText = "Sign Up";

  divButtons.appendChild(signUpButton);
}

// MODAL SIGN IN

function divModalSignInCreate() {
  let div = document.createElement("div");

  div.className = "modal fade";
  div.id = "staticBackdrop";
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "staticBackdropLabel");
  div.setAttribute("data-bs-keyboard", "false");

  let divCardBodyGet = document.getElementById("card-body");
  divCardBodyGet.appendChild(div);
}

function divModalDialogCreate() {
  let div = document.createElement("div");
  div.className = "modal-dialog";
  div.id = "modal-dialog-01";

  let divModalFadeGet = document.getElementById("staticBackdrop");

  divModalFadeGet.appendChild(div);
}

function divModalContentId01Create() {
  let div = document.createElement("div");

  div.className = "modal-content";
  div.id = "modal-content-01";

  let divModalDialog = document.getElementById("modal-dialog-01");

  divModalDialog.appendChild(div);
}

function divModalHeaderId01Create() {
  let div = document.createElement("div");

  div.className = "modal-header";
  div.id = "modal-header-01";

  let divModalContent = document.getElementById("modal-content-01");
  divModalContent.appendChild(div);
}

function h5ModalTitleCreate() {
  let h5 = document.createElement("h5");

  h5.className = "modal-title";
  h5.id = "staticBackdropLabel";
  h5.innerText = "🚨 Never share your email and password.";

  let divModalHeader = document.getElementById("modal-header-01");

  divModalHeader.appendChild(h5);
}

function buttonBtnCloseCreate() {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");
  button.className = "btn-close";
  button.id = "btn-close";

  let divModalHeader = document.getElementById("modal-header-01");
  divModalHeader.appendChild(button);
}

function divModalBodyId01Create() {
  let div = document.createElement("div");
  div.className = "modal-body";
  div.id = "modal-body-01";

  let divModalContent = document.getElementById("modal-content-01");
  divModalContent.appendChild(div);
}

function emailLabelCreateSignIn() {
  let label = document.createElement("label");

  label.setAttribute("for", "email");
  label.innerText = "Email";
  label.id = "label-email";

  let modalBody = document.getElementById("modal-body-01");

  modalBody.appendChild(label);
}

function emailInputCreateSignIn() {
  let input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("name", "email");
  input.id = "input-email-signIn";

  let modalBody = document.getElementById("modal-body-01");

  modalBody.appendChild(input);
}

function passwordLabelCreateSignIn() {
  let label = document.createElement("label");
  label.setAttribute("for", "password");
  label.innerText = "Password";

  let input = document.createElement("input");
  input.id = "input-password-signIn";
  input.setAttribute("type", "password");
  input.setAttribute("name", "password");

  let modalBody = document.getElementById("modal-body-01");

  modalBody.appendChild(label);
  modalBody.appendChild(input);
}

function footerModalCreate() {
  let div = document.createElement("div");
  div.className = "modal-footer";
  div.id = "modal-footer-01";

  let divModalContent = document.getElementById("modal-content-01");
  divModalContent.appendChild(div);
}

function buttonFooterCreate() {
  let a = document.createElement("a");

  a.setAttribute("href", "templates/main/index.html");

  let input = document.createElement("input");
  input.id = "footer-button-01";
  input.className = "btn btn-primary";
  input.setAttribute("data-bs-dismiss", "modal");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Sign In");
  input.setAttribute("onClick", "teste()");

  a.appendChild(input);

  let divModalContent = document.getElementById("modal-content-01");
  divModalContent.appendChild(a);
}

// MODAL SIGN UP

function divModalFadeCreate() {
  let div = document.createElement("div");

  div.className = "modal fade";
  div.id = "staticBackdrop-signUp";
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "staticBackdropLabel");
  div.setAttribute("aria-hidden", "true");

  let cardBody = document.getElementById("card-body");

  cardBody.appendChild(div);
}

function divModalDialog02Create() {
  let div = document.createElement("div");
  div.className = "modal-dialog";
  div.id = "modal-dialog-02";

  let divModalFadeGet = document.getElementById("staticBackdrop-signUp");

  divModalFadeGet.appendChild(div);
}

function divModalContentId02Create() {
  let div = document.createElement("div");

  div.className = "modal-content";
  div.id = "modal-content-02";

  let divModalDialog = document.getElementById("modal-dialog-02");

  divModalDialog.appendChild(div);
}

function divModalHeaderId02Create() {
  let div = document.createElement("div");

  div.className = "modal-header";
  div.id = "modal-header-02";

  let divModalContent = document.getElementById("modal-content-02");
  divModalContent.appendChild(div);
}

function h5ModalTitleCreateSignUp() {
  let h5 = document.createElement("h5");

  h5.className = "modal-title";
  h5.id = "staticBackdropLabel";
  h5.innerText = "Create Account.";

  let divModalHeader = document.getElementById("modal-header-02");

  divModalHeader.appendChild(h5);
}

function buttonBtnCloseCreateSignUp() {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");
  button.className = "btn-close";
  button.id = "btn-close";

  let divModalHeader = document.getElementById("modal-header-02");
  divModalHeader.appendChild(button);
}

function divModalBodyIdCreateSignUp() {
  let div = document.createElement("div");
  div.className = "modal-body";
  div.id = "modal-body-02";

  let divModalContent = document.getElementById("modal-content-02");
  divModalContent.appendChild(div);
}

function nameLabelInputCreateSignUp() {
  let label = document.createElement("label");
  label.setAttribute("for", "name");
  label.innerText = "Name";

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "name");
  input.id = "input-name-signUp";

  let modalBody = document.getElementById("modal-body-02");

  modalBody.appendChild(label);
  modalBody.appendChild(input);
}

function emailLabelCreateSignUp() {
  let label = document.createElement("label");

  label.setAttribute("for", "email");
  label.innerText = "Email";
  label.id = "label-email";

  let modalBody = document.getElementById("modal-body-02");

  modalBody.appendChild(label);
}

function emailInputCreateSignUp() {
  let input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("name", "email");

  input.id = "input-email-signUp";
  let modalBody = document.getElementById("modal-body-02");

  modalBody.appendChild(input);
}

function passwordLabelCreateSignUp() {
  let label = document.createElement("label");
  label.setAttribute("for", "password");
  label.innerText = "Password";

  let input = document.createElement("input");
  input.setAttribute("type", "password");
  input.setAttribute("name", "password");
  input.id = "input-password-signUp";

  let modalBody = document.getElementById("modal-body-02");

  modalBody.appendChild(label);
  modalBody.appendChild(input);
}

function confirmPasswordLabelCreateSignUp() {
  let label = document.createElement("label");
  label.setAttribute("for", "password");
  label.innerText = "Confirm Password";

  let input = document.createElement("input");
  input.setAttribute("type", "password");
  input.setAttribute("name", "password");
  input.id = "input-confirmPassword-signUp";

  let modalBody = document.getElementById("modal-body-02");

  modalBody.appendChild(label);
  modalBody.appendChild(input);
}

function footerModalCreateSignUp() {
  let div = document.createElement("div");
  div.className = "modal-footer";
  div.id = "modal-footer-02";

  let divModalContent = document.getElementById("modal-content-02");
  divModalContent.appendChild(div);
}

function buttonFooterCreateSignUp() {
  let a = document.createElement("a");

  a.setAttribute("href", "index.html");

  let input = document.createElement("input");
  input.id = "footer-button-02";
  input.className = "btn btn-primary";
  input.setAttribute("data-bs-dismiss", "modal");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Create your account");

  a.appendChild(input);

  let divModalContent = document.getElementById("modal-content-02");
  divModalContent.appendChild(a);
}

divContainerCreate();
divColCreate();
divCardCreate();
imgCreate();
divCardBodyCreate();
h5DivCardBodyCreate();
divButtonsCardBodyCreate();
signInAndSignUpButtonCreate();
divModalSignInCreate();
divModalDialogCreate();
divModalContentId01Create();
divModalHeaderId01Create();
h5ModalTitleCreate();
buttonBtnCloseCreate();
divModalBodyId01Create();
emailLabelCreateSignIn();
emailInputCreateSignIn();
passwordLabelCreateSignIn();
footerModalCreate();
buttonFooterCreate();

//   MODAL SIGN UP

divModalFadeCreate();
divModalDialog02Create();
divModalContentId02Create();
divModalHeaderId02Create();
h5ModalTitleCreateSignUp();
buttonBtnCloseCreateSignUp();
divModalBodyIdCreateSignUp();
nameLabelInputCreateSignUp();
emailLabelCreateSignUp();
emailInputCreateSignUp();
passwordLabelCreateSignUp();
confirmPasswordLabelCreateSignUp();
footerModalCreateSignUp();
buttonFooterCreateSignUp();

// SIGN IN

function signInLogin() {
  let email = document.getElementById("input-email-signIn");

  let password = document.getElementById("input-password-signIn");

  let validRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  let button = document.getElementById("footer-button-01");

  button.addEventListener("mouseover", () => {
    if (!email.value.match(validRegex) || password.value.length < 6) {
      alert("Email or Password is incorrect");
    }
  });
}

signInLogin();

// SIGN UP

function signUpLogin() {
  let name = document.getElementById("input-name-signUp");
  let email = document.getElementById("input-email-signUp");
  let password = document.getElementById("input-password-signUp");
  let confirmPassword = document.getElementById("input-confirmPassword-signUp");
  let button = document.getElementById("footer-button-02");
  let validRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // name.addEventListener("blur", () => {
  //   if (name.value.length == "") {
  //     confirm("Name is required.")
  //   }
  // });

  // email.addEventListener("blur", () => {
  //   if (!email.value.match(validRegex)) {
  //     alert("Email is required.")
  //   }
  // });

  button.addEventListener("mouseover", () => {
    if (name.value.length == "") {
      confirm("Name is required.");
    } else if (!email.value.match(validRegex)) {
      alert("Email is required.");
    } else if (password.value.length < 6) {
      confirm("Password must be than 6 characters!");
    } else if (confirmPassword.value != password.value) {
      confirm("Password does not match")
    } else {
      return 
    }
  });
}

signUpLogin();

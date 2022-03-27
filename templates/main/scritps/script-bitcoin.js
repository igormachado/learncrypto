function divColBitcoinCreate() {
  let div = document.createElement("div");
  div.className = "col";
  div.id = "bitcoin-col";
  let container = document.getElementById("container");

  container.appendChild(div);
}

function divCardBitcoinCreate() {
  let div = document.createElement("div");
  div.id = "bitcoin-card";
  div.className = "card";

  let divCol = document.getElementById("bitcoin-col");
  divCol.appendChild(div);
}

function imgBitcoinCreate() {
  let img = document.createElement("img");
  img.setAttribute("src", "../../images/bitcoin-04.png");
  img.className = "card-img-top";
  img.id = "bitcoin-img";

  let bitcoinDivCard = document.getElementById("bitcoin-card");
  bitcoinDivCard.appendChild(img);
}

function divCardBodyBitcoinCreate() {
  let div = document.createElement("div");
  div.className = "card-body";
  div.id = "bitcoin-card-body";

  let bitcoinDivCard = document.getElementById("bitcoin-card");
  bitcoinDivCard.appendChild(div);
}

function h5CardTitleBitcoinCreate() {
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.id = "bitcoin-card-title";
  h5.innerText = "Bitcoin";

  let bitcoinDivCardBody = document.getElementById("bitcoin-card-body");
  bitcoinDivCardBody.appendChild(h5);
}

function pCardTextBitcoinCreate() {
  let p = document.createElement("p");

  p.className = "card-text";
  p.id = "bitcoin-card-text";
  p.innerText = "If you want to know what is \nBitcoin click in the button";

  let bitcoinDivCardBody = document.getElementById("bitcoin-card-body");
  bitcoinDivCardBody.appendChild(p);
}

function buttonModalBitcoinCreate() {
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  // a.id = "bitcoin-learn";
  a.setAttribute("type", "button");
  a.setAttribute("data-bs-toggle", "modal");
  a.setAttribute("data-bs-target", "#staticBackdrop-bitcoin");
  a.innerText = "Let's learn";

  let bitcoinDivCardBody = document.getElementById("bitcoin-card-body");
  bitcoinDivCardBody.appendChild(a);
}

// CREATE MODAL BITCOIN

function divModalFadeBitcoinCreate() {
  let div = document.createElement("div");

  div.className = "modal fade";
  div.id = "staticBackdrop-bitcoin";
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "staticBackdropLabel");
  div.setAttribute("aria-hidden", "true");

  let bitcoinDivCardBody = document.getElementById("bitcoin-card-body");
  bitcoinDivCardBody.appendChild(div);
}

function divModalDialogBitcoinCreate() {
  let div = document.createElement("div");
  div.className = "modal-dialog";
  div.id = "bitcoin-modal-dialog";

  let bitcoinModalFade = document.getElementById("staticBackdrop-bitcoin");
  bitcoinModalFade.appendChild(div);
}

function divModalContentBitcoinCreate() {
  let div = document.createElement("div");
  div.className = "modal-content";
  div.id = "bitcoin-modal-content";

  let bitcoinModalDialog = document.getElementById("bitcoin-modal-dialog");
  bitcoinModalDialog.appendChild(div);
}

function divModalHeaderBitcoinCreate() {
  let div = document.createElement("div");

  div.className = "modal-header";
  div.id = "bitcoin-modal-header";

  let bitcoinModalContent = document.getElementById("bitcoin-modal-content");
  bitcoinModalContent.appendChild(div);
}

function h5ModalTitleBitcoinCreate() {
  let h5 = document.createElement("h5");
  h5.className = "modal-title";
  h5.id = "staticBackdropLabel";
  h5.innerText = "Bitcoin";

  let bitcoinModalHeader = document.getElementById("bitcoin-modal-header");
  bitcoinModalHeader.appendChild(h5);
}

function buttonCloseBitcoinCreate() {
  let button = document.createElement("button");

  button.className = "btn-close";
  button.id = "bitcoin-btn-close";

  button.setAttribute("type", "button");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");

  let bitcoinModalHeader = document.getElementById("bitcoin-modal-header");
  bitcoinModalHeader.appendChild(button);
}

function divModalBodyBitcoinCreate() {
  let div = document.createElement("div");

  div.className = "modal-body";
  div.id = "bitcoin-modal-body";

  div.innerHTML =
    "<strong>" +
    "What is Bitcoin?" +
    "</strong>" +
    "<p>" +
    "Bitcoin is a digital form of cash. But unlike the fiat currencies you’re" +
    "used to,there is no central bank controlling it. Instead, the financial system" +
    "in Bitcoin is run by thousands of computers distributed around the world. Anyone" +
    "can participate in the ecosystem by downloading open-source software. Bitcoin was" +
    "the first cryptocurrency, announced in 2008 (and launched in 2009). It provides users" +
    "with the ability to send and receive digital money (bitcoins, with a lower-case b, or BTC)." +
    "What makes it so attractive is that it can’t be censored, funds can’t be spent more than once," +
    "and transactions can be made at any time, from anywhere." +
    "</p>" +
    "<strong>" +
    "What is Bitcoin used for?" +
    "</strong>" +
    "<p>" +
    "People use Bitcoin for a number of reasons. Many appreciate it for its" +
    "permissionless nature – anyone with an Internet connection can send and receive" +
    "it. It’s a bit like cash in that no one can stop you from using it, but its" +
    "digital presence means that it can be transferred globally." +
    "</p>" +
    "<strong>" +
    "What makes Bitcoin valuable?" +
    "</strong>" +
    "<p>" +
    "Bitcoin is decentralized, censorship-resistant, secure, and borderless." +
    "This quality has made it appealing for use cases such as international" +
    "remittance and payments where individuals don’t want to reveal their identities" +
    "(as they would with a debit or credit card)." +
    "Many don’t spend their bitcoins, instead choosing to hold them for the long-term" +
    "(also known as hodling). Bitcoin has been nicknamed digital gold, due to a" +
    "finite supply of coins available. Some investors view Bitcoin as a store of" +
    "value. Because it’s scarce and difficult to produce, it has been likened to" +
    "precious metals like gold or silver." +
    "Holders believe that these traits – combined with global availability and high" +
    "liquidity – make it an ideal medium for storing wealth in for long periods. They" +
    "believe that Bitcoin’s value will continue to appreciate over time." +
    "</p>";

  let bitcoinModalContent = document.getElementById("bitcoin-modal-content");
  bitcoinModalContent.appendChild(div);
}

function divModalFooterBitcoinCreate() {
  let div = document.createElement("div");
  div.className = "modal-footer";
  div.id = "bitcoin-modal-footer";

  let bitcoinModalContent = document.getElementById("bitcoin-modal-content");
  bitcoinModalContent.appendChild(div);
}

function buttonFooterBitcoinCreate() {
  let button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "bitcoin-button-footer";
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("type", "button");
  button.innerText = "Close";

  let bitcoinModalContent = document.getElementById("bitcoin-modal-content");
  bitcoinModalContent.appendChild(button);
}

// CARD BITCOIN

divColBitcoinCreate();
divCardBitcoinCreate();
imgBitcoinCreate();
divCardBodyBitcoinCreate();
h5CardTitleBitcoinCreate();
pCardTextBitcoinCreate();
buttonModalBitcoinCreate();

//   MODAL BITCOIN
divModalFadeBitcoinCreate();
divModalDialogBitcoinCreate();
divModalContentBitcoinCreate();
divModalHeaderBitcoinCreate();
h5ModalTitleBitcoinCreate();
buttonCloseBitcoinCreate();
divModalBodyBitcoinCreate();
divModalFooterBitcoinCreate();
buttonFooterBitcoinCreate();

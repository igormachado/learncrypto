// CREATE CARD ETHEREUM

function divColEthereumCreate() {
    let div = document.createElement("div");
    div.className = "col";
    div.id = "ethereum-col";
    let container = document.getElementById("container");
  
    container.appendChild(div);
  }
  
  function divCardEthereumCreate() {
    let div = document.createElement("div");
    div.id = "ethereum-card";
    div.className = "card";
  
    let divCol = document.getElementById("ethereum-col");
    divCol.appendChild(div);
  }
  
  function imgEthereumCreate() {
    let img = document.createElement("img");
    img.setAttribute("src", "../../images/ethereum.png");
    img.className = "card-img-top";
    img.id = "ethereum-img";
  
    let ethereumDivCard = document.getElementById("ethereum-card");
    ethereumDivCard.appendChild(img);
  }
  
  function divCardBodyEthereumCreate() {
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "ethereum-card-body";
  
    let ethereumDivCard = document.getElementById("ethereum-card");
    ethereumDivCard.appendChild(div);
  }
  
  function h5CardTitleEthereumCreate() {
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.id = "ethereum-card-title";
    h5.innerText = "Ethereum";
  
    let ethereumDivCardBody = document.getElementById("ethereum-card-body");
    ethereumDivCardBody.appendChild(h5);
  }
  
  function pCardTextEthereumCreate() {
    let p = document.createElement("p");
  
    p.className = "card-text";
    p.id = "ethereum-card-text";
    p.innerText = "If you want to know what is \nEthereum click in the button";
  
    let ethereumDivCardBody = document.getElementById("ethereum-card-body");
    ethereumDivCardBody.appendChild(p);
  }
  
  function buttonModalEthereumCreate() {
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    // a.id = "bitcoin-learn";
    a.setAttribute("type", "button");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#staticBackdrop-ethereum");
    a.innerText = "Let's learn";
  
    let ethereumDivCardBody = document.getElementById("ethereum-card-body");
    ethereumDivCardBody.appendChild(a);
  }
  
  // CREATE MODAL ETHEREUM
  
  function divModalFadeEthereumCreate() {
    let div = document.createElement("div");
  
    div.className = "modal fade";
    div.id = "staticBackdrop-ethereum";
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "staticBackdropLabel");
    div.setAttribute("aria-hidden", "true");
  
    let ethereumDivCardBody = document.getElementById("ethereum-card-body");
    ethereumDivCardBody.appendChild(div);
  }
  
  function divModalDialogEthereumCreate() {
    let div = document.createElement("div");
    div.className = "modal-dialog";
    div.id = "ethereum-modal-dialog";
  
    let ethereumModalFade = document.getElementById("staticBackdrop-ethereum");
    ethereumModalFade.appendChild(div);
  }
  
  function divModalContentEthereumCreate() {
    let div = document.createElement("div");
    div.className = "modal-content";
    div.id = "ethereum-modal-content";
  
    let ethereumModalDialog = document.getElementById("ethereum-modal-dialog");
    ethereumModalDialog.appendChild(div);
  }
  
  function divModalHeaderEthereumCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-header";
    div.id = "ethereum-modal-header";
  
    let ethereumModalContent = document.getElementById("ethereum-modal-content");
    ethereumModalContent.appendChild(div);
  }
  
  function h5ModalTitleEthereumCreate() {
    let h5 = document.createElement("h5");
    h5.className = "modal-title";
    h5.id = "staticBackdropLabel";
    h5.innerText = "Ethereum";
  
    let ethereumModalHeader = document.getElementById("ethereum-modal-header");
    ethereumModalHeader.appendChild(h5);
  }
  
  function buttonCloseEthereumCreate() {
    let button = document.createElement("button");
  
    button.className = "btn-close";
    button.id = "ethereum-btn-close";
  
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("aria-label", "Close");
  
    let ethereumModalHeader = document.getElementById("ethereum-modal-header");
    ethereumModalHeader.appendChild(button);
  }
  
  function divModalBodyEthereumCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-body";
    div.id = "ethereum-modal-body";
  
    div.innerHTML =
      "<strong>" +
      "What is Ethereum?" +
      "</strong>" +
      "<p>" +
      "Ethereum is a decentralized computing platform. You can think of it like a laptop" +
      "or PC, but it doesn't run on a single device. Instead, it simultaneously runs on" +
      "thousands of machines around the world, meaning that it has no owner." +
      "Ethereum, like Bitcoin and other cryptocurrencies, allows you to transfer" +
      "digital money. However, it’s capable of a lot more – you can deploy your own" +
      "code, and interact with applications created by other users. Because it’s so" +
      "flexible, all sorts of sophisticated programs can be launched on Ethereum." +
      "Simply put, the main idea behind Ethereum is that developers can create and" +
      "launch code which runs across a distributed network instead of existing on a" +
      "centralized server. This means that, in theory, these applications can’t be shut" +
      "down or censored." +
      "</p>" +
      "<strong>" +
      "What’s the difference between Ethereum and ether (ETH)?" +
      "</strong>" +
      "<p>" +
      "It might be unintuitive, but the units used in Ethereum are not called Ethereum" +
      "or Ethereums. Ethereum is the protocol itself, but the currency that powers it" +
      "is simply known as ether (or ETH)." +
      "</p>" +
      "<strong>" +
      "What makes Ethereum valuable?" +
      "</strong>" +
      "<p>" +
      "We touched on the idea that Ethereum can run code across a distributed system. As" +
      "such, programs can’t be tampered with by external parties. They’re added to" +
      "Ethereum’s database (i.e., the blockchain), and can be programmed so that the" +
      "code can’t be edited. In addition, the database is visible to everyone, so users" +
      "can audit code before interacting with it." +
      "What this means is that anyone, anywhere, can launch applications that can’t be" +
      "taken offline. More interestingly, because its native unit – ether – stores" +
      "value, these applications can set conditions on how value is transferred. We" +
      "call the programs that make up applications smart contracts. In most cases, they" +
      "can be set to operate without human intervention." +
      "Understandably, the idea of “programmable money” has captivated users," +
      "developers, and businesses around the globe." +
      "</p>";
  
    let ethereumModalContent = document.getElementById("ethereum-modal-content");
    ethereumModalContent.appendChild(div);
  }
  
  function divModalFooterEthereumCreate() {
    let div = document.createElement("div");
    div.className = "modal-footer";
    div.id = "ethereum-modal-footer";
  
    let ethereumModalContent = document.getElementById("ethereum-modal-content");
    ethereumModalContent.appendChild(div);
  }
  
  function buttonFooterEthereumCreate() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "ethereum-button-footer";
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("type", "button");
    button.innerText = "Close";
  
    let ethereumModalContent = document.getElementById("ethereum-modal-content");
    ethereumModalContent.appendChild(button);
  }


  //  CARD ETHEREUM
  divColEthereumCreate();
  divCardEthereumCreate();
  imgEthereumCreate();
  divCardBodyEthereumCreate();
  h5CardTitleEthereumCreate();
  pCardTextEthereumCreate();
  buttonModalEthereumCreate();

  // MODAL ETHEREUM
  divModalFadeEthereumCreate();
  divModalDialogEthereumCreate();
  divModalContentEthereumCreate();
  divModalHeaderEthereumCreate();
  h5ModalTitleEthereumCreate();
  buttonCloseEthereumCreate();
  divModalBodyEthereumCreate();
  buttonFooterEthereumCreate();
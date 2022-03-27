



// CREATE CARD POLKADOT

function divColPolkadotCreate() {
    let div = document.createElement("div");
    div.className = "col";
    div.id = "polkadot-col";
    let container = document.getElementById("container");
  
    container.appendChild(div);
  }
  
  function divCardPolkadotCreate() {
    let div = document.createElement("div");
    div.id = "polkadot-card";
    div.className = "card";
  
    let divCol = document.getElementById("polkadot-col");
    divCol.appendChild(div);
  }
  
  function imgPolkadotCreate() {
    let img = document.createElement("img");
    img.setAttribute("src", "../../images/polkadot.png");
    img.className = "card-img-top";
    img.id = "polkadot-img";
  
    let polkadotDivCard = document.getElementById("polkadot-card");
    polkadotDivCard.appendChild(img);
  }
  
  function divCardBodyPolkadotCreate() {
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "polkadot-card-body";
  
    let polkadotDivCard = document.getElementById("polkadot-card");
    polkadotDivCard.appendChild(div);
  }
  
  function h5CardTitlePolkadotCreate() {
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.id = "polkadot-card-title";
    h5.innerText = "Polkadot";
  
    let polkadotDivCardBody = document.getElementById("polkadot-card-body");
    polkadotDivCardBody.appendChild(h5);
  }
  
  function pCardTextPolkadotCreate() {
    let p = document.createElement("p");
  
    p.className = "card-text";
    p.id = "polkadot-card-text";
    p.innerText = "If you want to know what is \nPolkadot click in the button";
  
    let polkadotDivCardBody = document.getElementById("polkadot-card-body");
    polkadotDivCardBody.appendChild(p);
  }
  
  function buttonModalPolkadotCreate() {
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    // a.id = "bitcoin-learn";
    a.setAttribute("type", "button");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#staticBackdrop-polkadot");
    a.innerText = "Let's learn";
  
    let polkadotDivCardBody = document.getElementById("polkadot-card-body");
    polkadotDivCardBody.appendChild(a);
  }
  
  // CREATE MODAL POLKADOT
  
  function divModalFadePolkadotCreate() {
    let div = document.createElement("div");
  
    div.className = "modal fade";
    div.id = "staticBackdrop-polkadot";
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "staticBackdropLabel");
    div.setAttribute("aria-hidden", "true");
  
    let polkadotDivCardBody = document.getElementById("polkadot-card-body");
    polkadotDivCardBody.appendChild(div);
  }
  
  function divModalDialogPolkadotCreate() {
    let div = document.createElement("div");
    div.className = "modal-dialog";
    div.id = "polkadot-modal-dialog";
  
    let polkadotModalFade = document.getElementById("staticBackdrop-polkadot");
    polkadotModalFade.appendChild(div);
  }
  
  function divModalContentPolkadotCreate() {
    let div = document.createElement("div");
    div.className = "modal-content";
    div.id = "polkadot-modal-content";
  
    let polkadotModalDialog = document.getElementById("polkadot-modal-dialog");
    polkadotModalDialog.appendChild(div);
  }
  
  function divModalHeaderPolkadotCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-header";
    div.id = "polkadot-modal-header";
  
    let polkadotModalContent = document.getElementById("polkadot-modal-content");
    polkadotModalContent.appendChild(div);
  }
  
  function h5ModalTitlePolkadotCreate() {
    let h5 = document.createElement("h5");
    h5.className = "modal-title";
    h5.id = "staticBackdropLabel";
    h5.innerText = "Polkadot";
  
    let polkadotModalHeader = document.getElementById("polkadot-modal-header");
    polkadotModalHeader.appendChild(h5);
  }
  
  function buttonClosePolkadotCreate() {
    let button = document.createElement("button");
  
    button.className = "btn-close";
    button.id = "polkadot-btn-close";
  
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("aria-label", "Close");
  
    let polkadotModalHeader = document.getElementById("polkadot-modal-header");
    polkadotModalHeader.appendChild(button);
  }
  
  function divModalBodyPolkadotCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-body";
    div.id = "polkadot-modal-body";
  
    div.innerHTML =
      "<strong>" +
      "What Is Polkadot (DOT)?" +
      "</strong>" +
      "<p>" +
      "Polkadot positions itself as the next-generation blockchain protocol, capable of" +
      "connecting multiple specialized chains into one universal network. With a strong" +
      "focus on building infrastructure for Web 3.0 – and founded by the Web3" +
      "Foundation – Polkadot aims to disrupt Internet monopolies and empower individual" +
      "users." +
      "Blockchain has been around since the inception of Bitcoin. While it has been" +
      "called a groundbreaking technology, there are also certain drawbacks to take" +
      "into account. Individual blockchains are unable to communicate with another." +
      "Introducing interoperability between different chains could lead to the exchange" +
      "of data, and ultimately more powerful applications and services." +
      "Developers have tried to 'bridge' blockchains in the past. Doing so allows chain" +
      "A to work with chain B and vice versa. However, connecting many (think hundreds" +
      "or thousands) blockchains at the same time remains a pressing issue. Polkadot's" +
      "team, and by extension, the Web3 Foundation, is confident that an elegant" +
      "solution can be created over the coming years." +
      "</p>" +
      "<strong>" +
      "What is Polkadot?" +
      "</strong>" +
      "<p>" +
      "Described as an open-source protocol built for everyone, Polkadot claims to be" +
      "the next step in the evolution of blockchain technology. It’s a concept" +
      "initially envisioned by Dr. Gavin Wood, co-founder of Ethereum. The team wants" +
      "to focus its efforts on security, scalability, and innovation. To do so, the" +
      "necessary infrastructure needs to be created to not only support new ideas and" +
      "concepts but also ensure that proper interoperability can be achieved." +
      "An individual blockchain in the Polkadot ecosystem is called a parachain" +
      "(parallel blockchain), while the main chain is called the Relay Chain. The idea" +
      "is that parachains and the Relay Chain can easily exchange information at all" +
      "times. You could think of parachains as being similar to individual shards in" +
      "the planned implementation of ETH 2.0." +
      "Any developer, company, or individual can spin up their custom parachain through" +
      "Substrate, a framework for creating cryptocurrencies and decentralized systems." +
      "Once the custom chain is connected to the Polkadot network, it becomes" +
      "interoperable with all other parachains on the network." +
      "Building cross-chain applications, products, and services should become a lot" +
      "more straightforward with this design. Cross-blockchain transfers of either data" +
      "or assets have not been possible on a large scale before." +
      "Securing and validating the data across these different parachains is done" +
      "through network validators, where a small set of these validators can secure" +
      "multiple parachains. These validators will also ensure transactions can be" +
      "spread across multiple parachains to improve scalability." +
      "</p>";
  
    let polkadotModalContent = document.getElementById("polkadot-modal-content");
    polkadotModalContent.appendChild(div);
  }
  
  function divModalFooterPolkadotCreate() {
    let div = document.createElement("div");
    div.className = "modal-footer";
    div.id = "polkadot-modal-footer";
  
    let polkadotModalContent = document.getElementById("polkadot-modal-content");
    polkadotModalContent.appendChild(div);
  }
  
  function buttonFooterPolkadotCreate() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "polkadot-button-footer";
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("type", "button");
    button.innerText = "Close";
  
    let polkadotModalContent = document.getElementById("polkadot-modal-content");
    polkadotModalContent.appendChild(button);
  }

    // CARD POLKADOT

    divColPolkadotCreate();
    divCardPolkadotCreate();
    imgPolkadotCreate();
    divCardBodyPolkadotCreate();
    h5CardTitlePolkadotCreate();
    pCardTextPolkadotCreate();
    buttonModalPolkadotCreate();
  
    // MODAL POLKADOT
    divModalFadePolkadotCreate();
    divModalDialogPolkadotCreate();
    divModalContentPolkadotCreate();
    divModalHeaderPolkadotCreate();
    h5ModalTitlePolkadotCreate();
    buttonClosePolkadotCreate();
    divModalBodyPolkadotCreate();
    divModalFooterPolkadotCreate();
    buttonFooterPolkadotCreate();
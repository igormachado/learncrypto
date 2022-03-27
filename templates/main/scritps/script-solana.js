//  CARD SOLANA CREATE

function divColSolanaCreate() {
    let div = document.createElement("div");
    div.className = "col";
    div.id = "solana-col";
    let container = document.getElementById("container");
  
    container.appendChild(div);
  }
  
  function divCardSolanaCreate() {
    let div = document.createElement("div");
    div.id = "solana-card";
    div.className = "card";
  
    let divCol = document.getElementById("solana-col");
    divCol.appendChild(div);
  }
  
  function imgSolanaCreate() {
    let img = document.createElement("img");
    img.setAttribute("src", "../../images/solana.png");
    img.className = "card-img-top";
    img.id = "solana-img";
  
    let solanaDivCard = document.getElementById("solana-card");
    solanaDivCard.appendChild(img);
  }
  
  function divCardBodySolanaCreate() {
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "solana-card-body";
  
    let solanaDivCard = document.getElementById("solana-card");
    solanaDivCard.appendChild(div);
  }
  
  function h5CardTitleSolanaCreate() {
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.id = "solana-card-title";
    h5.innerText = "Solana";
  
    let solanaDivCardBody = document.getElementById("solana-card-body");
    solanaDivCardBody.appendChild(h5);
  }
  
  function pCardTextSolanaCreate() {
    let p = document.createElement("p");
  
    p.className = "card-text";
    p.id = "solana-card-text";
    p.innerText = "If you want to know what is \nSolana click in the button";
  
    let solanaDivCardBody = document.getElementById("solana-card-body");
    solanaDivCardBody.appendChild(p);
  }
  
  function buttonModalSolanaCreate() {
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    // a.id = "bitcoin-learn";
    a.setAttribute("type", "button");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#staticBackdrop-solana");
    a.innerText = "Let's learn";
  
    let solanaDivCardBody = document.getElementById("solana-card-body");
    solanaDivCardBody.appendChild(a);
  }
  
  // CREATE MODAL SOLANA
  
  function divModalFadeSolanaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal fade";
    div.id = "staticBackdrop-solana";
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "staticBackdropLabel");
    div.setAttribute("aria-hidden", "true");
  
    let solanaDivCardBody = document.getElementById("solana-card-body");
    solanaDivCardBody.appendChild(div);
  }
  
  function divModalDialogSolanaCreate() {
    let div = document.createElement("div");
    div.className = "modal-dialog";
    div.id = "solana-modal-dialog";
  
    let solanaModalFade = document.getElementById("staticBackdrop-solana");
    solanaModalFade.appendChild(div);
  }
  
  function divModalContentSolanaCreate() {
    let div = document.createElement("div");
    div.className = "modal-content";
    div.id = "solana-modal-content";
  
    let solanaModalDialog = document.getElementById("solana-modal-dialog");
    solanaModalDialog.appendChild(div);
  }
  
  function divModalHeaderSolanaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-header";
    div.id = "solana-modal-header";
  
    let solanaModalContent = document.getElementById("solana-modal-content");
    solanaModalContent.appendChild(div);
  }
  
  function h5ModalTitleSolanaCreate() {
    let h5 = document.createElement("h5");
    h5.className = "modal-title";
    h5.id = "staticBackdropLabel";
    h5.innerText = "Solana";
  
    let solanaModalHeader = document.getElementById("solana-modal-header");
    solanaModalHeader.appendChild(h5);
  }
  
  function buttonCloseSolanaCreate() {
    let button = document.createElement("button");
  
    button.className = "btn-close";
    button.id = "solana-btn-close";
  
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("aria-label", "Close");
  
    let solanaModalHeader = document.getElementById("solana-modal-header");
    solanaModalHeader.appendChild(button);
  }
  
  function divModalBodySolanaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-body";
    div.id = "solana-modal-body";
  
    div.innerHTML =
      "<strong>" +
      "What Is Solana (SOL)?" +
      "</strong>" +
      "<p>" +
      "Solana is a blockchain network focused on fast transactions and high throughput." +
      "It uses a unique method of ordering transactions to improve its speed. Users can" +
      "pay their transaction fees and interact with smart contracts with SOL, the" +
      "network’s native cryptocurrency." +
      "When it comes to blockchain technology, scalability is one of the biggest" +
      "challenges out there. As these networks grow, they often face limitations in" +
      "terms of transaction speed and confirmation times. Solana aims to tackle these" +
      "limitations without compromising security or decentralization." +
      "Founded in 2017 by Anatoly Yakovenko from Solana Labs, the Solana blockchain" +
      "adopts a new method of verifying transactions. Bitcoin, Ethereum, and many other" +
      "projects suffer from scalability and speed issues. Using a method known as Proof" +
      "of History (PoH), the Solana blockchain can handle thousands of transactions per" +
      "second." +
      "</p>" +
      "<strong>" +
      "How does Solana work?" +
      "</strong>" +
      "<p>" +
      "Solana is a third-generation, Proof of Stake blockchain. It has implemented a" +
      "unique way of creating a trustless system for determining the time of a" +
      "transaction called Proof of History." +
      "Keeping track of the order of transactions is hugely vital for cryptocurrencies." +
      "Bitcoin does this by bundling transactions into blocks with a single timestamp." +
      "Each node has to validate these blocks in consensus with other nodes. This" +
      "process adds in a significant waiting time for nodes to confirm a block across" +
      "the network. Solana instead takes a different approach. Let’s take a closer" +
      "look." +
      "</p>";
  
    let solanaModalContent = document.getElementById("solana-modal-content");
    solanaModalContent.appendChild(div);
  }
  
  function divModalFooterSolanaCreate() {
    let div = document.createElement("div");
    div.className = "modal-footer";
    div.id = "solana-modal-footer";
  
    let solanaModalContent = document.getElementById("solana-modal-content");
    solanaModalContent.appendChild(div);
  }
  
  function buttonFooterSolanaCreate() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "solana-button-footer";
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("type", "button");
    button.innerText = "Close";
  
    let solanaModalContent = document.getElementById("solana-modal-content");
    solanaModalContent.appendChild(button);
  }
  

  // CARD SOLANA
  divColSolanaCreate();
  divCardSolanaCreate();
  imgSolanaCreate();
  divCardBodySolanaCreate();
  h5CardTitleSolanaCreate();
  pCardTextSolanaCreate();
  buttonModalSolanaCreate();

  // MODAL SOLANA
  divModalFadeSolanaCreate();
  divModalDialogSolanaCreate();
  divModalContentSolanaCreate();
  divModalHeaderSolanaCreate();
  h5ModalTitleSolanaCreate();
  buttonCloseSolanaCreate();
  divModalBodySolanaCreate();
  divModalFooterSolanaCreate();
  buttonFooterSolanaCreate();


// CREATE LITCOIN CARD

function divColLitcoinCreate() {
    let div = document.createElement("div");
    div.className = "col";
    div.id = "litcoin-col";
    let container = document.getElementById("container");
  
    container.appendChild(div);
  }
  
  function divCardLitcoinCreate() {
    let div = document.createElement("div");
    div.id = "litcoin-card";
    div.className = "card";
  
    let divCol = document.getElementById("litcoin-col");
    divCol.appendChild(div);
  }
  
  function imgLitcoinCreate() {
    let img = document.createElement("img");
    img.setAttribute("src", "../../images/litcoin.png");
    img.className = "card-img-top";
    img.id = "litcoin-img";
  
    let litcoinDivCard = document.getElementById("litcoin-card");
    litcoinDivCard.appendChild(img);
  }
  
  function divCardBodyLitcoinCreate() {
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "litcoin-card-body";
  
    let litcoinDivCard = document.getElementById("litcoin-card");
    litcoinDivCard.appendChild(div);
  }
  
  function h5CardTitleLitcoinCreate() {
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.id = "litcoin-card-title";
    h5.innerText = "Litcoin";
  
    let litcoinDivCardBody = document.getElementById("litcoin-card-body");
    litcoinDivCardBody.appendChild(h5);
  }
  
  function pCardTextLitcoinCreate() {
    let p = document.createElement("p");
  
    p.className = "card-text";
    p.id = "litcoin-card-text";
    p.innerText = "If you want to know what is \nLitcoin click in the button";
  
    let litcoinDivCardBody = document.getElementById("litcoin-card-body");
    litcoinDivCardBody.appendChild(p);
  }
  
  function buttonModalLitcoinCreate() {
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    // a.id = "bitcoin-learn";
    a.setAttribute("type", "button");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#staticBackdrop-litcoin");
    a.innerText = "Let's learn";
  
    let litcoinDivCardBody = document.getElementById("litcoin-card-body");
    litcoinDivCardBody.appendChild(a);
  }
  
  // CREATE MODAL LITCOIN
  
  function divModalFadeLitcoinCreate() {
    let div = document.createElement("div");
  
    div.className = "modal fade";
    div.id = "staticBackdrop-litcoin";
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "staticBackdropLabel");
    div.setAttribute("aria-hidden", "true");
  
    let litcoinDivCardBody = document.getElementById("litcoin-card-body");
    litcoinDivCardBody.appendChild(div);
  }
  
  function divModalDialogLitcoinCreate() {
    let div = document.createElement("div");
    div.className = "modal-dialog";
    div.id = "litcoin-modal-dialog";
  
    let litcoinModalFade = document.getElementById("staticBackdrop-litcoin");
    litcoinModalFade.appendChild(div);
  }
  
  function divModalContentLitcoinCreate() {
    let div = document.createElement("div");
    div.className = "modal-content";
    div.id = "litcoin-modal-content";
  
    let litcoinModalDialog = document.getElementById("litcoin-modal-dialog");
    litcoinModalDialog.appendChild(div);
  }
  
  function divModalHeaderLitcoinCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-header";
    div.id = "litcoin-modal-header";
  
    let litcoinModalContent = document.getElementById("litcoin-modal-content");
    litcoinModalContent.appendChild(div);
  }
  
  function h5ModalTitleLitcoinCreate() {
    let h5 = document.createElement("h5");
    h5.className = "modal-title";
    h5.id = "staticBackdropLabel";
    h5.innerText = "Litcoin";
  
    let litcoinModalHeader = document.getElementById("litcoin-modal-header");
    litcoinModalHeader.appendChild(h5);
  }
  
  function buttonCloseLitcoinCreate() {
    let button = document.createElement("button");
  
    button.className = "btn-close";
    button.id = "litcoin-btn-close";
  
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("aria-label", "Close");
  
    let litcoinModalHeader = document.getElementById("litcoin-modal-header");
    litcoinModalHeader.appendChild(button);
  }
  
  function divModalBodyLitcoinCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-body";
    div.id = "litcoin-modal-body";
  
    div.innerHTML =
      "<strong>" +
      "What Is Litecoin (LTC)?" +
      "</strong>" +
      "<p>" +
      "Litecoin (LTC) is one of the oldest of all altcoins on the market. When it was" +
      "first introduced in 2011, Litecoin was branded as “the silver to bitcoin’s gold”" +
      "for its blockchain was largely based on Bitcoin’s code. While some crypto" +
      "investors view Bitcoin as a good store of value, Litecoin is often seen as a" +
      "better option for peer-to-peer payments due to its lower confirmation time and" +
      "transaction fees." +
      "Litecoin (LTC) is one of the first altcoins. Created by former Google engineer" +
      "Charlie Lee in 2011, its blockchain was developed based on Bitcoin’s open-source" +
      "codes. But Litecoin introduced certain modifications, such as a faster block" +
      "generation rate and a different Proof of Work (PoW) mining algorithm called Scrypt." +
      "Litecoin has a limited total supply of 84 million. Similar to Bitcoin, Litecoin" +
      "can be obtained from mining and has a halving mechanism that occurs every" +
      "840,000 blocks (roughly 4 years). The last LTC halving was in August 2019, where" +
      "the block rewards were halved from 25 LTC to 12.5 LTC. The next halving is" +
      "expected to take place in August 2023." +
      "Litecoin (LTC) is an altcoin founded in 2011 by former Google engineer Charlie" +
      "Lee. It aimed to be the lite version of Bitcoin that enables nearly instant and" +
      "low-cost payments. Litecoin adopted the code and certain features of Bitcoin in" +
      "its blockchain, but it prioritizes transaction confirmation speed to facilitate" +
      "a higher transaction per second (TPS) and a shorter block generation time." +
      "Due to its similarity with Bitcoin, the Litecoin blockchain has been used as a" +
      "testing ground for developers to experiment with technologies they want to" +
      "implement on Bitcoin. For example, Segregated Witness (SegWit) and Lightning" +
      "Network were run on the Litecoin blockchain before Bitcoin." +
      "Litecoin has a total supply of 84 million. Similar to Bitcoin, it is" +
      "deflationary in nature and halves every 840,000 blocks (approximately every 4" +
      "years). The next halving is expected to happen in August 2023. Litecoin can be" +
      "purchased on various cryptocurrency exchanges, including Binance." +
      "</p>";
  
    let litcoinModalContent = document.getElementById("litcoin-modal-content");
    litcoinModalContent.appendChild(div);
  }
  
  function divModalFooterLitcoinCreate() {
    let div = document.createElement("div");
    div.className = "modal-footer";
    div.id = "litcoin-modal-footer";
  
    let litcoinModalContent = document.getElementById("litcoin-modal-content");
    litcoinModalContent.appendChild(div);
  }
  
  function buttonFooterLitcoinCreate() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "litcoin-button-footer";
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("type", "button");
    button.innerText = "Close";
  
    let litcoinModalContent = document.getElementById("litcoin-modal-content");
    litcoinModalContent.appendChild(button);
  }

  
// CARD LITCOIN

divColLitcoinCreate();
divCardLitcoinCreate();
imgLitcoinCreate();
divCardBodyLitcoinCreate();
h5CardTitleLitcoinCreate();
pCardTextLitcoinCreate();
buttonModalLitcoinCreate();

// MODAL LITCOIN

divModalFadeLitcoinCreate();
divModalDialogLitcoinCreate();
divModalContentLitcoinCreate();
divModalHeaderLitcoinCreate();
h5ModalTitleLitcoinCreate();
buttonCloseLitcoinCreate();
divModalBodyLitcoinCreate();
divModalFooterLitcoinCreate();
buttonFooterLitcoinCreate();



//  CREATE CARD SHIBA

function divColShibaCreate() {
    let div = document.createElement("div");
    div.className = "col";
    div.id = "shiba-col";
    let container = document.getElementById("container");
  
    container.appendChild(div);
  }
  
  function divCardShibaCreate() {
    let div = document.createElement("div");
    div.id = "shiba-card";
    div.className = "card";
  
    let divCol = document.getElementById("shiba-col");
    divCol.appendChild(div);
  }
  
  function imgShibaCreate() {
    let img = document.createElement("img");
    img.setAttribute("src", "../../images/shiba.png");
    img.className = "card-img-top";
    img.id = "shiba-img";
  
    let shibaDivCard = document.getElementById("shiba-card");
    shibaDivCard.appendChild(img);
  }
  
  function divCardBodyShibaCreate() {
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "shiba-card-body";
  
    let shibaDivCard = document.getElementById("shiba-card");
    shibaDivCard.appendChild(div);
  }
  
  function h5CardTitleShibaCreate() {
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.id = "shiba-card-title";
    h5.innerText = "Shiba";
  
    let shibaDivCardBody = document.getElementById("shiba-card-body");
    shibaDivCardBody.appendChild(h5);
  }
  
  function pCardTextShibaCreate() {
    let p = document.createElement("p");
  
    p.className = "card-text";
    p.id = "shiba-card-text";
    p.innerText = "If you want to know what is \nShiba click in the button";
  
    let shibaDivCardBody = document.getElementById("shiba-card-body");
    shibaDivCardBody.appendChild(p);
  }
  
  function buttonModalShibaCreate() {
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    // a.id = "bitcoin-learn";
    a.setAttribute("type", "button");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#staticBackdrop-shiba");
    a.innerText = "Let's learn";
  
    let shibaDivCardBody = document.getElementById("shiba-card-body");
    shibaDivCardBody.appendChild(a);
  }
  
  // CREATE MODAL SHIBA
  
  function divModalFadeShibaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal fade";
    div.id = "staticBackdrop-shiba";
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "staticBackdropLabel");
    div.setAttribute("aria-hidden", "true");
  
    let shibaDivCardBody = document.getElementById("shiba-card-body");
    shibaDivCardBody.appendChild(div);
  }
  
  function divModalDialogShibaCreate() {
    let div = document.createElement("div");
    div.className = "modal-dialog";
    div.id = "shiba-modal-dialog";
  
    let shibaModalFade = document.getElementById("staticBackdrop-shiba");
    shibaModalFade.appendChild(div);
  }
  
  function divModalContentShibaCreate() {
    let div = document.createElement("div");
    div.className = "modal-content";
    div.id = "shiba-modal-content";
  
    let shibaModalDialog = document.getElementById("shiba-modal-dialog");
    shibaModalDialog.appendChild(div);
  }
  
  function divModalHeaderShibaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-header";
    div.id = "shiba-modal-header";
  
    let shibaModalContent = document.getElementById("shiba-modal-content");
    shibaModalContent.appendChild(div);
  }
  
  function h5ModalTitleShibaCreate() {
    let h5 = document.createElement("h5");
    h5.className = "modal-title";
    h5.id = "staticBackdropLabel";
    h5.innerText = "Shiba";
  
    let shibaModalHeader = document.getElementById("shiba-modal-header");
    shibaModalHeader.appendChild(h5);
  }
  
  function buttonCloseShibaCreate() {
    let button = document.createElement("button");
  
    button.className = "btn-close";
    button.id = "shiba-btn-close";
  
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("aria-label", "Close");
  
    let shibaModalHeader = document.getElementById("shiba-modal-header");
    shibaModalHeader.appendChild(button);
  }
  
  function divModalBodyShibaCreate() {
    let div = document.createElement("div");
  
    div.className = "modal-body";
    div.id = "shiba-modal-body";
  
    div.innerHTML =
      "<strong>" +
      "What Is Shiba Inu (SHIB)?" +
      "</strong>" +
      "<p>" +
      "For pet-loving crypto traders, 2021 has been particularly exciting with the boom" +
      "of dog-themed cryptocurrencies. Shiba Inu (SHIB) was one of the rising coins in" +
      "the market that saw a significant price increase. Dubbed as “Dogecoin killer”," +
      "the SHIB coin has become a social media hit. As of November 2021, SHIB is" +
      "amongst the top cryptocurrencies by market cap. It’s ranked #11 on" +
      "CoinMarketCap, which puts it close to its competitor, DOGE." +
      "Shiba Inu (SHIB) is a meme cryptocurrency running on the Ethereum blockchain. It" +
      "was created in August 2020 by an anonymous developer named Ryoshi, whose" +
      "identity is as mysterious as Bitcoin’s creator Satoshi Nakamoto. As the name" +
      "suggests, SHIB was inspired by the Japanese dog breed Shiba Inu." +
      "SHIB had a total supply of 1 quadrillion. When it was first launched, Ryoshi" +
      "locked 50% of the total supply in Uniswap to provide liquidity. Uniswap is an" +
      "automated market maker (AMM) protocol on the Ethereum blockchain and is one of" +
      "the most successful projects in the decentralized finance (DeFi) space. The" +
      "other 500 trillion SHIB were sent to Ethereum co-founder Vitalik Buterin, who" +
      "decided to burn 90% and donate the remaining to the India COVID-19 relief fund." +
      "</p>" +
      "<strong>" +
      "Why is SHIB so popular?" +
      "</strong>" +
      "<p>" +
      "During the global pandemic in 2020, the cryptocurrency market crashed and then" +
      "exploded as retail investors flocked to digital assets like bitcoin (BTC) and" +
      "Ether (ETH) to hedge against inflation. As mentioned, the stock market saga has" +
      "led to the rise of meme coins. Some attribute SHIB’s popularity to social media" +
      "influence, especially from Tesla CEO Elon Musk. After he publicly joked about" +
      "Dogecoin on TV in May 2021 and made it slump in price, SHIB and other meme coins" +
      "had taken advantage of the rising popularity of meme tokens. As of November" +
      "2021, SHIB price has increased more than 60,000,000% since January." +
      "One of the reasons for SHIB to stand out from its fellow puppy coins is its" +
      "Shiboshi NFTs and game. Catching on to the hype of the NFT markets, the 10,000" +
      "Shiboshis sold out in under 35 minutes. Shiba Inu launched its own NFTs using" +
      "the ShibaSwap platform. As the owners name their Shiboshis and trigger the SHIB" +
      "token burn, along with the development of the Shiboshi NFT game, the popularity" +
      "of Shiba Inu could continue to grow." +
      "</p>";
  
    let shibaModalContent = document.getElementById("shiba-modal-content");
    shibaModalContent.appendChild(div);
  }
  
  function divModalFooterShibaCreate() {
    let div = document.createElement("div");
    div.className = "modal-footer";
    div.id = "shiba-modal-footer";
  
    let shibaModalContent = document.getElementById("shiba-modal-content");
    shibaModalContent.appendChild(div);
  }
  
  function buttonFooterShibaCreate() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "shiba-button-footer";
    button.setAttribute("data-bs-dismiss", "modal");
    button.setAttribute("type", "button");
    button.innerText = "Close";
  
    let shibaModalContent = document.getElementById("shiba-modal-content");
    shibaModalContent.appendChild(button);
  }
  


  // CARD SHIBA
  divColShibaCreate();
  divCardShibaCreate();
  imgShibaCreate();
  divCardBodyShibaCreate();
  h5CardTitleShibaCreate();
  pCardTextShibaCreate();

  // MODAL SHIBA
  buttonModalShibaCreate();
  divModalFadeShibaCreate();
  divModalDialogShibaCreate();
  divModalContentShibaCreate();
  divModalHeaderShibaCreate();
  h5ModalTitleShibaCreate();
  buttonCloseShibaCreate();
  divModalBodyShibaCreate();
  divModalFooterShibaCreate();
  buttonFooterShibaCreate();
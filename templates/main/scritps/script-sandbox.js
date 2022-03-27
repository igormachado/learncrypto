// CREATE CARD SANDBOX

function divColSandBoxCreate() {
  let div = document.createElement("div");
  div.className = "col";
  div.id = "sandbox-col";
  let container = document.getElementById("container");

  container.appendChild(div);
}

function divCardSandBoxCreate() {
  let div = document.createElement("div");
  div.id = "sandbox-card";
  div.className = "card";

  let divCol = document.getElementById("sandbox-col");
  divCol.appendChild(div);
}

function imgSandboxCreate() {
  let img = document.createElement("img");
  img.setAttribute("src", "../../images/sandbox.png");
  img.className = "card-img-top";
  img.id = "sandbox-img";

  let sandboxDivCard = document.getElementById("sandbox-card");
  sandboxDivCard.appendChild(img);
}

function divCardBodySandboxCreate() {
  let div = document.createElement("div");
  div.className = "card-body";
  div.id = "sandbox-card-body";

  let sandboxDivCard = document.getElementById("sandbox-card");
  sandboxDivCard.appendChild(div);
}

function h5CardTitleSandboxCreate() {
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.id = "sandbox-card-title";
  h5.innerText = "Sandbox";

  let sandboxDivCardBody = document.getElementById("sandbox-card-body");
  sandboxDivCardBody.appendChild(h5);
}

function pCardTextSandboxCreate() {
  let p = document.createElement("p");

  p.className = "card-text";
  p.id = "sandbox-card-text";
  p.innerText = "If you want to know what is \nSandbox click in the button";

  let sandboxDivCardBody = document.getElementById("sandbox-card-body");
  sandboxDivCardBody.appendChild(p);
}

function buttonModalSandboxCreate() {
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  // a.id = "bitcoin-learn";
  a.setAttribute("type", "button");
  a.setAttribute("data-bs-toggle", "modal");
  a.setAttribute("data-bs-target", "#staticBackdrop-sandbox");
  a.innerText = "Let's learn";

  let sandboxDivCardBody = document.getElementById("sandbox-card-body");
  sandboxDivCardBody.appendChild(a);
}

// CREATE MODAL SANDBOX

function divModalFadeSandboxCreate() {
  let div = document.createElement("div");

  div.className = "modal fade";
  div.id = "staticBackdrop-sandbox";
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "staticBackdropLabel");
  div.setAttribute("aria-hidden", "true");

  let sandboxDivCardBody = document.getElementById("sandbox-card-body");
  sandboxDivCardBody.appendChild(div);
}

function divModalDialogSandboxCreate() {
  let div = document.createElement("div");
  div.className = "modal-dialog";
  div.id = "sandbox-modal-dialog";

  let sandboxModalFade = document.getElementById("staticBackdrop-sandbox");
  sandboxModalFade.appendChild(div);
}

function divModalContentSandboxCreate() {
  let div = document.createElement("div");
  div.className = "modal-content";
  div.id = "sandbox-modal-content";

  let sandboxModalDialog = document.getElementById("sandbox-modal-dialog");
  sandboxModalDialog.appendChild(div);
}

function divModalHeaderSandboxCreate() {
  let div = document.createElement("div");

  div.className = "modal-header";
  div.id = "sandbox-modal-header";

  let sandboxModalContent = document.getElementById("sandbox-modal-content");
  sandboxModalContent.appendChild(div);
}

function h5ModalTitleSandboxCreate() {
  let h5 = document.createElement("h5");
  h5.className = "modal-title";
  h5.id = "staticBackdropLabel";
  h5.innerText = "Sandbox";

  let sandboxModalHeader = document.getElementById("sandbox-modal-header");
  sandboxModalHeader.appendChild(h5);
}

function buttonCloseSandboxCreate() {
  let button = document.createElement("button");

  button.className = "btn-close";
  button.id = "sandbox-btn-close";

  button.setAttribute("type", "button");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");

  let sandboxModalHeader = document.getElementById("sandbox-modal-header");
  sandboxModalHeader.appendChild(button);
}

function divModalBodySandboxCreate() {
  let div = document.createElement("div");

  div.className = "modal-body";
  div.id = "sandbox-modal-body";

  div.innerHTML =
    "<strong>" +
    "What Is The Sandbox?" +
    "</strong>" +
    "<p>" +
    "he Sandbox is a play-to-earn blockchain game that allows players to build a" +
    "virtual world using non-fungible tokens (NFTs) on the Ethereum blockchain." +
    "Players can design their own avatars to access the different games," +
    "environments, and hubs on The Sandbox metaverse. You can think of the game as a" +
    "DeFi version of Minecraft on the blockchain." +
    "Launched in 2011 by Pixowl, The Sandbox was initially a mobile gaming platform" +
    "intended to rival Minecraft. It became a hit and generated more than 40 million" +
    "downloads worldwide. But in 2018, the co-founders Arthur Madrid and Sebastien" +
    "Borget decided to explore the potential of creating a 3D metaverse on the" +
    "blockchain. Their goal is to let users truly own their creations as NFTs and" +
    "earn rewards while participating in the ecosystem. The new Sandbox project was" +
    "released in 2020 and became one of the fastest-growing games in the crypto" +
    "world, along with Axie Infinity and Decentraland." +
    "In November 2021, The Sandbox raised $93 million in funding from investors led" +
    "by the Japanese mobile giant SoftBank. The game also attracted over 50" +
    "partnerships, including Atari, a famous gaming company, CryptoKitties, The" +
    "Walking Dead, and hip-hop star Snoop Dogg." +
    "</p>" +
    "<strong>" +
    "How does The Sandbox work?" +
    "</strong>" +
    "<p>" +
    "The Sandbox is a dynamic virtual world with user-generated creations. Players can" +
    "build and create their own NFTs, including avatars, virtual goods, and even" +
    "games using VoxEdit and Game Maker. Not only can they use the virtual goods to" +
    "interact with other players, but they can also monetize these NFTs by trading on" +
    "the Sandbox Marketplace" +
    "</p>" +
    "<strong>" +
    "What is Sandbox (SAND)?" +
    "</strong>" +
    "<p>" +
    "Sandbox (SAND) is the native token of The Sandbox. It is an ERC-20 token with a" +
    "total supply of 3 billion SAND." +
    "As a utility token, SAND is used to perform any type of transaction and" +
    "interaction within The Sandbox ecosystem. This means that players need to own" +
    "SAND to play the game, customize their avatars, buy LANDs, or trade ASSETS on" +
    "the Sandbox Marketplace. SAND is also a governance token. SAND holders can" +
    "propose and vote on changes to the platform through a Decentralized Autonomous" +
    "Organization (DAO) structure." +
    "In addition, holders can stake SAND within the game to earn rewards, including a" +
    "share in the revenue from all transactions in SAND tokens. Most importantly," +
    "staking SAND can increase the chance of finding valuable GEMs and CATALYSTs, the" +
    "game resources needed for creating ASSETS with a higher rarity." +
    "SAND can be acquired through playing different games and contests in The Sandbox" +
    "or purchased on cryptocurrency exchanges like Binance. ." +
    "</p>";

  let sandboxModalContent = document.getElementById("sandbox-modal-content");
  sandboxModalContent.appendChild(div);
}

function divModalFooterSandboxCreate() {
  let div = document.createElement("div");
  div.className = "modal-footer";
  div.id = "sandbox-modal-footer";

  let sandboxModalContent = document.getElementById("sandbox-modal-content");
  sandboxModalContent.appendChild(div);
}

function buttonFooterSandboxCreate() {
  let button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "sandbox-button-footer";
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("type", "button");
  button.innerText = "Close";

  let sandboxModalContent = document.getElementById("sandbox-modal-content");
  sandboxModalContent.appendChild(button);
}

// CARD SANDBOX
divColSandBoxCreate();
divCardSandBoxCreate();
imgSandboxCreate();
divCardBodySandboxCreate();
h5CardTitleSandboxCreate();
pCardTextSandboxCreate();
buttonModalSandboxCreate();

// MODAL SANDBOX
divModalFadeSandboxCreate();
divModalDialogSandboxCreate();
divModalContentSandboxCreate();
divModalHeaderSandboxCreate();
h5ModalTitleSandboxCreate();
buttonCloseSandboxCreate();
divModalBodySandboxCreate();
divModalFooterSandboxCreate();
buttonFooterSandboxCreate();

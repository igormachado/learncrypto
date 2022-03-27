// CRAETE CARD POLYGON
function divColPolygonCreate() {
  let div = document.createElement("div");
  div.className = "col";
  div.id = "polygon-col";
  let container = document.getElementById("container");

  container.appendChild(div);
}

function divCardPolygonCreate() {
  let div = document.createElement("div");
  div.id = "polygon-card";
  div.className = "card";

  let divCol = document.getElementById("polygon-col");
  divCol.appendChild(div);
}

function imgPolygonCreate() {
  let img = document.createElement("img");
  img.setAttribute("src", "../../images/polygon.png");
  img.className = "card-img-top";
  img.id = "polygon-img";

  let polygonDivCard = document.getElementById("polygon-card");
  polygonDivCard.appendChild(img);
}

function divCardBodyPolygonCreate() {
  let div = document.createElement("div");
  div.className = "card-body";
  div.id = "polygon-card-body";

  let polygonDivCard = document.getElementById("polygon-card");
  polygonDivCard.appendChild(div);
}

function h5CardTitlePolygonCreate() {
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.id = "polygon-card-title";
  h5.innerText = "Polygon";

  let polygonDivCardBody = document.getElementById("polygon-card-body");
  polygonDivCardBody.appendChild(h5);
}

function pCardTextPolygonCreate() {
  let p = document.createElement("p");

  p.className = "card-text";
  p.id = "polygon-card-text";
  p.innerText = "If you want to know what is \nPolygon click in the button";

  let polygonDivCardBody = document.getElementById("polygon-card-body");
  polygonDivCardBody.appendChild(p);
}

function buttonModalPolygonCreate() {
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  // a.id = "bitcoin-learn";
  a.setAttribute("type", "button");
  a.setAttribute("data-bs-toggle", "modal");
  a.setAttribute("data-bs-target", "#staticBackdrop-polygon");
  a.innerText = "Let's learn";

  let polygonDivCardBody = document.getElementById("polygon-card-body");
  polygonDivCardBody.appendChild(a);
}

function divModalFadePolygonCreate() {
  let div = document.createElement("div");

  div.className = "modal fade";
  div.id = "staticBackdrop-polygon";
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "staticBackdropLabel");
  div.setAttribute("aria-hidden", "true");

  let polygonDivCardBody = document.getElementById("polygon-card-body");
  polygonDivCardBody.appendChild(div);
}

function divModalDialogPolygonCreate() {
  let div = document.createElement("div");
  div.className = "modal-dialog";
  div.id = "polygon-modal-dialog";

  let polygonModalFade = document.getElementById("staticBackdrop-polygon");
  polygonModalFade.appendChild(div);
}

function divModalContentPolygonCreate() {
  let div = document.createElement("div");
  div.className = "modal-content";
  div.id = "polygon-modal-content";

  let polygonModalDialog = document.getElementById("polygon-modal-dialog");
  polygonModalDialog.appendChild(div);
}

function divModalHeaderPolygonCreate() {
  let div = document.createElement("div");

  div.className = "modal-header";
  div.id = "polygon-modal-header";

  let polygonModalContent = document.getElementById("polygon-modal-content");
  polygonModalContent.appendChild(div);
}

function h5ModalTitlePolygonCreate() {
  let h5 = document.createElement("h5");
  h5.className = "modal-title";
  h5.id = "staticBackdropLabel";
  h5.innerText = "Polygon";

  let PolygonModalHeader = document.getElementById("polygon-modal-header");
  PolygonModalHeader.appendChild(h5);
}

function buttonClosePolygonCreate() {
  let button = document.createElement("button");

  button.className = "btn-close";
  button.id = "polygon-btn-close";

  button.setAttribute("type", "button");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");

  let polygonModalHeader = document.getElementById("polygon-modal-header");
  polygonModalHeader.appendChild(button);
}

function divModalBodyPolygonCreate() {
  let div = document.createElement("div");

  div.className = "modal-body";
  div.id = "polygon-modal-body";

  div.innerHTML =
    "<strong>" +
    "What Is Polygon (MATIC)?" +
    "</strong>" +
    "<p>" +
    "Polygon is a framework for creating Ethereum-compatible blockchain networks and" +
    "scaling solutions. Polygon is more of a protocol than a single solution. This is" +
    "why one of the main offerings of the ecosystem is the Polygon SDK, which allows" +
    "developers to create these Ethereum-compatible networks." +
    "Still, you may have heard about the Polygon Network, a Proof of Stake (PoS)" +
    "sidechain and one of the first live products in the Polygon ecosystem. A" +
    "sidechain is essentially a parallel chain that’s connected to another" +
    "Sidechains can offer several benefits – most notably, increased transaction" +
    "throughput and low fees. If you’ve used the Polygon Network, you’ll know that" +
    "it’s incredibly fast and very low-cost compared to Ethereum. Even so, there are" +
    "some trade-offs to be made for this performance. We’ll get into these later." +
    "As Polygon supports the Ethereum Virtual Machine (EVM), existing applications" +
    "can be ported to it with relative ease. This can give users a comparable" +
    "experience to Ethereum, only with the previously mentioned high throughput and" +
    "low fees." +
    "But what can you do as a user on Polygon? Unsurprisingly, similar things as you" +
    "can on Ethereum, but much cheaper and faster. Some of the most popular DeFi" +
    "dapps have already been deployed on it, such as Aave, 1inch, Curve, and Sushi." +
    "But there are also some native applications on it that don’t exist elsewhere," +
    "such as QuickSwap and Slingshot." +
    "Polygon development is led by its founders: Jaynti Kanani, Sandeep Nailwal," +
    "Anurag Arjun, and Mihailo Bjelic." +
    "</p>" +
    "<strong>" +
    "How does Polygon work?" +
    "</strong>" +
    "<p>" +
    "The Polygon framework supports two major types of Ethereum-compatible networks:" +
    "secured chains and stand-alone chains. An example for a secured chain is a" +
    "rollup, while an example for a stand-alone chain is a sidechain." +
    "Secured chains rely on the infrastructure of the chain they are attached to, so" +
    "they don’t have to adopt their own security model. In contrast, stand-alone" +
    "chains have to take care of their own security. This means that secured chains" +
    "tend to offer a higher level of security, while stand-alone chains offer more" +
    "flexibility for specific needs." +
    "So, what about the Polygon Network? The Polygon sidechain is secured by its own" +
    "set of validators (validator pool), and it has to submit checkpoints to Ethereum" +
    "from time to time. This is why some people say that sidechains are not a “pure”" +
    "Layer 2 solution. They have to take care of their own security instead of" +
    "leveraging Ethereum’s security. This can be a crucial distinction, and we’ll get" +
    "into it in a bit more detail later when discussing rollups." +
    "In the future, the Polygon platform aims to support a wider variety of scaling" +
    "solutions, including zero-knowledge (zk) rollups, optimistic rollups, and" +
    "Validum chains. Once more of these scaling solutions are available, developers" +
    "will have more tools to develop innovative applications, solutions, and" +
    "products. Also, we can expect all of these to be compatible with existing" +
    "Ethereum tools and wallets, such as MetaMask." +
    "</p>";

  let polygonModalContent = document.getElementById("polygon-modal-content");
  polygonModalContent.appendChild(div);
}

function divModalFooterPolygonCreate() {
  let div = document.createElement("div");
  div.className = "modal-footer";
  div.id = "polygon-modal-footer";

  let polygonModalContent = document.getElementById("polygon-modal-content");
  polygonModalContent.appendChild(div);
}

function buttonFooterPolygonCreate() {
  let button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "polygon-button-footer";
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("type", "button");
  button.innerText = "Close";

  let polygonModalContent = document.getElementById("polygon-modal-content");
  polygonModalContent.appendChild(button);
}

// CARD POLYGON
divColPolygonCreate();
divCardPolygonCreate();
imgPolygonCreate();
divCardBodyPolygonCreate();
h5CardTitlePolygonCreate();
pCardTextPolygonCreate();
buttonModalPolygonCreate();

//  MODAL POLYGON
divModalFadePolygonCreate();
divModalDialogPolygonCreate();
divModalContentPolygonCreate();
divModalHeaderPolygonCreate();
h5ModalTitlePolygonCreate();
buttonClosePolygonCreate();
divModalBodyPolygonCreate();
divModalFooterPolygonCreate();
buttonFooterPolygonCreate();

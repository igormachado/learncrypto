function headerCreate() {
  let header = document.createElement("header");
  header.id = "header";
  header.innerText = "🌐 The future of money 🌐";

  document.body.appendChild(header);
}

function divContainerCreate() {
  let div = document.createElement("div");
  div.id = "container";
  div.className = "row align-items-center";

  document.body.appendChild(div);
}

headerCreate();
divContainerCreate();

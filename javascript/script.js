// Declaração de Variáveis
const botao = document.querySelector("#botao");
const aplicar = document.querySelector("#aply");
let escolha_fundo;
let baixo;
let alto;
let escolha_face;
let escolha_rotate;
let escolha_border;
let escolha_cor_fundo;

// Eventos
botao.addEventListener("click", toggleConfig);

aplicar.addEventListener("click", settings);

function toggleConfig() {
  const div = document.querySelector("#config");
  if (div.style.display === "none") {
    div.style.display = "block";
    botao.style.border = "2px solid black";
  } else {
    div.style.display = "none";
    botao.style.border = "2px solid white";
  }
}

function settings() {
  let div = document.querySelector("#config");
  let opcoes = document.querySelector("#button");
  let color = document.querySelector(".color");
  let face = document.querySelectorAll(".face");
  let bottom = document.querySelector(".bottom");
  let top = document.querySelector(".top");
  let cube = document.querySelector("#cube_animation");
  let shadow = document.querySelector(".shadow");

  defineCor();


  switch (escolha_fundo) {
    case "you":
      color.style.background = escolha_cor_fundo;
      color.style.backgroundSize = "300% 300%";
      break;
    case "minecraft":
      face.forEach((face) => {
        face.style.backgroundImage = "url(../image/lado_cubo.jpg)";
        face.style.backgroundSize = "110% 115%";
        face.style.animation = "none";
        face.style.border = "1px solid black";
      });
      color.style.backgroundImage = "url(../image/fundo.jpg_large)";
      color.style.backgroundSize = "100% 100%";
      break;
  }

  switch (escolha_rotate) {
    case "rota1":
      shadow.style.display = "none";
      cube.style.animation = "rotate1 10s linear infinite";
      break;
    case "rota2":
      shadow.style.display = "flex";
      cube.style.animation = "rotate2 10s linear infinite";
      break;
  }

  if (escolha_fundo === "minecraft") {
    top.style.backgroundImage = "url(../image/cima_cubo.png)";
    top.style.border = "1px solid black";
    bottom.style.backgroundImage = "url(../image/baixo_cubo.png)";
    bottom.style.border = "1px solid black";
    color.style.animation = "none";
    shadow.style.display = "none";
  } else {
    face.forEach((face) => {
      face.style.background = escolha_face;
      face.style.border = escolha_border != "none" ? "2px solid " + escolha_border : escolha_border;
      face.style.backgroundSize = "125% 125%";
    });

    bottom.style.border = escolha_border != "none" ? "2px solid " + escolha_border : escolha_border;
    top.style.border = escolha_border != "none" ? "2px solid " + escolha_border : escolha_border;
    bottom.style.background = baixo;
    top.style.background = alto;
    color.style.animation = "colors 10s ease infinite";
  }

  div.style.display = "none";
  opcoes.style.background = "transparent";
  opcoes.style.border = "none";
  botao.style.border = "2px solid white";
  shadow.style.backgroundColor = baixo;
  shadow.style.boxShadow = "0px 20px 200px 150px " + baixo;
}

function escolhaFundo(id) {
  escolha_fundo = id;
}

function escolhaRota(id) {
  escolha_rotate = id;
}

function escolhaCor3(value) {
  escolha_border = value;
}

function defineBorder() {
  escolha_border = "none";
}

function defineCor() {
  let y = document.querySelector("#cor1");
  let x = document.querySelector("#cor2");
  baixo = y.value;
  alto = x.value;
  escolha_face =
    "linear-gradient(-180deg, " + alto + " 30%, " + baixo + " 80%)";
}

function defineBackground() {
  let y = document.querySelector("#back1");
  let x = document.querySelector("#back2");
  let z = document.querySelector("#back3");
  escolha_cor_fundo =
    "linear-gradient(90deg, " + y.value + ", " + x.value + ", " + z.value + ")";
  escolha_fundo = "you";
}

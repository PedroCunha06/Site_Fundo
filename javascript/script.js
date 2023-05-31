/* 
Declaração de Variáveis
*/
let botao = document.querySelector('#botao');
let aplicar = document.querySelector('#aply');
let escolha_fundo;
let baixo;
let alto;
let escolha_face;
let escolha_rotate;
let escolha_border;

/* 
Eventos
*/
botao.addEventListener("click", function () {
    let div = document.querySelector('#config');
    let opcoes = document.querySelector('#button');
    let botao = document.querySelector('#botao');
    if (div.style.display === "none") {
        opcoes.style.background = "white";
        opcoes.style.border = "2px solid black";
        div.style.display = "block";
        div.style.position = "absolute";
        botao.style.border = "2px solid black";
    }
    else {
        div.style.display = "none";
        opcoes.style.background = "transparent";
        opcoes.style.border = "none";
        botao.style.border = "2px solid white";
    }
});

aplicar.addEventListener('click', settings);

defineCor();

function settings() {
    let div = document.querySelector('#config');
    let opcoes = document.querySelector('#button');
    let color = document.querySelector('.color');
    let face = document.querySelectorAll('.face');
    let bottom = document.querySelector('.bottom');
    let top = document.querySelector('.top');
    let cube = document.querySelector
        ('#cube_animation');

    defineCor();

    switch (escolha_fundo) {
        case "space": {
            color.style.background = "var(--space)";
            color.style.backgroundSize = "300% 300%";
            color.style.animation = "face 10s linear infinite";
            break;
        }
        case "sky": {
            color.style.background = "var(--sky)";
            color.style.backgroundSize = "300% 300%";
            color.style.animation = "face 10s linear infinite";
            break;
        }
        case "minecraft": {
            face.forEach(function (face) {
                face.style.backgroundImage = "url(../image/lado_cubo.jpg)";
                face.style.backgroundSize = "110% 115%";
                face.style.animation = "none";
                face.style.border = "1px solid black"
            });
            top.style.backgroundImage = "url(../image/cima_cubo.png)";
            top.style.border = "1px solid black"
            bottom.style.backgroundImage = "url(../image/baixo_cubo.png)";
            bottom.style.border = "1px solid black"
            break;
        }
    }

    switch (escolha_rotate) {
        case "rota1": {
            cube.style.animation = "rotate1 10s linear infinite"
            break;
        }
        case "rota2": {
            cube.style.animation = "rotate2 10s linear infinite"
            break;
        }
    }

    if (escolha_fundo === "minecraft") {
        return;
    }
    else {
        face.forEach(function (face) {
            face.style.background = escolha_face;
            face.style.borderColor = escolha_border;
            face.style.backgroundSize = "125% 125%";
        });
    }


    bottom.style.background = baixo;
    top.style.background = alto;
    bottom.style.borderColor = escolha_border;
    top.style.borderColor = escolha_border;
    div.style.display = "none";
    opcoes.style.background = "transparent";
    opcoes.style.border = "none";
    botao.style.border = "2px solid white";

    console.log(escolha_face);
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

function defineCor() {
    let y = document.querySelector('#cor1');
    let x = document.querySelector('#cor2');
    baixo = y.value;
    alto = x.value;
    escolha_face = "linear-gradient(-180deg, " + alto + " 30%, " + baixo + " 80%)"
}


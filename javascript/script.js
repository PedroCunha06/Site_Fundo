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

function settings() {
    let div = document.querySelector('#config');
    let color = document.querySelector('.color');
    let face = document.querySelectorAll('.face');
    let bottom = document.querySelector('.bottom');
    let top = document.querySelector('.top');
    let cube = document.querySelector
        ('#cube_animation');

    defineCor(alto, baixo)

    switch (escolha_fundo) {
        case "space": {
            color.style.background = "var(--space)";
            color.style.backgroundSize = "300% 300%";
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

    face.forEach(function (face) {
        face.style.background = escolha_face;
        face.style.borderColor = escolha_border;
        face.style.backgroundSize = "125% 125%";
    });

    bottom.style.background = baixo;
    top.style.background = alto;
    bottom.style.borderColor = escolha_border;
    top.style.borderColor = escolha_border;
    div.style.display = "none";
    opcoes.style.background = "transparent";
    opcoes.style.border = "none";
    botao.style.border = "2px solid white";
    console.log(escolha_border);

}

function escolhaFundo(id) {
    escolha_fundo = id;

}

function escolhaRota(id) {
    escolha_rotate = id;
}

function escolhaCor1(value) {
    baixo = value;
}

function escolhaCor2(value) {
    alto = value;
}

function escolhaCor3(value) {
    escolha_border = value;
}

function defineCor(value1, value2) {
    escolha_face = "linear-gradient(-180deg, " + value1 + " 30%, " + value2 + " 80%)"
}
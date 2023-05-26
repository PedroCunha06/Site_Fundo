/* 
Declaração de Variáveis
*/
let botao = document.querySelector('#botao');
let escolha_fundo;
let escolha_cor;
let escolha_rotate;
let escolha_stars;
let escolha_face;
let aplicar = document.querySelector('#aply');
/* 
Eventos
*/
botao.addEventListener("click", function () {
    let div = document.querySelector('#config');
    if (div.style.display === "none") {
        div.style.display = "block";
        div.style.position = "absolute"
    }
    else {
        div.style.display = "none";
    }
});

aplicar.addEventListener('click', settings);
function settings() {
    let div = document.querySelector('#config');
    let color = document.querySelector('.color');
    let face = document.querySelectorAll('.face');
    let cube = document.querySelector('#cube_animation');

    switch (escolha_fundo) {
        case "dark1": {
            color.style.background = "linear-gradient(45deg, var(--dark1))";
            color.style.backgroundSize = "300% 300%";
            break;
        }
        case "dark2": {
            color.style.background = "linear-gradient(45deg, var(--dark2))";
            color.style.backgroundSize = "300% 300%";
            break
        }
        case "night": {
            color.style.background = "linear-gradient(45deg, var(--night))";
            color.style.backgroundSize = "300% 300%";
            break;
        }
        case "day1": {
            color.style.background = "linear-gradient(45deg, var(--day1))";
            color.style.backgroundSize = "300% 300%";
            break;
        }
        case "day2": {
            color.style.background = "linear-gradient(45deg, var(--day2))";
            color.style.backgroundSize = "300% 300%";
            break;
        }
        case "day3": {
            color.style.background = "linear-gradient(45deg, var(--day3))";
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

    face.forEach(function(face) {
        face.style.background = escolha_face;
    });

    div.style.display = "none";
}

function escolhaFundo(id) {
    escolha_fundo = id;

}

function escolhaRota(id) {
    escolha_rotate = id;
}


function escolhaStars(id) {
    escolha_stars = id;
}

function escolhaCor(value) {
    escolha_face = "linear-gradient(180deg, black 50%, " + value + ")"
}
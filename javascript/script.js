/* 
Declaração de Variáveis
*/
let botao = document.querySelector('#botao');
let escolha_fundo;
let escolha_cor;
let escolha_rotate;
let escolha_animation_fundo;
let escolha_stars;
let aplicar = document.querySelector('#aply');
/* 
Eventos
*/
botao.addEventListener("click", function () {
    let div = document.querySelector('#config');
    if (div.style.display === "none") {
        div.style.display = "block";
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
    let stars = document.querySelector('.stars');

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

    switch (escolha_stars) {
        case "yes": {
            stars.style.display = "block";
            break;
        }
        case "no": {
            stars.style.display = "none";
            break;
        }
    }

    switch (escolha_animation_fundo) {
        case "yes": {
            color.style.animation = "colors 15s ease infinite";
            break;
        }
        case "no": {
            color.style.animation = "none";
            break;
        }
    }

    switch (escolha_cor) {
        case "blue": {
            for (let i = 0; i < face.length; i++) {
                face[i].style.background = "linear-gradient(-180deg, var(--darkblue))";
                face[i].style.backgroundSize = "175% 175%";
            }
            break;
        }
        case "red": {
            for (let i = 0; i < face.length; i++) {
                face[i].style.background = "linear-gradient(-180deg, var(--darkred))";
                face[i].style.backgroundSize = "175% 175%";
            }
            break;
        }
        case "yellow": {
            for (let i = 0; i < face.length; i++) {
                face[i].style.background = "linear-gradient(-180deg, var(--darkyellow))";
                face[i].style.backgroundSize = "175% 175%";
            }
            break;
        }
        case "pink": {
            for (let i = 0; i < face.length; i++) {
                face[i].style.background = "linear-gradient(-180deg, var(--darkpink))";
                face[i].style.backgroundSize = "175% 175%";
            }
            break;
        }
    }

    switch (escolha_rotate) {
        case "rota0": {
            cube.style.animation = "none";
            break;
        }
        case "rota1": {
            cube.style.animation = "rotate1 10s linear infinite"
            break;
        }
        case "rota2": {
            cube.style.animation = "rotate2 10s linear infinite"
            break;
        }
    }

    div.style.display = "none";
}

function escolhaFundo(id) {
    escolha_fundo = id;

}

function escolhaCor(id) {
    escolha_cor = id;
}

function escolhaRota(id) {
    escolha_rotate = id;
}

function escolhaAnimation(id) {
    escolha_animation_fundo = id;
}

function escolhaStars(id) {
    escolha_stars = id;
}
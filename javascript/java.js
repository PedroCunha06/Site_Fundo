/* 
Declaração de Variáveis
*/
let botao = document.querySelector('#botao');
let escolha_fundo;
let escolha_cor;
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

    switch (escolha_fundo) {
        case "dark1": {
            color.style.background = "linear-gradient(45deg, var(--dark1))";
            break;
        }
        case "dark2": {
            color.style.background = "linear-gradient(45deg, var(--dark2))";
            break
        }
        case "night": {
            color.style.background = "linear-gradient(45deg, var(--night))";
            break;
        }
        case "day1": {
            color.style.background = "linear-gradient(45deg, var(--day1))";
            break;
        }
        case "day2": {
            color.style.background = "linear-gradient(45deg, var(--day2))";
            break;
        }
        case "day3": {
            color.style.background = "linear-gradient(45deg, var(--day3))";
            break;
        }
    }
    switch (escolha_cor) {
        case "blue": {
            face.style.background = "linear-gradient(-180deg, var(--darkblue))";
            break;
        }
        case "red": {
            face.style.background = "linear-gradient(-180deg, var(--darkred))";
            break;
        }
        case "yellow": {
            face.style.background = "linear-gradient(-180deg, var(--darkyellow))";
            break;
        }
        case "pink": {
            face.style.background = "linear-gradient(-180deg, var(--darkpink))";
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
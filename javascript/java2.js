/* 
Declaração de Variáveis
*/
// Botão que mostra Caixa de Configuracão
let botao = document.querySelector('#botao');
// Botoes de fundo
let escolha_fundo;
// Botoes de 
let escolha_anima;
// Aplicar
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

    switch(escolha_fundo) {
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

    switch(escolha_anima) {
        case "animado": {
            color.style.animation = "colors 10s ease infinite";
            break;
        }
        case "nao_animado": {
            color.style.animation = "none";
            break;
        }
    }
    div.style.display = "none";
}

function escolhaFundo(id) {
    escolha_fundo = id;

}

function escohaAnima(id) {
    escolha_anima = id;
}



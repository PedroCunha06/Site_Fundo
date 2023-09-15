const FACE_CUBE = 275;
const SPACE_CUBE = (FACE_CUBE / 2);

const cubeElem = document.querySelector('[data-cube]');
const faceElem = document.querySelectorAll('[data-face]');
const buttonElem = document.querySelector('[data-button]');
const buttonBackElem = document.querySelector('[data-back]');
const boxConfigElem = document.querySelector('[data-box]');

setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);
buttonElem.addEventListener('click', openBoxConfig)
buttonBackElem.addEventListener('click', openBoxConfig)

function setPixelToWorldScale() {
    // innerWidht => Retorna a largura da area da janela
    // innerWHeight => Retorna a altura da area da janela
    // (window.innerWidth / window.innerHeight) Calcula a proporcao entre a largura e altura da janela

    let worldToPixelScale = (window.innerWidth / window.innerHeight)
    if (worldToPixelScale > 1.5) {
        worldToPixelScale = 1.5;
    }
    cubeElem.style.width = `${FACE_CUBE * worldToPixelScale}px`
    cubeElem.style.height = `${FACE_CUBE * worldToPixelScale}px`
    setFaceToWorldScale(worldToPixelScale);
}

function setFaceToWorldScale(worldToPixelScale) {
    faceElem.forEach((face) => {
        face.style.setProperty("--space_face", ((SPACE_CUBE * worldToPixelScale) - 1));
    })
}

function openBoxConfig() {
    if(boxConfigElem.style.display != "flex") {
        boxConfigElem.style.display = "flex";
        buttonElem.style.display = "none"
    } else {
        boxConfigElem.style.display = "none";
        buttonElem.style.display = "block"
    }
}
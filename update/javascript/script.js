const FACE_CUBE = 275;
const SPACE_CUBE = (FACE_CUBE / 2);

const cubeElem = document.querySelector('[data-cube]');
const faceElem = document.querySelectorAll('[data-face]');

setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);

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
const FACE_CUBE = 275;
const SPACE_CUBE = (FACE_CUBE / 2);
const BACKGROUNDSIZE = 100;
const BACKGROUND = 300;

const backElem = document.querySelector('[data-background]')

const cubeElem = document.querySelector('[data-cube]');
const faceElem = document.querySelectorAll('[data-face]');
const faceUpElem = document.querySelector('[data-faceUp]');
const faceDownElem = document.querySelector('[data-faceDown]');
const faceShadowElem = document.querySelector('[data-faceShadow]');

const buttonElem = document.querySelector('[data-button]');
const buttonBackElem = document.querySelector('[data-back]');
const buttonApplyElem = document.querySelector('[data-apply]');
const boxConfigElem = document.querySelector('[data-box]');

let escolha;

setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);
buttonElem.addEventListener('click', openBoxConfig);
buttonBackElem.addEventListener('click', openBoxConfig);
buttonApplyElem.addEventListener('click', ApplyCube);



function setPixelToWorldScale() {
    // innerWidht => Retorna a largura da area da janela
    // innerWHeight => Retorna a altura da area da janela
    // (window.innerWidth / window.innerHeight) Calcula a proporcao entre a largura e altura da janela

    let worldToPixelScale = (window.innerWidth / window.innerHeight)
    if (worldToPixelScale > 1.5) {
        worldToPixelScale = 1.5;
    }
    // Calcular uma formula q em certo estagio da tela, a proporcao nao cresca, mas diminua
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(worldToPixelScale)
    cubeElem.style.width = `${FACE_CUBE * worldToPixelScale}px`
    cubeElem.style.height = `${FACE_CUBE * worldToPixelScale}px`
    setFaceToWorldScale(worldToPixelScale);
}

function setFaceToWorldScale(worldToPixelScale) {
    faceElem.forEach((face) => {
        face.style.setProperty("--space_face", ((SPACE_CUBE * worldToPixelScale) - 1));
    })
    faceShadowElem.style.setProperty("--space_face", ((SPACE_CUBE * worldToPixelScale) - 1));
    faceDownElem.style.setProperty("--space_face", ((SPACE_CUBE * worldToPixelScale) - 1));
    faceUpElem.style.setProperty("--space_face", ((SPACE_CUBE * worldToPixelScale) - 1));
}

function openBoxConfig() {
    if (boxConfigElem.style.display != "flex") {
        boxConfigElem.style.display = "flex";
        buttonElem.style.display = "none"
        resetLoadFace();
    } else {
        boxConfigElem.style.display = "none";
        buttonElem.style.display = "block"
    }
}

function ApplyCube() {
    const background = getValuesBackGround();
    const faces = getValuesFace();
    const faceUp = getValueFaceTop();
    const faceDown = getValueFaceDown();
    const border = getValuesBorder();

    if (escolha !== faces) {
        setLoadFace()
    }
    setTimeout(() => {
        // FACES CHANGES
        faceElem.forEach((face) => {
            face.style.background = faces;
            face.style.backgroundSize = `${BACKGROUNDSIZE}%, ${BACKGROUNDSIZE}%`
            face.style.border = border;
        });
        faceUpElem.style.backgroundColor = faceUp.value;
        faceDownElem.style.backgroundColor = faceDown.value;
        faceShadowElem.style.backgroundColor = faceDown.value;
        faceShadowElem.style.display = "block";
        faceShadowElem.style.boxShadow = `0px 20px 200px 150px ${faceDown.value}`


        // BACK CHANGES
        backElem.style.background = background;
        backElem.style.backgroundSize = `${BACKGROUND}%, ${BACKGROUND}%`
        backElem.style.animation = getAnimationBackGround();
        console.log(getAnimationBackGround())


    }, 1000);


    openBoxConfig();
    escolha = getValuesFace();
}

function getValuesBackGround() {
    let escolha;
    let y = document.querySelector("#back1");
    let x = document.querySelector("#back2");
    let z = document.querySelector("#back3");
    escolha = `linear-gradient(90deg,  ${y.value}, ${x.value}, ${z.value})`

    return (
        escolha
    )
}

function getAnimationBackGround() {
    const no = document.querySelector('#backNo');

    return no.checked ? `none` : `animationBackGround 5s ease infinite reverse`;
}

function getValuesFace() {
    let escolha;
    let x = getValueFaceTop();
    let y = getValueFaceDown();
    escolha = `linear-gradient(-180deg, ${x.value} 30%, ${y.value} 80%)`

    return (
        escolha
    )
}

function getValueFaceTop() {
    let x = document.querySelector("#color1");
    return x;
}

function getValueFaceDown() {
    let x = document.querySelector("#color2");
    return x;
}

function getValuesBorder() {
    let escolha;
    let x = document.querySelector("#border1");
    let no = document.querySelector("#borderNo");

    console.log(no.click)

    return no.checked ? `none` : `1px solid ${x.value}`;
}

function setLoadFace() {
    faceElem.forEach((face) => {
        face.setAttribute("id", "changeColorFace")
    });
    faceUpElem.style.backgroundColor = "white";
    faceDownElem.style.backgroundColor = "white"
    faceShadowElem.style.display = "none";
}

function resetLoadFace() {
    faceElem.forEach((face) => {
        face.removeAttribute("id", "changeColorFace")
    })
}
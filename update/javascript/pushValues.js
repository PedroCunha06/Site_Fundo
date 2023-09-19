export default function getValuesBackGround() {
    let escolha;
    let y = document.querySelector("#back1");
    let x = document.querySelector("#back2");
    let z = document.querySelector("#back3");
    escolha = `linear-gradient(90deg,  ${y.value}, ${x.value}, ${z.value})`
    
    return (
       escolha
    )
}

export default function getValuesFace() {
    let escolha;
    let x = document.querySelector("#color1");
    let y = document.querySelector("#color2");
    escolha = `linear-gradient(-180deg, ${x.value} 30%, ${y.value} 80%)`

    return (
        escolha
    )
}

export default function getValuesBorder() {
    let escolha;
    let x = document.querySelector("#border")
    let yes = document.querySelector("#borderYes")
    let no = document.querySelector("#borderNo")

    if (yes.addEventListener('click', true)) {
        escolha = `1px solid ${x.value}`
    } else {
        if (no.addEventListener('click', true)) {
            escolha = `none`
        }
    }

    return (
        escolha
    )
}   
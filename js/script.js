const d = document

const textArea = d.querySelector('.text-area')
const mensaje = d.querySelector('.mensaje')
const btnEncriptar = d.querySelector('.btn-encriptar')
const btnDesencriptar = d.querySelector('.btn-desencriptar')
const btnCopiar = d.querySelector('.copiar')


// La letra "e" es convertida a "enter"
// La letra "i" es convertida a "imes"
// La letra "a" es convertida a "ai"
// La letra "o" es convertida a "ober"
// La letra "u" es convertida a "ufat"

btnEncriptar.addEventListener('click', e=> {
    let mensajeEncriptado = encriptar(textArea.value)

    mensaje.textContent = mensajeEncriptado;
    textArea.value = ""
})

btnDesencriptar.addEventListener('click', e=> {
    let mensajeDesencriptado = desencriptar(textArea.value)

    mensaje.textContent = mensajeDesencriptado;
    textArea.value= ""
})
btnCopiar.addEventListener('click',e=> {
    let copiado = mensaje.textContent

    textArea.value = copiado

    mensaje.textContent = ""
})


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i ++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i ++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}


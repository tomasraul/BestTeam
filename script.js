let comprimento = document.querySelector('#idComprimento')
let largura = document.querySelector('#idLargura')
let botao = document.querySelector('button')
let clear = document.createElement('button')
clear.setAttribute('class', 'clrRes')
clear.innerHTML = 'Clear'


function resultado(c, l){
    var arr = v=>Math.floor(v)
    var lado1 = arr(c/45) + 2
    var lado2 = arr(l/45) + 2
    total = lado1 + lado2
    return [lado1,lado2,total]
}
function area(c, l){
    return c*l
}
let cm = document.querySelector('#icm')
let m = document.querySelector('#im')
let sx = document.querySelector('#ids')
let qr = document.querySelector('#idq')

function resultado(c, l){
    var arr = v=>Math.floor(v)
    var lado1 = arr(c/45) + 2
    var lado2 = arr(l/45) + 2
    total = lado1 + lado2
    return [lado1,lado2,total]
}
comprimento.focus()
botao.addEventListener('click', function(){
    let resposta = document.createElement('div')
    let chapas = document.createElement('div')
    clear.style.display = 'block'
    if(comprimento.value.length > 0 && largura.value.length > 0){
        // Converta para número e faça a multiplicação sem alterar o input
        let comp = Number(comprimento.value)
        let larg = Number(largura.value)
        if (m.checked) {
            comp*=100
            larg*=100
        }
        resposta.innerHTML += `Com essas medidas é necessário <span class="num">${resultado(comp, larg)[2]}</span> Barrotes. <br>`

        let molho = Math.floor(resultado(comp, larg)[2] / 12)
        if(molho >= 1){
            resposta.innerHTML += `Equivalentes a <span class="num">${molho}</span> molho(s) `
        }
        let molho2 = resultado(comp, larg)[2] % 12
        if(molho >= 1 && molho2 > 0){
            resposta.innerHTML += `e mais <span class="num">${molho2}</span> barrotes <br>`
        }

        if(qr.checked){
            if (comp > 400) {
                let faltaComprimento = comp - 400
                resposta.innerHTML += `Comprimento: <span class="num">${comp/100}m</span>; faltará <span class="num">${resultado(comp, larg)[1]}</span> pedaços de <span class="num">${(faltaComprimento/100).toFixed(2)}m</span> cada <br>`
            }
            if (comp < 400) {
                let restoComprimento = 400 - comp
                resposta.innerHTML += `Comprimento: <span class="num">${comp / 100}m</span>; restará <span class="num">${resultado(comp, larg)[1]}</span> pedaços de <span class="num">${(restoComprimento/100).toFixed(2)}m</span> cada <br>`
            }
            if (larg > 400) {
                let faltaLargura = larg - 400
                resposta.innerHTML += `Largura: <span class="num">${larg / 100}m;</span> faltará <span class="num">${resultado(comp, larg)[0]} </span> pedaços de <span class="num">${(faltaLargura/100).toFixed(2)}m</span> cada <br>`
            }
            if (larg < 400) {
                let restoLargura = 400 - larg
                resposta.innerHTML += `Largura: <span class="num">${larg / 100}m</span>; restará <span class="num">${resultado(comp, larg)[0]}</span> pedaços de <span class="num">${(restoLargura/100).toFixed(2)}m</span> cada <br>`
            }
        }

        if(sx.checked){
            if (comp > 600) {
                let faltaComprimento = comp - 600
                resposta.innerHTML += `Comprimento: <span class="num">${comp / 100}m</span>;  faltará <span class="num">${resultado(comp, larg)[1]}</span> pedaços de <span class="num">${(faltaComprimento/100).toFixed(2)}m</span> cada <br>`
            }
            if (comp < 600) {
                let restoComprimento = 600 - comp
                resposta.innerHTML += `Comprimento: <span class="num">${comp / 100}m<span>; restará <span class="num">${resultado(comp, larg)[1]}<span> pedaços de <span class="num">${(restoComprimento/100).toFixed(2)}m</span> cada <br>`
            }
            if (larg > 600) {
                let faltaLargura = larg - 600
                resposta.innerHTML += `Largura: <span class="num">${larg / 100}m<span>; faltará <span class="num">${resultado(comp, larg)[0]}<span> pedaços de <span class="num">${(faltaLargura/100).toFixed(2)}m</span> cada <br>`
            }
            if (larg < 600) {
                let restoLargura = 600 - larg
                resposta.innerHTML += `Largura: <span class="num">${larg / 100}m</span>; restará <span class="num">${resultado(comp, larg)[0]}</span> pedaços de <span class="num">${(restoLargura/100).toFixed(2)}m</span> cada <br>`
            }
        }


        let areaChapas = area((comp/100), (larg/100)).toFixed(2)
        let numChapas = Math.ceil(areaChapas / 3.6)
        chapas.innerHTML += `-Area: <span class="num">${areaChapas}m<sup>2</sup></span>; <br> -Chapas Necessarias <span class="num">${numChapas}</span>, `
        let restchapas = (areaChapas % 3.6).toFixed(2)
        if(restchapas > 0){
        chapas.innerHTML += `e resta uma chapa de <span class="num">${restchapas}m<sup>2</sup></span>`
        }



        chapas.setAttribute('class', 'chapas')
        resposta.setAttribute('class', 'res')
        let result = document.querySelector('.result')
        result.appendChild(resposta)
        result.appendChild(clear)
        resposta.appendChild(chapas)

        
        clear.addEventListener('click', function(){
            result.removeChild(resposta)
            resposta.focus()
            clear.style.display = 'none'
        })
    } else {
        alert('campo vazio')
    }
    comprimento.value = ''
    largura.value = ''
    comprimento.focus()
})
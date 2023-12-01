let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//window.prompt('Digite algo')
function isNumer(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    if(isNumer(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))//adicionado valor a ultima item do array
        let item = document.createElement('option')//criando atraves de JS uma tag HTML
        item.text = `Valor ${num.value} adicionado` //adicionando algo a essa tag
        lista.appendChild(item)//adicionando item a tag do seletor do HTML pelo JS
        res.innerHTML = ''//quando um novo item é adicionado a div res torna-se vazia
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    //limpando e setando o cursor
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (pos in valores){
            soma += valores[pos]
            if (valores[pos] >= maior){
                maior = valores[pos]
            }
            if (valores[pos]<= menor){
                menor = menor[pos]
            }
            
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos ele é ${soma}</p>`
        res.innerHTML += `<p>A média de todos ele é ${media}</p>`
        
    }
}
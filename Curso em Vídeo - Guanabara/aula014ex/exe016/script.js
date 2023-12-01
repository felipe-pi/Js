function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    //validação dos dados

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!!!')
        windor.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido, considerando passo 1')
           p = 1
        }
        //Contagem crescente
        if (i<f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` //inserir unicode
            }
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` //inserir unicode
            }
        }
            
        //inserir bandeira no final
        res.innerHTML += `\u{1F3C1}`
    }

    //1F3C1
    
    
    /*var passoInicial = Number(document.querySelector('input#pini').value)
    var passoFinal = Number(document.querySelector('input#pfim').value)
    var salto = Number(document.querySelector('input#salt').value)
    var result = document.querySelector('div#res')
    for(var c=passoInicial;c<passoFinal;c = c + salto){
        //criar um elemento 
        //result.innerHTML = passoInicial+salto
        var contador = document.createElement('div') //criando tag html
        contador.setAttribute('id', 'resultado')
        contador.innerHTML(passoInicial+salto)
        //imprimir valor no elemnto criado
        //criar um novo elemento sequencial
    }*/

}
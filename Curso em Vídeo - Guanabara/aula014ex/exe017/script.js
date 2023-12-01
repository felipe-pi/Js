function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Porfavor, digite um número.')
    }else {
        let n = Number(num.value)
        c = 1
        tab.innerHTML = '' //limpando valores do seccion antes de imprimir
        while(c <= 10){
            let item = document.createElement('option')//criando elemento html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//é o valor do elemnto html item utilizado em liguagens ServerSice
            tab.appendChild(item)//adicionando elemento filho ao seccion
            c++
        }
    }
}
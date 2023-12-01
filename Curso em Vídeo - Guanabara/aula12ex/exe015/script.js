function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//ano com quatro dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os daos tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //adicionando imagens
        var img = document.createElement('img') //criando tag html img
        img.setAttribute('id', 'foto')// alterando o atributo do objeto criado.

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade<10){
                //crianca
                img.setAttribute('src', 'criancam.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', 'adultom.png')
                
            }else{
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade<10){
                //crianca
                img.setAttribute('src', 'criancaf.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', 'adultof.png')
                
            }else{
                //Idoso
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'//centralizando texto
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//para renderizar a imagem adicinamos uma tag filha na div
    }
}
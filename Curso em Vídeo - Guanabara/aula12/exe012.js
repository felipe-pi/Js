var idade = 16

if (idade<16){
    console.log(`Você tem ${idade} anos portanto não vota`)
}else if(idade <18 || idade > 65){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }

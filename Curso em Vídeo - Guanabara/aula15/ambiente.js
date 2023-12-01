let num = [6,7,8,0]
num.sort()
num.push(1)

console.log(`Nosso tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é  ${num[0]} posições`)
console.log(`o primeiro valor do vetor é  ${num} posições`)

let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor i8 esta na posição ${pos}`)
}

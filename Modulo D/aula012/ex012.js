var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('nao vota')
}else if (idade < 18 || idade > 65){
    console.log('voto op')
}else {
    console.log('voto obg')
}
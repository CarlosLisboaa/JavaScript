let num = [5, 8 , 2 , 9, 3]
num.push(1)
num.sort()
console.log (`${num}`)
console.log (`O verto tem ${num.length} posiçoes`)
console.log (`Primeiro valor do vetro e ${num[0]}`)
let pos = num.indexOf(4)
if (pos = -1) {
    console.log(`O valor nao foi encontrado!!`)
}else {
    console.log(`O valor  esta na posiçao ${pos}`)
}


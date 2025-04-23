let valores = [8,1,7,4,3,9]
valores.sort()
/*for (let pos=0; pos < valores.length; pos++) {
   console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
   */
  for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
  }
  
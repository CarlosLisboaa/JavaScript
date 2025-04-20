 function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
            window.alert('ERRO verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    
        if (fsex[0].checked) {
            gen = 'Homen'
            if (idade >= 0 && idade < 10) {
                // Crinça
                img.setAttribute('src', 'img/bebem.png')
            }else if (idade  < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        if (idade >= 0 && idade < 10) {
            // Crinça
            img.setAttribute('src', 'img/bebef.png')
        }else if (idade  < 21) {
            //jovem
            img.setAttribute('src', 'img/jovemf.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'img/adulta.png')
        }else {
            //idoso
            img.setAttribute('src', 'img/idosa.png')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
    
 
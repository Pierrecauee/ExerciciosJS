function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem_hrs')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12 ){
        img.src = './pics/manha.jpg'
        document.body.style.background = 'yellow'
    }else if(hora >= 12 && hora < 18){
       img.src = './pics/tarde.jpg'
       document.body.style.background = 'orange'
    }else{
        img.src = './pics/noite.jpg'
        document.body.style.background = 'black'

    }
        
    
}


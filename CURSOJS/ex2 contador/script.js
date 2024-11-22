function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados');
        res.innerHTML = ("impossivel Contar")
    } else {
        res.innerHTML = 'Contando.... <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(i < f){
            
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F47D}`
            }   
    
        }else {
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c}  \u{1F47D}`
            }
        }
            res.innerHTML += `\u{1F6F8}`

    }
}

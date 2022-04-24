function enter(){

    pe = document.getElementById('pe')
    pa = document.getElementById('pa')
    te = document.getElementById('te')
    say = document.getElementById('say')
const perdeu = document.getElementById('perdeu')

    if(pe.checked) {
        say.innerHTML = 'Eu Escolho Papel'
    }

    else if (pa.checked) {
        say.innerHTML = 'Eu Escolho Tesoura'
    }

    else if (te.checked) {
        say.innerHTML = 'Eu Escolho Pedra'
    }

perdeu.innerHTML = 'VOCÊ PERDEU'



}
setTimeout(function(){
    window.location.reload();
 }, 4000);




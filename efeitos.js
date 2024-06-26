var numeroEncontrar = 0;

function atualizar() {
    numeroEncontrar = parseInt(Math.random() * 100);
    console.log(numeroEncontrar);
}

function verificarNumero() {
    var aposta = document.getElementById('aposta').value;
    aposta = parseInt(aposta);

    if (isNaN(aposta)) {
        alert('Número Inválido');
    } else if (aposta > 100 || aposta < 0) {
        alert('Aposta Inválida');
    } else if (aposta > numeroEncontrar) {
        alert('Informe um número menor');
    } else if (aposta < numeroEncontrar) {
        alert('Informe um número maior');
    } else {
        alert('Acertou Miserávis :)');
    }
}

function atualizarJogo() {
    atualizar();
}

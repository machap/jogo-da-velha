
var letra;

function joga(celula) {
    var celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada === "X" || celulaclicada === "O") {
        alert("Opa, este espaço já foi escolhido!");
    } else {
        if (letra === "X") {
            letra = "O";
        } else {
            letra = "X";
        }
        document.getElementById(celula).innerHTML = letra;
    }
    verificar();
}

function verificar() {
    var c11 = document.getElementById('cel11').innerHTML;
    var c12 = document.getElementById('cel12').innerHTML;
    var c13 = document.getElementById('cel13').innerHTML;
    var c21 = document.getElementById('cel21').innerHTML;
    var c22 = document.getElementById('cel22').innerHTML;
    var c23 = document.getElementById('cel23').innerHTML;
    var c31 = document.getElementById('cel31').innerHTML;
    var c32 = document.getElementById('cel32').innerHTML;
    var c33 = document.getElementById('cel33').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) ||
        ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) ||
        ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) ||
        ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) ||
        ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) ||
        ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) ||
        ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) ||
        ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))) {
        alert('Parabéns! [' + letra + '] ganhou! ');

    }
}

function novo() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';

        }
    }
}

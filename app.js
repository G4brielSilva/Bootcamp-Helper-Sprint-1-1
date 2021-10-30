"use strict";
function contavogal(word) {
    var vogais = 0;
    word = word.toLowerCase();
    var letters = word.substring(0, word.length).split("");
    letters.forEach(function (value) {
        if (value == "a") {
            vogais++;
        }
        else if (value == "e") {
            vogais++;
        }
        else if (value == "i") {
            vogais++;
        }
        else if (value == "o") {
            vogais++;
        }
        else if (value == "u") {
            vogais++;
        }
    });
    return vogais;
}
//Exemplo com input direto da função
console.log('A palavra Abacaxi tem ' + contavogal('Abacaxi') + ' vogais');
//Exemplo usando um formulario
function contaVogal() {
    var palavra = (document.getElementById("word")).value;
    console.log('A palavra ' + palavra + ' tem ' + contavogal(palavra) + 'vogais');
}

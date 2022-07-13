var numErro = 0;
var palavraCadastrada = null;
var palavraForca = null;

function registrar() {
    var palavra = document.getElementById("inPalavra").value;
    var resposta = document.getElementById("outResposta");
    if (palavra.length <= 0) {
        resposta.innerHTML = "Digite uma palavra.";
    } else if (palavra.match(/[0-9]/)) {
        resposta.innerHTML = "A palavra não pode conter números.";
    } else if (palavra.match(/[^a-zA-ZçÇ]/)) {
        resposta.innerHTML = "A palavra não pode conter caracteres especiais.";
    } else {
        resposta.textContent = "Palavra registrada com sucesso!";
        btRegistrar.disabled = true;
        inPalavra.disabled = true;
        palavraCadastrada = palavra.split("");
        palavraForca = palavra.split("");
        for (var i = 0; i < palavraCadastrada.length; i++) {
            palavraForca[i] = "_";
        }
        document.getElementById("outRespostaLetraCerta").innerHTML = palavraForca.join(" ");

    }
}

function tentativa() {
    var letra = document.getElementById("inLetra").value;
    var resposta = document.getElementById("outRespostaLetra");
    if (letra.length <= 0) {
        resposta.innerHTML = "Digite uma letra.";
    } else if (letra.match(/[0-9]/)) {
        resposta.innerHTML = "A letra não pode ser um número.";
    } else if (letra.match(/[^a-zA-ZçÇ]/)) {
        resposta.innerHTML = "A letra não pode ser um caracteres especiais.";
    } else {
        var letraCerta = false;
        for (var i = 0; i < palavraCadastrada.length; i++) {
            if (letra.toLowerCase() == palavraCadastrada[i].toLowerCase()) {
                letraCerta = true;
            }
        }
        if (letraCerta == true) {
            resposta.innerHTML = "Letra certa!";
            for (var i = 0; i < palavraCadastrada.length; i++) {
                if (letra.toLowerCase() == palavraCadastrada[i].toLowerCase()) {
                    palavraForca[i] = letra;
                }
            }
            document.getElementById("outRespostaLetraCerta").innerHTML = palavraForca.join(" ").toLowerCase();
        } else {
            resposta.innerHTML = "Letra errada!";
            document.getElementById("outErro").innerHTML += letra + " ";
            numErro++;
            outErroNum.innerHTML = "Erros " + numErro + "/10";
            if (numErro == 10) {
                document.getElementById("final").innerHTML = "Você perdeu! A palavra era: " + palavraCadastrada.join("");
                btTentetiva.disabled = true;
                inLetra.disabled = true
            }
        }
        inLetra.value = "";
    }
    if (palavraForca.join("").toLowerCase() == palavraCadastrada.join("").toLowerCase()) {
        final.innerHTML = "Parabéns, você ganhou!";
        btTentetiva.disabled = true;
        inLetra.disabled = true;
    }

}

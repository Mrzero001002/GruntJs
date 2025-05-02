document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formIMC").addEventListener("submit", function (e) {
    e.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else if (imc < 34.9) classificacao = "Obesidade grau I";
        else if (imc < 39.9) classificacao = "Obesidade grau II";
        else classificacao = "Obesidade grau III";

        document.getElementById("resultado").innerText =
            `IMC: ${imc.toFixed(2)} — ${classificacao}`;
        } else {
        document.getElementById("resultado").innerText =
            "Insira valores válidos para peso e altura.";
        }
    });
})
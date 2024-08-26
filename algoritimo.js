function calcularPesoIdeal() {
    var altura = document.getElementById("altura").value;
    altura = parseFloat(altura);
    var pesoIdeal = (72.7 * altura) - 58;
    document.getElementById("resultado").textContent = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg";
}
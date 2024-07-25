document.addEventListener('DOMContentLoaded', function () {
    var contador = 0;
    const contadorElement = document.getElementById('contador');
    const incrementoboton = document.getElementById('incrementobtn');
    const resetbtn = document.getElementById('resetbtn');

    incrementoboton.addEventListener('click', function () {
        contador++;
        contadorElement.textContent = contador;
    });

    resetbtn.addEventListener('click', function () {
        contador = 0;
        contadorElement.textContent = contador;
    });
});
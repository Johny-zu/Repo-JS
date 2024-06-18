let valor = parseInt(prompt('Ingrese un valor del 1 o 3 '));

switch (valor) {
    case 1:
        document.write('Ingreso el valor es 1');
        break;
    case 2:
        document.write('Ingreso el valor es 2');
        break;
    case 3:
        document.write('Ingreso el valor es 3');
        break;
    default:
        document.write('No seleccion uno de los numeros pedidos');
        break;
}

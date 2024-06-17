let numeros = [];
numeros = [1, 2, 3, 4, 5];
 
document.write("Los numeros son: " + numeros + "<br>");
document.write("Tercer elemento: " + numeros[2] + "<br>");

document.write('------------------------------------<br>');
let frutas = ['Manzana', 'Pera', 'Uva', 'Sandia', 'Melon'];
document.write("Las frutas son: " + frutas + "<br>");

document.write('------------------------------------<br>');
document.write("Hay una cantidad de: " + frutas.length + " de frutas" + "<br>");

document.write('------------------------------------<br>');
document.write("El ultimo elemento es: " + frutas[frutas.length - 1] + "<br>");

document.write('------------------------------------<br>');
document.write("Tenemos los numeros: " + numeros.toString() + "<br>");

document.write('------------------------------------<br>');
frutas.pop();
document.write("Las frutas despues del pop son: " + frutas);
frutas.push('Mango');
document.write("<br>Las frutas despues del push son: " + frutas + "<br>");

document.write('------------------------------------<br>');
frutas.shift();
document.write("Las frutas despues del shift son: " + frutas);
frutas.unshift('Fresa');
document.write("<br>Las frutas despues del unshift son: " + frutas + "<br>");

document.write('------------------------------------<br>');
numeros.splice(1, 3);
document.write("Los numeros despues del splice son: " + numeros);

document.write('------------------------------------<br>');
document.write(frutas.sort() + "<br>");
document.write(frutas.reverse() + "<br>");
let a, b, suma, resta, division, multiplicacion, residuo, potencia;

a = prompt("Ingrese un número");
b = prompt("Ingrese otro número");

suma = parseInt(a) + parseInt(b)
//Tener en cuenta que se hace el parseInt porque se toman como cadenas string y de esta manera evitamos eso
resta = a - b;
division = a / b;
multiplicacion = a * b;
residuo = a % b;
potencia = a ** b;

document.write("La suma de los números es: " + suma + "<br>");
document.write("La resta de los números es: " + resta + "<br>");
document.write("La división de los números es: " + division + "<br>");
document.write("La multiplicación de los números es: " + multiplicacion + "<br>");
document.write("El residuo de los números es: " + residuo + "<br>");
document.write("La potencia de los números es: " + potencia + "<br>");
let palabra = 'Practicando en JS';
document.write("La palabra es: " + palabra + "<br>");

document.write("La longitud de la palabra es: " + palabra.length + "<br>");

document. write("La primera letra de la palabra es: " + palabra.charAt(0) + "<br>");

document.write("La última letra de la palabra es: " + palabra.charAt(palabra.length - 1) + "<br>");

document.write("Las primeras 4 palabras son: " + palabra.slice(0, 4) + "<br>"); 

document.write("La palabra en minúsculas es: " + palabra.toLowerCase() + "<br>");

document.write("La palabra en mayúsculas es: " + palabra.toUpperCase() + "<br>");

let NP = 'Segundo ejemplo';
NP = NP.replace('Segundo', 'Tercer');
document.write(NP + "<br>");

document.write(NP.split('ejemplo') + "<br>");
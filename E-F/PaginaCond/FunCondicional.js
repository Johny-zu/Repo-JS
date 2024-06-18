let nombre, edad;
nombre = prompt('Ingrese su nombre: ');
edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);

if (edad >= 18) {
    document.write(nombre, ' es mayor de edad' + '<br>');
} else {
    if (edad < 18){
    document.write(nombre, ' es menor de edad'+ '<br>');
    } else {
    document.write('Dato no ingresado'+ '<br>');
    }
}

let pais;
pais = prompt('Ingrese su país: ');
if (pais == 'Baja california'.ignoreCase) {
    document.write('Usted es de Baja california'+ '<br>');
} else {
    document.write('Usted es de otro país'+ '<br>');
}

if (edad >= 18 && pais == 'Baja california') {
    document.write('Usted es mayor de edad y es de Baja california'+ '<br>');
} else {
    document.write('Usted es menor de edad o es de otro país'+ '<br>');
}

if (edad >= 18 || pais == 'Baja california' ) {
    document.write('Usted es mayor de edad o es de Baja california'+ '<br>');
} else {
    document.write('Usted es menor de edad y es de otro país'+ '<br>');
}
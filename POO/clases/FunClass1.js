class Persona{
    nombre = 'Homero';
    apellido = 'simpson';
    direccion = 'av siempreviva 742';
    telefono = 1234567890;
    email = 'cabra@sol.com';

    trabajo(){
        return 'ingeniero nuclear';
    }
    estudios(){
        return 'Escuela primaria de Springfield';
    }
}

const homero = new Persona(); //definimos un objeto y lo creamos
document.write(homero.nombre + '<br>'); //accedemos a las propiedades del objeto

const bart = new Persona();
document.write('Bart ' + bart.apellido + '<br>');
document.write('Bart ' + bart.estudios() + '<br>');
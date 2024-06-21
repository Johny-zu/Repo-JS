let menu = '1. Ciclo While' +
            '\n2. Ciclo For ' +
            '\n3. For in' +
            '\n4. Salir';

do{
    let opcion = parseInt(prompt(menu));
    switch(opcion){
        case 1:
            let valor = parseInt(prompt('Ingrese un valor positivo mayor al 1 para el while'));
            let i = 1;
            document.write('Este sera para el while <br>');
            document.write('Los números del 1 al ' + valor + ' son: <br>');
            while(i <= valor){
                document.write(i + ' ');
                i++;
            }
            break;
        case 2:
            document.write('Este sera para el for <br>');
            let valorF = parseInt(prompt('Ingrese un valor positivo mayor al 1 para el for'));
           for(let i = 1; i <= valorF; i++){
               document.write(i + ' ');
           }           
            break;
            case 3:
                document.write('Este sera para el for in <br>');
                let cadena = prompt('Ingrese una cadena de texto');
                let vocal = 0;
                for(let i in cadena){
                    if(cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u'){
                        document.write(cadena[i] + ' ');
                        vocal++;
                    }
                    document.write('La cadena tiene: ' + vocal + ' vocales<br>'  );
                }
                break;
        case 4: document.write('Fin del programa');
        break;
        default:
            alert('Opcion no valida');
            break;
    }
} while(opcion != 4);
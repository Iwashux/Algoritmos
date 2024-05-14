function palindromo(palabra){

    // Se altera la palabra para que no tenga espacios, puntos, comas o acentos
    palabra = palabra.replace(/[.,\s]/g, '') // Elimina espacios, puntos y comas
        .replace(/[áÁ]/g, 'a') // Reemplaza á y Á por a
        .replace(/[éÉ]/g, 'e') // Reemplaza é y É por e
        .replace(/[íÍ]/g, 'i') // Reemplaza í y Í por i
        .replace(/[óÓ]/g, 'o') // Reemplaza ó y Ó por o
        .replace(/[úÚ]/g, 'u') // Reemplaza ú y Ú por u
        .toLowerCase();

    let largo = palabra.length; // Obtenemos la largo de la palabra

    // Calculamos la mitad de la largo quitando el decimal
    let mitad = Math.trunc(largo / 2);

    // Dividimos la palabra en dos partes
    let primeraParte = palabra.substring(0, mitad);
    let segundaParte = "";

    // Al no usar la funcion reverse se usa un for desde el final de la palabra contando la mitad
    for (let i = palabra.length -1; i >= palabra.length - mitad; i--) {
        segundaParte += palabra[i]; // Se agrega a la cadena
    }

    // Se validan las cadena de caracteres
    if(primeraParte === segundaParte){
        return true;
    }else{
        return false
    }
}

console.log(palindromo('Hóla, m.und.odnum aloh'))
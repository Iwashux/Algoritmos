function calculoPlacas(x,y,a,b){
    //x Ancho Techo     //a Ancho Placa
    //y Largo Techo     //b Largo Placa

    let uso_horizontal = Math.trunc(x/a); // cuantos caben de forma horizontal
    let uso_vertical = Math.trunc(y/b); // cuantos caben de forma vertical

    // las placas que caben en su horientacion especificada
    let placas = uso_vertical * uso_horizontal; 

    let sobra_lateral = x - (a * uso_horizontal); // cuanto sobra en el lateral
    let sobra_inferior = y - (b * uso_vertical) // cuanto sobra en la parte inferior

    // cambio de orientacion de la placa
    uso_horizontal = Math.trunc(y/a); // cuantos caben de forma horizontal
    uso_vertical = Math.trunc(x/b); // cuantos caben de forma vertical

    let relleno; // rellenar las partes sobrantes
    relleno = Math.trunc(sobra_lateral/b) * uso_horizontal; // cuantos caben en el sobrante cambiando
    relleno += Math.trunc(sobra_inferior/a) * uso_vertical; // la horientacion de la palca

    placas_totales = placas + relleno; // cantidad total de placas

    return placas_totales;
}

console.log(calculoPlacas(3,5,1,2));
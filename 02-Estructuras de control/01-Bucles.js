var dia = 10
//Estructura for: declaración de variable inicial, condición e incremento(El incremento puede variar(dia+=2) o ser un decremento (dia-5))
for(let dia = 1;dia<=31;dia++){
    console.log("Hoy es el dia "+dia+" del mes");
}

dia=0;
//Estructura while: Condición para repetir bucle
while(dia < 31){
    console.log("Hoy es el dia "+dia+" del mes");
    dia++;
}

//Estructura do-while: Misma función que while pero se ejecuta 1 vez mínimo
do{
    console.log("todo ok");
}while(dia < 5);
var EDAD = 45

//Estructura simple if
if(EDAD < 30){
    console.log("Eres un joven");
}

//Estructura anidada If-else, Podemos anidar todos los else if que queramos
if(edad < 30){
    console.log("Eres un joven");
}else{
    console.log("Ya no eres tan joven");
}

//Estructura switch

var DIA_SEMANA = "lunes"
switch(DIA_SEMANA){
case "lunes":
    console.log("Hoy es lunes");
    break;
case "martes":
    console.log("Hoy es martes");
    break;
case "miercoles":
    console.log("Hoy es miercoles");
    break;
case "jueves":
    console.log("Hoy es jueves");
    break;
case "viernes":
    console.log("Hoy es viernes");
    break;
    console.log("No sé qué has escrito, pero no es un día");
}
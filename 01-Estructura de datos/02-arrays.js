var agenda = [];
agenda[0] = "Alfonso "
console.table(agenda);
agenda[1] = "Juan";
console.table(agenda);
agenda[2] = "Jorge";
console.table(agenda);

//Autamaticamente lo inserta en el próximo índice vacío
agenda.push("Alberto");
console.table(agenda);

//Quita el último elemento del array
agenda.pop();
console.table(agenda);

//Con la función splice indicamos el índice y el número de elemntos a borrar
agenda.splice(0,1);
console.table(agenda);
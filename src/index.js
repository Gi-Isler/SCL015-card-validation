//import validator from "./validatior.js";
//validator()


document.getElementById("validar").addEventListener('click', function(){       //llamo, doy orden al boton
let numerotarjeta = document.getElementById("numerotarjeta").value;            //trae digitos


let x = numerotarjeta.length;      //cantidad de elementos del string
let numerotarjetainvertida ="";    //guarda  elementos de variable invertidos
while (x>=0) {                      //verifica si se cumple condicion

numerotarjetainvertida += numerotarjeta.charAt(x);  //envia ultima posicion del elemento a numerotarjetainvertida
   x--;

}
parseInt(numerotarjetainvertida,0);         //convierte string en numero

//console.log(numerotarjetainvertida);

})
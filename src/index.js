//import validator from "./validatior.js";
//validator()


document.getElementById("validar").addEventListener('click', function(){          //llamo, doy orden al boton
   let numerotarjeta = document.getElementById("numerotarjeta").value;            //trae digitos
   let x = numerotarjeta.length;                                                  //cantidad de elementos del string
   if(x<16){
      alert("Ingrese todos los Digitos de su Gift Card")
      document.getElementById('formulariotarjeta').reset();
   } else{
      let numerotarjetainvertida ="";                                      //guarda  elementos de variable invertidos
         while (x>=0){                                                     //verifica si se cumple condicion
         numerotarjetainvertida += numerotarjeta.charAt(x);                //envia ultima posicion del elemento a numerotarjetainvertida
            x--;
         parseInt(numerotarjetainvertida.trim).value;                      //Variable se convierte en numero y  se eliminan espacios vacios dentro de ella
         }

let par = [];
let impar= [];
   for ( let i=0; i< numerotarjetainvertida.length ;i++ ) {                    //recorriendo el array
      if (i%2===0){                                                           //pregunta si la posicion es par
      par.push(numerotarjetainvertida[i]*2);                               //posicion par multiplica y envia a variable 
   for (let j in par){
      if (par [j]>9){                                                //identifica resultado con valor sobre 9
      par [j]= (parseInt(par[j]%10)) + (parseInt(par[j]/10));     //reduce valor a 1 digito suma
      }
   }
       } else {
         impar.push(numerotarjetainvertida[i]);                                //posicion impar enviada a su variable
         }
let sum= par.concat(impar);                                    //une los array, en una nueva
parseInt(sum).value;

let suma = sum.reduce((a, b) => a + b, 0);[];                  //suma elementos del array
parseInt(suma).value;
   if (suma % 10 === 0 && suma!==0){
   if (suma % 10 === 0) {

   alert('Tarjeta válida');
   document.getElementById('formulariotarjeta').reset();
   }else{
      // (suma % 10 != 0);
       return alert('Tarjeta invalida');
   }
   }
// console.log(suma);
   }
   }
}
)

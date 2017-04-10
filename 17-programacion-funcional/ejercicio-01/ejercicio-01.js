function isValidCard(creditCardNumber) {
    
    // Escribe tu código aquí
    if(creditCardNumber == null || creditCardNumber == undefined) { //Prueba 1
      return "Ingresa un numero";
  }    if(typeof creditCardNumber != "number"){ //Prueba 2
      return "Error de dato";
  }    if(dieciseisNumeros(creditCardNumber) != true){
      return "Faltan numeros";
  }
 
function dieciseisNumeros(creditCardNumber) {
   numero = creditCardNumber.toString;
   if(numero.length == 16){
       return true;
   }
}
    var longitud = creditCardNumber.length;
    var par = longitud % 2;
    var sum = 0;
    for (var i = longitud-1; i >= 0; i--) {
        var num = parseInt(creditCardNumber.charAt(i));
        if (i % 2 == par) { num *= 2; }
        if (num > 9) { num -= 9; }
        sum += num;
    }
    var result = sum%10;
    
    if ( result == 0){
        return true;
    } else{
        return false;
    }

}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}

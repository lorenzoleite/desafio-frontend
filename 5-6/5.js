var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var frase = "Ja fiz vinho com toque de kiwi para belga sexy";

function validatePangram(frase) {
  frase = frase.toLowerCase();
  var faltantes = [];
  for (var i in alfabeto) {
    var letra = alfabeto[i];
    if(frase.indexOf(letra) < 0) {
      faltantes[faltantes.length] = letra;
    }
  }
  return faltantes.length == 0 ? "Essa frase é um pangrama! :D" : "Essa frase não é um pangrama! D:";
}

console.log(validatePangram(frase));
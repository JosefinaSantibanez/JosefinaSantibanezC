function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//Predicción1: Si se llama a la función se mostrara el siguiente mensaje: "Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//Predicción2: Si se llama a la función se mostrara el siguiente mensaje: "brócoli", "helado", "croqueta de papa"
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
//Predicción3: el siguiente codigo mostrara "Bambi", "BeetleJuice", "Toy Story", ¨Zoro¨
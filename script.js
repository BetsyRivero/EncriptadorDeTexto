
function encriptar () {

	var texto = document.querySelector( "input" ).value;

	// * Verificar que no esté vacío
	if ( texto.length === 0 ){

		alert( "Introduzca Texto" );

	// * Verificar que solo tenga texto en minúsculas y espacios
	} else if (/[^a-z ]/.test(texto)) {

		alert( "Introduzca solo letras minusculas y sin acento" );
		document.querySelector("input:first-of-type").value = "";

	// * Si está todo correcto, ejecuta el resto de la función
	} else {

		var palabraEncriptada = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"); // Reemplazo vocales por palabras
		document.querySelector("#resultado").innerHTML = palabraEncriptada;
		document.querySelector("input:first-of-type").value = "";

	}

}


function desencriptar () {

		var texto = document.querySelector( "input" ).value;

	if ( texto.length === 0 ){

		alert( "Introduzca Texto" );

	// * Verificar que solo tenga texto en minúsculas y espacios
	} else if (/[^a-z ]/.test(texto)) {

		alert( "Introduzca solo letras minusculas y sin acento" );
		document.querySelector("input:first-of-type").value = "";

	// * Si está todo correcto, ejecuta el resto de la función
	} else {

	var palabraDesencriptada = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.querySelector("#resultado").innerHTML = palabraDesencriptada;
	document.querySelector("input:first-of-type").value = "";
	}
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function copiar (){

	var copiaTextarea = document.getElementById("resultado");
	copiaTextarea.select(); // Selecciona campo textarea
	document.execCommand('copy'); // Copia al portapapeles
	
	alert("Se copio el Texto");

}

botonCopiar.onclick = copiar;
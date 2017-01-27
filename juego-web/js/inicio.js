// ctrl + f5 - recargar limpiando la caché

document.addEventListener('DOMContentLoaded', function() {
	inicio.iniciarJuego();
}, false);

var inicio = {
	iniciarJuego: function() {
		console.log("Juego iniciado");
		dimensiones.iniciar();
		buclePrincipal.iterar();
	}
};
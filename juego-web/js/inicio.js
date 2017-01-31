// ctrl + f5 - recargar limpiando la caché

document.addEventListener('DOMContentLoaded', function() {
	inicio.iniciarJuego();
}, false);

var inicio = {
	iniciarJuego: function() {
		console.log("Juego iniciado");
		dimensiones.iniciar();
		var r = new Rectangulo(0, 0, 100, 100);
		var r2 = new Rectangulo(100, 0, 100, 100);
		buclePrincipal.iterar();
	}
};
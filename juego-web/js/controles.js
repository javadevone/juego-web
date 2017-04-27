var controles = {
	arriba: false,
	abajo: false,
	izquierda: false,
	derecha: false,
	actualizar: function() {
		if (teclado.teclaPulsada(controlesTeclado.arriba)) {
			controles.arriba = true;
			console.log("arriba");
		}
		if (teclado.teclaPulsada(controlesTeclado.abajo)) {
			controles.abajo = true;
			console.log("abajo");
		}
		if (teclado.teclaPulsada(controlesTeclado.izquierda)) {
			controles.izquierda = true;
			console.log("izquierda");
		}
		if (teclado.teclaPulsada(controlesTeclado.derecha)) {
			controles.derecha = true;
			console.log("derecha");
		}
	},
	reiniciar: function() {
		controles.arriba = false;
		controles.abajo = false;
		controles.izquierda = false;
		controles.derecha = false;
	}
};
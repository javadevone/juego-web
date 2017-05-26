function JugadorMapamundi(posicionInicialEnPixeles) {
	this.ancho = 48;
	this.alto = 48;

	this.velocidadMovimiento = 1;

	var centroX = dimensiones.ancho / 2 - this.ancho / 2;
	var centroY = dimensiones.alto / 2 - this.alto / 2;
	this.posicionCentrada = new Punto(centroX, centroY);

	this.posicionEnMapaEnPixeles = posicionInicialEnPixeles;

	this.aplicarEstilos();
}

JugadorMapamundi.prototype.aplicarEstilos = function() {
	var idHTML = "jugador";
	document.getElementById(idHTML).style.backgroundColor = "white";
	document.getElementById(idHTML).style.position = "absolute";
	document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
	document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
	document.getElementById(idHTML).style.width = this.ancho + "px";
	document.getElementById(idHTML).style.height = this.alto + "px";
	document.getElementById(idHTML).style.zIndex = "10";
}
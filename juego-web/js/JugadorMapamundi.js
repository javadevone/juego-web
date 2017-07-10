function JugadorMapamundi(posicionInicialEnPixeles) {
	this.ancho = 48;
	this.alto = 48;

	this.velocidadMovimiento = 3;

	//eliminar decimales y centrar al jugador
	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);
	this.posicionCentrada = new Punto(centroX, centroY);

	this.limiteArriba = new Rectangulo(centroX, centroY, this.ancho, 1);
	this.limiteAabajo = new Rectangulo(centroX, centroY + this.alto - 1, this.ancho, 1);
	this.limiteIzquierda = new Rectangulo(centroX, centroY, 1, this.alto);
	this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY, 1, this.alto);

	//convertir positivos en negativos y viceversa
	posicionInicialEnPixeles.x *= -1;
	posicionInicialEnPixeles.y *= -1;

	this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x,
		this.posicionCentrada.y + posicionInicialEnPixeles.y);

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

JugadorMapamundi.prototype.actualizar = function(registroTemporal) {
	if(teclado.teclaPulsada(controlesTeclado.arriba)) {
		this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.abajo)) {
		this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.izquierda)) {
		this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.derecha)) {
		this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
	}
}
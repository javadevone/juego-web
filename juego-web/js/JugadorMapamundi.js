function JugadorMapamundi(posicionInicialEnPixeles) {
	this.ancho = 48;
	this.alto = 48;

	this.velocidadMovimiento = 3;

	//eliminar decimales y centrar al jugador
	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);
	this.posicionCentrada = new Punto(centroX, centroY);

	this.limiteArriba = new Rectangulo(centroX + this.ancho / 3, centroY, this.ancho / 3, 1);
	this.limiteAbajo = new Rectangulo(centroX + this.ancho / 3, centroY + this.alto - 1, this.ancho / 3, 1);
	this.limiteIzquierda = new Rectangulo(centroX, centroY + this.alto / 3, 1, this.alto / 3);
	this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY + this.alto / 3, 1, this.alto / 3);

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

JugadorMapamundi.prototype.comprobarColisiones = function(mapa) {
	var colisionArriba = false;
	var colisionAbajo = false;
	var colisionIzquierda = false;
	var colisionDerecha = false;
	
	if (!this.limiteArriba.cruza(mapa.limiteMapa)) {
		colisionArriba = true;
	}
	if (!this.limiteAbajo.cruza(mapa.limiteMapa)) {
		colisionAbajo = true;
	}
	if (!this.limiteIzquierda.cruza(mapa.limiteMapa)) {
		colisionIzquierda = true;
	}
	if (!this.limiteDerecha.cruza(mapa.limiteMapa)) {
		colisionDerecha = true;
	}
	
	for (var i = 0; i < mapa.rectangulosColisiones.length; i++) {
		
		var traduccionTemporalColision = new Rectangulo(
			mapa.rectangulosColisiones[i].x + mapa.posicion.x,
			mapa.rectangulosColisiones[i].y + mapa.posicion.y,
			mapa.rectangulosColisiones[i].ancho,
			mapa.rectangulosColisiones[i].alto
		);
		
		if(this.limiteArriba.cruza(traduccionTemporalColision)) {
			colisionArriba = true;
		}
		if(this.limiteAbajo.cruza(traduccionTemporalColision)) {
			colisionAbajo = true;
		}
		if(this.limiteIzquierda.cruza(traduccionTemporalColision)) {
			colisionIzquierda = true;
		}
		if(this.limiteDerecha.cruza(traduccionTemporalColision)) {
			colisionDerecha = true;
		}
	}
	
	if(!colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)) {
		this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
	}
	if(!colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)) {
		this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
	}
	if(!colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) {
		this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
	}
	if(!colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) {
		this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
	}
}

JugadorMapamundi.prototype.actualizar = function(registroTemporal, mapa) {
	this.comprobarColisiones(mapa);
}
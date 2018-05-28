function EstadoMapamundi(idEstado) {
	var that = this;
	this.mapaListo = false;
	this.mapa = null;
	this.jugadorMapamundi = null;
	ajax.cargarArchivo("mapas/desierto48.json", function(objetoJSON) {
		that.mapa = new Mapa(objetoJSON);
		that.mapaListo = true;
		that.jugadorMapamundi = new JugadorMapamundi(new Punto(500,500));
		console.log("mapa cargado por AJAX");
	});
}

EstadoMapamundi.prototype.actualizar = function(registroTemporal) {
	if (!this.mapaListo || this.mapa == null || this.jugadorMapamundi == null) {
		return;
	}
	
	this.jugadorMapamundi.actualizar(registroTemporal, this.mapa);
	this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);

	let localizacionAtravesada = false;

	for(var i = 0; i < this.mapa.rectangulosLocalizaciones.length; i++) {
		let rActual = this.mapa.rectangulosLocalizaciones[i].rectangulo;
		let nombre = this.mapa.rectangulosLocalizaciones[i].nombre;
		let rTemporal = new Rectangulo(rActual.x + this.mapa.posicion.x,
		rActual.y + this.mapa.posicion.y, rActual.ancho, rActual.alto);
		if(rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral)) {
			localizacionAtravesada = true;
			if(!popup.visible) {
				popup.mostrar(dimensiones.ancho / 2 - 150, dimensiones.alto / 2 - 100,
				300, nombre);
			}
		}

		if(!localizacionAtravesada && popup.visible) {
			popup.ocultar();
		}
	}
}

EstadoMapamundi.prototype.dibujar = function() {
	if (!this.mapaListo) {
		return;
	}
	this.mapa.dibujar();
}
function EstadoMapamundi(idEstado) {
	var that = this;
	this.mapaListo = false;
	this.mapa = null;
	this.jugadorMapamundi = null;
	ajax.cargarArchivo("mapas/desierto48.json", function(objetoJSON) {
		that.mapa = new Mapa(objetoJSON);
		that.mapaListo = true;
		that.jugadorMapamundi = new JugadorMapamundi(new Punto(0,0));
		console.log("mapa cargado por AJAX");
	});
}

EstadoMapamundi.prototype.actualizar = function() {
	if (!this.mapaListo) {
		return;
	}
	this.mapa.actualizar();
}

EstadoMapamundi.prototype.dibujar = function() {
	if (!this.mapaListo) {
		return;
	}
	this.mapa.dibujar();
}
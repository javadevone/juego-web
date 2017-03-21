function Mapa(objetoJSON) {
	this.posicion = new Punto(0,0);
	this.posicionActualizada = new Punto(0,0);

	this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
	this.altoMedidoEnTiles = parseInt(objetoJSON.height);
	this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
	this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

	this.paletasSprites = [];
	this.iniciarPaletasSprites(objetoJSON.tilesets);

	this.capasTiles = [];
	this.iniciarCapas(objetoJSON.layers);
}

Mapa.prototype.iniciarPaletasSprites = function(datosCapas) {
	for (i = 0; i < datosCapas.length; i++) {
		this.paletasSprites.push(new PaletaSprites(datosCapas[i]));
	}
}

Mapa.prototype.iniciarCapas = function(datosCapas) {
	for (i = 0; i < datosCapas.length; i++) {
		switch(datosCapas[i].type) {
			case "tilelayer":
				this.capasTiles.push(new CapaMapaTiles(
					datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites));
				break;
			case "objectgroup":
				break;
		}
	}
}

Mapa.prototype.actualizar = function() {

}

Mapa.prototype.dibujar = function() {
	
}
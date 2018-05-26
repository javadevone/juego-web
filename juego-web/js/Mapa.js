function Mapa(objetoJSON) {
	this.posicion = new Punto(0,0);
	this.posicionActualizada = new Punto(0,0);

	this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
	this.altoMedidoEnTiles = parseInt(objetoJSON.height);
	this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
	this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

	this.paletasSprites = [];
	this.iniciarPaletasSprites(objetoJSON.tilesets);

	this.rectangulosColisiones = [];
	this.rectangulosLocalizaciones = [];
	this.capasTiles = [];
	this.iniciarCapas(objetoJSON.layers);

	this.iniciarRejilla();

	this.limiteMapa = new Rectangulo(this.posicion.x,
		this.posicion.y,
		this.anchoMedidoEnTiles * this.anchoDeLosTiles,
		this.altoMedidoEnTiles * this.altoDeLosTiles, "colision");
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
				if (datosCapas[i].name == "colisiones") {
					for (c = 0; c < datosCapas[i].objects.length; c++) {
						this.rectangulosColisiones.push(new Rectangulo(
							datosCapas[i].objects[c].x, datosCapas[i].objects[c].y,
							datosCapas[i].objects[c].width, datosCapas[i].objects[c].height, "colision"
						));
					}
				}
				if (datosCapas[i].name == "localizaciones") {
					for (l = 0; l < datosCapas[i].objects.length; l++) {
						this.rectangulosLocalizaciones.push(new Localizacion(new Rectangulo(
							datosCapas[i].objects[l].x, datosCapas[i].objects[l].y,
							datosCapas[i].objects[l].width, datosCapas[i].objects[l].height, "localizacion"
						), datosCapas[i].objects[l].name));
					}
					console.log("Capa de localizaciones");
				}
				break;
		}
	}
}

Mapa.prototype.iniciarRejilla = function() {
	var anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
	var altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

	var html = "";

	for (ct = 0; ct < this.capasTiles.length; ct++) {
		for (t = 0; t < this.capasTiles[ct].tiles.length; t++) {
			if (this.capasTiles[ct].tiles[t] == null) {
				continue;
			}
			var tileActual = this.capasTiles[ct].tiles[t];
			html += tileActual.html;
		}
	}

	document.getElementById("mapa").innerHTML = html;
	
	var htmlColisiones = "";
	for(c = 0; c < this.rectangulosColisiones.length; c++) {
		htmlColisiones += this.rectangulosColisiones[c].html;
	}
	
	document.getElementById("colisiones").innerHTML = htmlColisiones;
	
	var htmlLocalizaciones = "";
	for(l = 0; l < this.rectangulosLocalizaciones.length; l++) {
		htmlLocalizaciones += this.rectangulosLocalizaciones[l].rectangulo.html;
	}
	
	document.getElementById("localizaciones").innerHTML = htmlLocalizaciones;

	for (ct = 0; ct < this.capasTiles.length; ct++) {
		for (t = 0; t < this.capasTiles[ct].tiles.length; t++) {
			if (this.capasTiles[ct].tiles[t] == null) {
				continue;
			}
			var tileActual = this.capasTiles[ct].tiles[t];
			tileActual.aplicarEstilos();
		}
	}
	
	if(debug.debugging) {
		for (c = 0; c < this.rectangulosColisiones.length; c++) {
			this.rectangulosColisiones[c].aplicarEstiloTemporal("#ff0000");
		}
		
		for (l = 0; l < this.rectangulosLocalizaciones.length; l++) {
			this.rectangulosLocalizaciones[l].rectangulo.aplicarEstiloTemporal("#00ff00");
		}
	}
	
	
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

Mapa.prototype.actualizar = function(registroTemporal, posicionJugadorEnPixeles) {
	this.posicion.x = posicionJugadorEnPixeles.x;
	this.posicion.y = posicionJugadorEnPixeles.y;

	this.limiteMapa.x = this.posicion.x;
	this.limiteMapa.y = this.posicion.y;
}

Mapa.prototype.dibujar = function() {
	for (c = 0; c < this.capasTiles.length; c++) {
		for (i = 0; i < this.capasTiles[c].tiles.length; i++) {
			this.capasTiles[c].tiles[i].mover(this.posicion.x, this.posicion.y);
		}
	}
	
	if(debug.debugging) {
		for (rc = 0; rc < this.rectangulosColisiones.length; rc++) {
			this.rectangulosColisiones[rc].mover(this.posicion.x, this.posicion.y);
		}
		
		for (rl = 0; rl < this.rectangulosLocalizaciones.length; rl++) {
			this.rectangulosLocalizaciones[rl].rectangulo.mover(this.posicion.x, this.posicion.y);
		}
	}
	
	
}

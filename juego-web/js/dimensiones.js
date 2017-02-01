var dimensiones = {
	ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	ladoTiles: 100,
	escala: 1,
	iniciar: function() {
		window.addEventListener("resize", function(evento) {
			dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			inicio.recargarTiles();
		});
	},
	obtenerTilesHorizontales: function() {
		var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
		return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal);
	},
	obtenerTilesVerticales: function() {
		var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
		return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal);
	},
	obtenerTotalTiles: function() {
		return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
	}
};
var maquinaEstados = {
	estadoActual: null,
	iniciar: function() {
		maquinaEstados.cambiarEstado(listadoEstados.PANTALLA_TITULO);
	},
	cambiarEstado: function(nuevoEstado) {
		switch(nuevoEstado) {
			case listadoEstados.CARGANDO:
				break;
			case listadoEstados.MENU_INICIAL:
				break;
			case listadoEstados.MAPAMUNDI:
				maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
				break;
			case listadoEstados.NIVEL:
				break;
			case listadoEstados.PANTALLA_TITULO:
				console.log("iniciando pantalla");
				maquinaEstados.estadoActual = new EstadoPantallaTitulo();
				break;
		}
	},
	actualizar: function(registroTemporal) {
		maquinaEstados.estadoActual.actualizar(registroTemporal);
	},
	dibujar: function() {
		maquinaEstados.estadoActual.dibujar();
	}
}
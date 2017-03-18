var maquinaEstados = {
	estadoActual: null,
	iniciar: function() {

	},
	cambiarEstado: function(nuevoEstado) {
		switch(nuevoEstado) {
			case listadoEstados.CARGANDO:
				break;
			case listadoEstados.MENU_INICIAL:
				break;
			case listadoEstados.MAPAMUNDI:
				// cargar mapamundi
				break;
			case listadoEstados.NIVEL:
				break;
		}
	},
	actualizar: function() {
		maquinaEstados.estadoActual.actualizar();
	},
	dibujar: function() {
		maquinaEstados.estadoActual.dibujar();
	}
}
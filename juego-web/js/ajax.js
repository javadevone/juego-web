var ajax = {
	cargarArchivo: function(ruta, manipularDatos) {
		var peticion = new XMLHttpRequest();

		peticion.onreadystatechange = function() {
			/*
			0 / UNSENT - no iniciada
			1 / OPENED - conectado al servidor
			2 / HEADERS_RECIEVED - peticion recbida
			3 / LOADING - procesando peticion
			4 / DONE - peticion finalizada, respuesta preparada
			*/
			if (peticion.readyState == XMLHttpRequest.DONE) {
				if (peticion.status == 200) {
					manipularDatos(JSON.parse(peticion.responseText));
				} else if (peticion.status == 400) {
					console.log("error");
				} else {
					console.log("resultado inesperado");
				}
			}
		};

		peticion.open("GET", ruta, true);
		peticion.send();
	}
}
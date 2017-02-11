var mando = {
	objeto: null,
	eventosDisponibles: 'ongamepadconnected' in window,
	conectado: false,
	iniciar: function() {
		if (mando.eventosDisponibles) {
			window.addEventListener("gamepadconnected", mando.conectar);
			window.addEventListener("gamepaddisconnected", mando.desconectar);
		} else {
			mando.actualizar();
		}
	},
	conectar: function(evento) {
		mando.objeto = evento.gamepad;
		mando.identificar();
	},
	desconectar: function(evento) {
		console.log("Mando desconectado del índice %d: %s.", evento.gamepad.index, evento.gamepad.id);
	},
	actualizar: function() {
		if (!mando.eventosDisponibles) {
			mandos = null;

			try {
				mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
				mando.objeto = mandos[0];
				if(!mando.conectado) {
					mando.conectado = true;
					mando.identificar();
				}
			} catch(exception) {
				console.log(exception.message);
			}
		}

		if (!mando.objeto) {
			return;
		}

		//continuará
	},
	botonPulsado: function(boton) {

	},
	identificar: function() {

	}
}
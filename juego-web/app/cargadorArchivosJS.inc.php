<?php

$fecha = new DateTime();

$fuentesJavascript = array(
	"js/debug.js",
	"js/dimensiones.js",
	"js/audio.js",
	"js/EstadoPantallaTitulo.js",
	"js/popup.js",
	"js/Rectangulo.js",
	"js/RegistroLocalizacionEntrada.js",
	"js/registroLocalizaciones.js",
	"js/Localizacion.js",
	"js/JugadorMapamundi.js",
	"js/Sprite.js",
	"js/Tile.js",
	"js/CapaMapaTiles.js",
	"js/PaletaSprites.js",
	"js/listadoEstados.js",
	"js/ajax.js",
	"js/EstadoMapamundi.js",
	"js/maquinaEstados.js",
	"js/Punto.js",
	"js/Mapa.js",
	"js/controlesTeclado.js",
	"js/teclado.js",
	"js/mando.js",	
	"js/buclePrincipal.js",
	"js/inicio.js"
);

foreach($fuentesJavascript as $fuente) {
	echo '<script src="' . $fuente . '?' . $fecha -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}
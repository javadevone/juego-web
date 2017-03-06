<?php

$fecha = new DateTime();

$fuentesJavascript = array(
	"js/ajax.js",
	"js/teclado.js",
	"js/rectangulo.js",
	"js/mando.js",
	"js/buclePrincipal.js",
	"js/dimensiones.js",
	"js/inicio.js"
);

foreach($fuentesJavascript as $fuente) {
	echo '<script src="' . $fuente . '?' . $fecha -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}
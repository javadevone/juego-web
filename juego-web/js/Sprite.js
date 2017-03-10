function Sprite(ruta, idSobreZero, posicionEnHoja) {
	var elementosRuta = ruta.split("/");
	this.rutaHojaOrigen = "img/" elementosRuta[elementosRuta.length - 1];
}

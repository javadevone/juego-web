function Sprite(ruta, idSobreZero, posicionEnHoja) {
	var elementosRuta = ruta.split("/");
	this.rutaHojaOrigen = "img/" + elementosRuta[elementosRuta.length - 1];
	this.idSobreZero = idSobreZero;
	this.idSobreUno = idSobreZero + 1;
	this.posicionEnHoja = posicionEnHoja;
}